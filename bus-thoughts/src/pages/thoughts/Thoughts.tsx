import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Thoughts.css";
import { gql, useQuery } from "@apollo/client";
import InputComp from "../../components/InputComp";
import ThoughtComp from "../../components/ThoughtComp";
import Fab from "../../components/Fab";
import InputButton from "../../components/InputButton";
import { Redirect, useHistory } from "react-router";
import { Message } from "../../types/message";
import { useEffect, useState } from "react";

const MESSAGE_QUERY = gql`
  query Messages {
    messages {
      _id
      replies
      replyTo
      createdAt
      name
      content
      likes
      isLiked
      image
    }
  }
`;

// TEMP REPLACE

const ThoughtsPage = () => {
  const history = useHistory();
  const { data } = useQuery(MESSAGE_QUERY);
  console.log("data: ", data);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (data != undefined) {
      const { messages } = data;
      setMessages(messages);
    }
  }, [data]);

  console.log("messages: ", messages);

  const inputOnClick = () => {
    history.push({
      pathname: "/thoughts/post",
      state: {
        isTopic: false,
      },
    });
    window.location.reload();
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="content" className="px-8">
          <section id="header" className="pt-10 sticky top-0 bg-white">
            <h1 className="font-semibold mb-4 text-[30px]">Thoughts</h1>
            <section id="input">
              <InputButton onClick={inputOnClick} />
            </section>
          </section>
          <section id="thoughts" className="flex flex-col mt-1 divide-y">
            {messages.length > 0 ? (
              messages.map((thoughts: Message, index) => {
                if (thoughts != null) {
                  return (
                    <ThoughtComp
                      key={index}
                      replies={thoughts.replies && thoughts.replies.length}
                      thoughts={thoughts}
                      isTopic={false}
                    />
                  );
                }
              })
            ) : (
              <div>No thoughts found on the bus, share one now!</div>
            )}
          </section>
        </div>
      </IonContent>
      <Fab />
    </IonPage>
  );
};

export default ThoughtsPage;
