import { useEffect, useState } from "react";
import { Message } from "../types/message";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import LikeIconInactive from "../assets/like-icon-inactive.svg";
import ReplyIconInactive from "../assets/reply-icon-inactive.svg";
import LikeIconActive from "../assets/like-icon-active.svg";
import ReplyIconActive from "../assets/reply-icon-active.svg";

interface IReply {
  message: Message;
  isTopic?: boolean;
  replyTo: string;
  replies?: number;
  setReplyMessage?: (props?: any) => void;
}
const SET_LIKES = gql`
  mutation SetLikes($id: ID!, $likesInput: MessageLikesInput) {
    setLikes(ID: $id, likesInput: $likesInput) {
      likes
    }
  }
`;

const GET_NAME = gql`
  query Query($id: ID!, $isTopic: Boolean) {
    getName(ID: $id, isTopic: $isTopic)
  }
`;

const ReplyComp = (props: IReply) => {
  const history = useHistory();
  const { message, isTopic, replyTo, replies, setReplyMessage } = props;

  const [likeActive, setLikeActive] = useState(message.isLiked);
  const [replyActive, setReplyActive] = useState(false);
  const [likedCount, setLikedCount] = useState(message.likes);
  const [setLikes] = useMutation(SET_LIKES);
  const { data } = useQuery(GET_NAME, {
    variables: {
      id: message._id,
      isTopic: isTopic,
    },
  });
  const [replyToName, setReplyToName] = useState("");

  useEffect(() => {
    if (data != undefined) {
      const { getName } = data;
      setReplyToName(getName);
    } else {
      setReplyToName("Anonym");
    }
  }, []);

  const handleLikedClicked = () => {
    if (!likeActive) {
      setLikedCount(likedCount + 1);
      setLikes({
        variables: {
          id: message._id,
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
          id: message._id,
          likesInput: {
            likes: likedCount - 1,
            isLiked: false,
          },
        },
      });
    }
    setLikeActive(!likeActive);
  };
  const handleReply = (message: Message) => {};
  return (
    <div className="py-4 pl-5">
      <section id="header" className="flex flex-row gap-3 justify-start">
        <div id="avatar">
          <img className="w-12 h-12" src={message.image} alt="avatar" />
        </div>
        <div className="flex flex-col w-60">
          <div id="info" className="flex flex-row gap-2 w-full items-center">
            <p className="text-lg font-bold">{message.name}</p>
            <p className="text-sm">
              {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>
          <section id="content" className="mt-1">
            <p className="text-sm font-semibold pb-1 text-gray-400">{`Reply to @${replyTo}`}</p>
            <p>{message.content}</p>
          </section>
          <section
            id="footer"
            className="items-center flex flex-row gap-3 mt-2"
          >
            <div
              id="like"
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
              id="reply"
              className="gap-1 items-center flex flex-row justify-center"
            >
              <button
                onTouchStart={() => {
                  setReplyActive(true);
                  setReplyMessage!(message);
                }}
              >
                <img
                  src={replyActive ? ReplyIconActive : ReplyIconInactive}
                  alt="reply-icon"
                />
              </button>
              <p className="text-sm">{replies != 0 && replies}</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ReplyComp;
