import Message from "../models/message.js";
import TopicMessage from "../models/topic.js";

export const messageResolver = {
    Query: {
        async messages() {
            return await Message.find();
        },
        async topicMessages() {
            return await TopicMessage.find();
        }
    },
    Mutation: {
        async createMessage(_, { messageInput: { name, content } }) {
            const newMessage = new Message({
                name: name,
                content: content,
                createdAt: new Date().toISOString(),
                likes: 0,
                isLiked: false,
                replies: [],
                replyTo: null
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
    }
}