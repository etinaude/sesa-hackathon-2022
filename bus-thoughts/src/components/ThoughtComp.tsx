import "./ThoughtComp.css";
import { useMutation, gql } from "@apollo/client";
import LikeIconInactive from "../assets/like-icon-inactive.svg";
import ReplyIconInactive from "../assets/reply-icon-inactive.svg";
import LikeIconActive from "../assets/like-icon-active.svg";
import ReplyIconActive from "../assets/reply-icon-active.svg";
import { useState } from "react";
import { Message } from "../types/message";
import { useHistory } from "react-router";

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

interface IThoughtComp {
  thoughts: Message;
}

const ThoughtComp = (props: IThoughtComp) => {
  const history = useHistory();
  const currentDate = Date.now();
  const { thoughts } = props;
  const [hasLiked, setHasLiked] = useState(false);
  const date = new Date();
  const [likeActive, setLikeActive] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  // const [setLiked, { data, loading, error }] = useMutation(SET_LIKED, {
  //   variables: {
  //     id: key,
  //     liked: !hasLiked,
  //   },
  // });

  // const clickedLike = () => {
  //   console.log("hasLiked: " + !hasLiked);
  //   setHasLiked(!hasLiked);
  //   setLiked();
  // };

  // if (loading || error) {
  //   console.log(loading);
  //   console.log(error);
  //   return null;
  // }

  const handleLikedClicked = () => {
    if (!likeActive) {
      setLikedCount(likedCount + 1);
    } else {
      setLikedCount(likedCount - 1);
    }
    setLikeActive(!likeActive);
  };

  return (
    <div className="py-4">
      <section id="header" className="flex flex-row gap-3">
        <div id="avatar" className="w-12 h-12 rounded-full bg-slate-500"></div>
        <div id="info" className="flex flex-col">
          <p className="text-lg font-bold">{thoughts.name}</p>
          <p className="text-sm">{`${date.toLocaleString()}`}</p>
        </div>
      </section>
      <section id="content" className="mt-1 px-1">
        <p>{thoughts.message}</p>
      </section>
      <section
        id="footer"
        className="items-center flex flex-row gap-3 mt-2 px-1"
      >
        <div
          id="reply"
          className="gap-1 items-center flex flex-row justify-center"
        >
          <button onClick={handleLikedClicked}>
            <img
              src={likeActive ? LikeIconActive : LikeIconInactive}
              alt="like-icon"
            />
          </button>
          <p className="text-sm w-1">{likedCount != 0 && likedCount}</p>
        </div>
        <div
          id="like"
          className="gap-1 items-center flex flex-row justify-center"
        >
          <button
            onTouchStart={() => {
              setReplyActive(true);
              history.push({
                pathname: "/thoughts/replies/1",
                state: { thoughts: thoughts },
              });
              window.location.reload();
            }}
          >
            <img
              src={replyActive ? ReplyIconActive : ReplyIconInactive}
              alt="reply-icon"
            />
          </button>
          <p className="text-sm">3</p>
        </div>
      </section>
    </div>
  );
};

export default ThoughtComp;
