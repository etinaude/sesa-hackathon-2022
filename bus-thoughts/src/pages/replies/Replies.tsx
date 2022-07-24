import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import Fab from "../../components/Fab";
import ReplyComp from "../../components/ReplyComp";
import ThoughtComp from "../../components/ThoughtComp";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Message } from "../../types/message";
import { IonTextarea } from "@ionic/react";

const REPLIE_QUERY = gql`
  query GetReplies($id: ID!, $isTopic: Boolean) {
    getReplies(ID: $id, isTopic: $isTopic) {
      _id
      name
      content
      likes
      isLiked
      replies
      replyTo
      createdAt
    }
  }
`;

const GET_NAME = gql`
  query Query($id: ID!, $isTopic: Boolean) {
    getName(ID: $id, isTopic: $isTopic)
  }
`;

const CREATE_REPLY = gql`
  mutation CreateReply($replyInput: MessageReplyInput) {
    createReply(replyInput: $replyInput) {
      name
      content
      _id
    }
  }
`;

const Replies = () => {
  const params = useParams();
  const location = useLocation();
  const state: any = location.state;
  const { message, isTopic } = state;
  const [createReply] = useMutation(CREATE_REPLY);

  const { data: repliesData } = useQuery(REPLIE_QUERY, {
    variables: {
      id: message._id,
      isTopic: isTopic,
    },
  });

  const { data: nameData } = useQuery(GET_NAME, {
    variables: {
      id: message._id,
      isTopic: isTopic,
    },
  });
  const [replyMessages, setReplyMessages] = useState<Message[]>([]);
  const [replyToName, setReplyToName] = useState("");

  const [replyValue, setReplyValue] = useState("");

  const name = window.sessionStorage.getItem("name");

  useEffect(() => {
    if (nameData != undefined) {
      const { getName } = nameData;
      setReplyToName(getName);
    } else {
      setReplyToName("Anonym");
    }
  }, [nameData]);

  useEffect(() => {
    console.log(repliesData);
    if (repliesData != undefined) {
      const { getReplies } = repliesData;
      setReplyMessages(getReplies);
    } else {
      setReplyMessages([]);
    }
  }, [repliesData]);

  const handleReply = () => {
    if (repliesData != undefined) {
      console.log(replyValue);
      console.log(message._id);
      if (isTopic) {
        createReply({
          variables: {
            replyInput: {
              replyTo: message._id,
              name: name,
              content: replyValue,
              isTopic: true,
            },
          },
        });
      } else {
        createReply({
          variables: {
            replyInput: {
              replyTo: message._id,
              name: name,
              content: replyValue,
              isTopic: false,
            },
          },
        });
      }
    }
    window.location.reload();
  };

  return (
    <div className="px-8 h-screen flex flex-col overflow-y-scroll">
      <section id="header" className="pt-10 sticky top-0 bg-white">
        <h1 className="font-semibold mb-4 text-[30px]">Replies</h1>
      </section>
      <div className="flex flex-col divide-y">
        <ThoughtComp
          thoughts={state.message}
          isTopic={isTopic}
          replies={message.replies.length}
        />
        <div className="">
          {replyMessages.length > 0 ? (
            replyMessages.map((message, index) => {
              return (
                <ReplyComp
                  key={index}
                  message={message}
                  replies={message.replies.length}
                  replyTo={replyToName}
                />
              );
            })
          ) : (
            <div className="mt-3">No replies yet, post one now!</div>
          )}
        </div>
      </div>
      <div className="flex flex-row sticky bottom-10 mb-10 gap-3">
        <textarea
          onChange={(e) => setReplyValue(e.target.value)}
          className=" outline-none resize-none w-full h-14 bg-grey rounded-lg py-3 px-3"
          placeholder="Enter a thought..."
        />
        <button
          onClick={handleReply}
          className="bg-primary text-white px-5 h-14 rounded-lg"
        >
          ✔
        </button>
      </div>
    </div>
  );
};

export default Replies;
