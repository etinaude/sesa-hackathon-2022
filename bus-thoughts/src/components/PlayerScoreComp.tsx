import React from "react";

interface IPlayerScore {
  name: string;
  time: string;
  image: string;
}
const PlayerScoreComp = (props: IPlayerScore) => {
  const { name, time, image } = props;
  const convertTimeToString = (time: number) => {
    const timeString =
      `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:` +
      `${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:` +
      `${("0" + ((time / 10) % 100)).slice(-2)}`;
    return timeString;
  };
  return (
    <div className="solid border-b-2 p-4 grid grid-flow-row-dense grid-cols-3">
      <div className="">
        <img src={image.toString()} alt="avatar" />
      </div>
      <div className="text-xl ml-[-20px] mr-3">{name}</div>
      <div className="text-xl">{convertTimeToString(Number(time))}</div>
    </div>
  );
};

export default PlayerScoreComp;
