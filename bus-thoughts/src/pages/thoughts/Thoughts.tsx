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
      replies
      replyTo
      createdAt
      name
      content
      likes
    }
  }
`;

// TEMP REPLACE
const thoughtAPIResponse: Message[] = [
  {
    name: "John Doe",
    content: "This is a test thought a",
    createdAt: "jaksfjdlsa",
    id: "a",
    replies: [],
    likes: 0,
  },
  {
    name: "Jane Doe",
    content: "Good thought",
    id: "b",
    likes: 1,
    replies: [],
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Doe",
    content: "Wow cool app",
    id: "c",
    likes: 5,
    replies: [],
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Joe",
    content: "Whats this random QR code?",
    reply: "aaaa",
    replies: [],
    id: "d",
    likes: 0,
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Joe",
    content: "Whats this random QR code?",
    reply: "aaaa",
    replies: [],
    id: "e",
    likes: 50,
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Joe",
    content: "Whats this random QR code?",
    reply: "aaaa",
    replies: [],
    id: "f",
    likes: 2,
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Joe",
    content: "Whats this random QR code?",
    id: "asdfasf",
    reply: "aaaa",
    replies: [],
    likes: 5,
    createdAt: "jaksfjdlsa",
  },
  {
    name: "Joe",
    content: "Whats this random QR code?",
    reply: "aaaa",
    replies: [],
    id: "h",
    likes: 5,
    createdAt: "jaksfjdlsa",
  },
];

// var thoughts: any = [];
// thoughtAPIResponse.forEach((thought) => {
//   thoughts.push(
//     <ThoughtComp
//       key={thought.id}
//       id={thought.id}
//       name={thought.name}
//       message={thought.message}
//       reply={thought.reply}
//       date={thought.date}
//       likes={thought.likes}
//     />
//   );
// });

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
    history.push("/thoughts/post");
    window.location.reload();
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="content" className="px-8">
          <section id="header" className="pt-10">
            <h1 className="font-semibold mb-4 text-[30px]">Thoughts</h1>
          </section>
          <section id="input">
            <InputButton onClick={inputOnClick} />
          </section>
          <section id="thoughts" className="flex flex-col mt-1 divide-y">
            {messages.map((thoughts, index) => {
              return <ThoughtComp key={index} thoughts={thoughts} />;
            })}
          </section>
        </div>
      </IonContent>
      <Fab />
    </IonPage>
  );
};

export default ThoughtsPage;
