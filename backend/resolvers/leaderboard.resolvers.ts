import Leaderboard from "../models/leaderboard.js";

export const leaderboardResolver = {
    Query: {
        async leaderboards() {
            return await Leaderboard.find();
        },
    },
    Mutation: {
        async createLeaderboardTime(_, { leaderboardInput: { name, image, time } }) {
            const newLeaderboard = new Leaderboard({
                name: name,
                image: image,
                time: time
            });

            const res = await newLeaderboard.save();
            
            return {
                id: res.id,
                ...res._doc
            }
        }
    }
}