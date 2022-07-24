import Message from "../models/message.js";

export const messageResolver = {
    Query: {
        async messages() {
            return await Message.find();
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
        }
    }
}