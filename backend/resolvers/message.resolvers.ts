import Message from "../models/message.js";
import TopicMessage from "../models/topic.js";

export const messageResolver = {
    Query: {
        async messages() {
            const res = await Message.find()
            const results = res.map((result) => {
                if (result.replyTo) {
                    console.log("reply")
                } else {
                    return result
                }
            })
            console.log(results)
            return results;
        },
        async topicMessages() {
            return await TopicMessage.find();
        },
        async getReplies(_, { ID, isTopic }) {
            console.log(ID)
            if (isTopic) {
                console.log("reply: ", ID)
                const res = await TopicMessage.findById(ID)
                if (res.replies.length > 0) {
                    const replies = Promise.all(res.replies.map(async (reply) => {
                        return await TopicMessage.findById(reply);
                    }))
                    console.log('replies: ', replies)
                    return replies
                } else {
                    return []
                }
            } else {
                console.log("reply: ", ID)

                const res = await Message.findById(ID)
                if (res.replies.length > 0) {
                    const replies = Promise.all(res.replies.map(async (reply) => {
                        return await Message.findById(reply);
                    }))
                    console.log('replies: ', replies)

                    return replies
                } else {
                    return []
                }
            }
        },
        async getName(_, { ID, isTopic}) {
            if (isTopic) {
                const res = await TopicMessage.findById(ID)
                return res.name
            } else {
                const res = await Message.findById(ID)
                return res.name
            }
        }
    },
    Mutation: {
        async createMessage(_, { messageInput: { name, content, image } }) {
            const newMessage = new Message({
                name: name,
                content: content,
                createdAt: new Date().toISOString(),
                likes: 0,
                isLiked: false,
                replies: [],
                replyTo: null,
                image: image
            });

            const res = await newMessage.save();
            
            return {
                id: res.id,
                ...res._doc
            }
        },
        async setLikes(_, { ID, likesInput: { likes, isLiked } }) {
            const updatedMessage = (await Message.updateOne({ _id: ID }, { likes: likes, isLiked: isLiked })).modifiedCount;
            return updatedMessage;
        },
        async createTopicMessage(_, { topicMessageInput: { name, content, image } }) {
            const newTopicMessage = new TopicMessage({
                name: name,
                content: content,
                createdAt: new Date().toISOString(),
                likes: 0,
                isLiked: false,
                replies: [],
                replyTo: null,
                image: image
            });

            const res = await newTopicMessage.save();
            
            return {
                id: res.id,
                ...res._doc
            }
        },
        async setTopicLikes(_, { ID, likesInput: { likes, isLiked } }) {
            const updatedMessage = (await TopicMessage.updateOne({ _id: ID }, { likes: likes, isLiked: isLiked })).modifiedCount;
            return updatedMessage;
        },
        async createReply(_, { replyInput: { replyTo, name, content, isTopic, image } }) {
            console.log("create reply: ", replyTo)
                if (isTopic) {
                    const newTopicReply = new TopicMessage({
                        name: name,
                        content: content,
                        createdAt: new Date().toISOString(),
                        likes: 0,
                        isLiked: false,
                        replies: [],
                        image: image,
                        replyTo: replyTo
                    });
        
                    const res = await newTopicReply.save();
    
                    await TopicMessage.updateOne({ _id: replyTo }, { $push: {replies: res.id}  });
            
                    return {
                        id: res.id,
                        ...res._doc
                    };
                } else {
                    console.log(image)
                    const newMessage = new Message({
                        name: name,
                        content: content,
                        createdAt: new Date().toISOString(),
                        likes: 0,
                        isLiked: false,
                        replies: [],
                        image: image,
                        replyTo: replyTo
                    });
        
                    const res = await newMessage.save();

                    await Message.updateOne({ _id: replyTo }, { $push: {replies: res.id}  });
                    
                    return {
                        id: res.id,
                        ...res._doc
                    }
                }
            }
    }
}