import "./ThoughtComp.css";
import LikeIcon from "../assets/like-icon.svg";
import ReplyIcon from "../assets/reply-icon.svg";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Message } from "../types/message";

const SET_LIKED = gql`
  mutation SetLiked($id: ID!, $liked: Boolean!) {
    setLiked(id: $id, liked: $liked) {
      id
      likes
      message
      date
      reply
    }
  }
`;

type ContainerProps = Message;

const ThoughtComp: React.FC<ContainerProps> = ({ id: key, name, message }) => {
  const currentDate = Date.now();
  const [hasLiked, setHasLiked] = useState(false);

  const [setLiked, { data, loading, error }] = useMutation(SET_LIKED);

  const clickedLike = () => {
    console.log("hasLiked: " + !hasLiked);
    setLiked({ variables: { id: key, liked: !hasLiked } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="py-4">
      {/* <strong>{name}</strong>
      <p>{thought}</p> */}
      <section id="header" className="flex flex-row gap-3">
        <div id="avatar" className="w-12 h-12 rounded-full bg-slate-500"></div>
        <div id="info" className="flex flex-col">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">{`${currentDate.toLocaleString()}`}</p>
        </div>
      </section>
      <section id="content" className="mt-1 px-1">
        <p>{message}</p>
      </section>
      <section id="footer" className="flex flex-row gap-3 mt-2 px-1">
        <div id="like" className="flex flex-row justify-center">
          <img src={LikeIcon} alt="like-icon" onClick={() => clickedLike()} />
          <p>count</p>
        </div>
        <div id="reply">
          <img src={ReplyIcon} alt="reply-icon" />
        </div>
      </section>
    </div>
  );
};

export default ThoughtComp;
