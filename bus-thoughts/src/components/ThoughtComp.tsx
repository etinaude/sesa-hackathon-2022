import "./ThoughtComp.css";
import { useMutation, gql } from "@apollo/client";
import LikeIconInactive from "../assets/like-icon-inactive.svg";
import ReplyIconInactive from "../assets/reply-icon-inactive.svg";
import LikeIconActive from "../assets/like-icon-active.svg";
import ReplyIconActive from "../assets/reply-icon-active.svg";
import { useState } from "react";
import { Message } from "../types/message";
import { useHistory } from "react-router";
import Avatar from "boring-avatars";

const SET_LIKES = gql`
  mutation SetLikes($id: ID!, $likesInput: MessageLikesInput) {
    setLikes(ID: $id, likesInput: $likesInput) {
      likes
    }
  }
`;

type ContainerProps = Message;

interface IThoughtComp {
  thoughts: Message;
}

const ThoughtComp = (props: IThoughtComp) => {
  const history = useHistory();
  const { thoughts } = props;
  const [hasLiked, setHasLiked] = useState(false);
  const [likeActive, setLikeActive] = useState(thoughts.isLiked);
  const [replyActive, setReplyActive] = useState(false);
  const [likedCount, setLikedCount] = useState(thoughts.likes);

  const [setLikes, { data, loading, error }] = useMutation(SET_LIKES);

  const handleLikedClicked = () => {
    if (!likeActive) {
      setLikedCount(likedCount + 1);
      setLikes({
        variables: {
          id: thoughts._id,
          likesInput: {
            likes: likedCount + 1,
            isLiked: true,
          },
        },
      });
    } else {
      setLikedCount(likedCount - 1);
      setLikes({
        variables: {
          id: thoughts._id,
          likesInput: {
            likes: likedCount - 1,
            isLiked: false,
          },
        },
      });
    }
    setLikeActive(!likeActive);
  };

  return (
    <div className="py-4">
      <section id="header" className="flex flex-row gap-3">
        <img src={thoughts.image} alt="avatar"/>
        {/* <div id="avatar">{thoughts.image}</div> */}
        <div id="info" className="flex flex-col">
          <p className="text-lg font-bold">{thoughts.name}</p>
          <p className="text-sm">
            {new Date(thoughts.createdAt).toLocaleString()}
          </p>
        </div>
      </section>
      <section id="content" className="mt-1 px-1">
        <p>{thoughts.content}</p>
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
                pathname: "/bus-123/thoughts/replies/1",
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
