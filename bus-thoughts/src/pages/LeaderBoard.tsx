import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import PlayerScoreComp from '../components/PlayerScoreComp';

const LEADERBOARD_QUERY = gql`
  query Leaderboards {
    leaderboards {
      _id
      name
      image
      time
    }
  }
`;

const LeaderBoard = () => {
    const { data } = useQuery(LEADERBOARD_QUERY);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        if (data !== undefined) {
          const { leaderboards } = data;
          setLeaderboard(leaderboards);
        }
    }, [data]);

    return (
        <div>
        <div>LeaderBoard</div>
        {leaderboard.length > 0 ? (
            leaderboard.map((player: {
                name: String,
                image: String,
                time: String
            }, index) => {
                return <PlayerScoreComp key={index} name={player.name.toString()} time={player.time.toString()} image={player.image.toString()}/>;
              })
            ) : (
              <div>No high scores yet for this bus.</div>
            )}
        </div>

    )
}

export default LeaderBoard;
