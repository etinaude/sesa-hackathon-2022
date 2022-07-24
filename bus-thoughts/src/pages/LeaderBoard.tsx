import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import PlayerScoreComp from "../components/PlayerScoreComp";
import Fab from "../components/Fab";
import { IonContent, IonPage } from "@ionic/react";

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

type Leaderboard = {
  _id: string;
  name: string;
  image: string;
  time: number;
};

const LeaderBoard = () => {
  const { data } = useQuery(LEADERBOARD_QUERY);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      const { leaderboards } = data;
      let arrayForSort: any = [...leaderboards];
      arrayForSort.sort((a: Leaderboard, b: Leaderboard) => {
        return a.time - b.time;
      });
      setLeaderboard(arrayForSort);
    }
  }, [data]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <p className="text-3xl p-5 font-extrabold">LeaderBoard</p>
          <div className="grid grid-flow-row-dense grid-cols-3">
            <div className="text-2xl ml-2">Avatar</div>
            <div className="text-2xl ml-[-20px] mr-3">Name</div>
            <div className="text-2xl">Time</div>
          </div>
          {leaderboard.length > 0 ? (
            leaderboard.map(
              (
                player: {
                  name: String;
                  image: String;
                  time: String;
                },
                index
              ) => {
                return (
                  <PlayerScoreComp
                    key={index}
                    name={player.name.toString()}
                    time={player.time.toString()}
                    image={player.image.toString()}
                  />
                );
              }
            )
          ) : (
            <div>No high scores yet for this bus.</div>
          )}
          <Fab />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LeaderBoard;
