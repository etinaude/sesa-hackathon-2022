import Message from "../models/message.js";
import TopicMessage from "../models/topic.js";

export const messageResolver = {
    Query: {
        async messages() {
            return await Message.find();
        },
        async topicMessages() {
            return await TopicMessage.find();
        },
        async getReplies(_, { ID, isTopic }) {
            console.log(ID)
            if (isTopic) {
                const res = await TopicMessage.findById(ID)
                if (res.replies.length > 0) {
                    const replies = Promise.all(res.replies.map(async (reply) => {
                        return await TopicMessage.findById(reply);
                    }))
                    return replies
                } else {
                    return []
                }
            } else {
                const res = await Message.findById(ID)
                if (res.replies.length > 0) {
                    const replies = Promise.all(res.replies.map(async (reply) => {
                        return await Message.findById(reply);
                    }))
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
        async createTopicMessage(_, { topicMessageInput: { name, content } }) {
            const newTopicMessage = new TopicMessage({
                name: name,
                content: content,
                createdAt: new Date().toISOString(),
                likes: 0,
                isLiked: false,
                replies: [],
                replyTo: null
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
        async createReply(_, { replyInput: { replyTo, name, content, isTopic } }) {
            console.log(replyTo)
            if (replyTo) {
                if (isTopic) {
                    const newTopicReply = new TopicMessage({
                        name: name,
                        content: content,
                        createdAt: new Date().toISOString(),
                        likes: 0,
                        isLiked: false,
                        replies: [],
                        replyTo: replyTo
                    });
        
                    const res = await newTopicReply.save();
    
                    await TopicMessage.updateOne({ _id: replyTo }, { $push: {replies: res.id}  });
            
                    return {
                        id: res.id,
                        ...res._doc
                    };
                } else {
                    const newMessage = new Message({
                        name: name,
                        content: content,
                        createdAt: new Date().toISOString(),
                        likes: 0,
                        isLiked: false,
                        replies: [],
                        replyTo: replyTo
                    });
        
                    const res = await newMessage.save();
                    
                    return {
                        id: res.id,
                        ...res._doc
                    }
                }
            }
        }
    }
}