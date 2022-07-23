import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import Fab from "../components/Fab";
import InputButton from "../components/InputButton";
import ThoughtComp from "../components/ThoughtComp";
import { Topic } from "../components/Topic";
import { Message } from "../types/message";
import "./Tab3.css";
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

const Tab3: React.FC = () => {
  const history = useHistory();

  const inputOnClick = () => {
    history.push("/thoughts/post");
    window.location.reload();
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="content" className="px-8">
          <section id="header" className="pt-10">
            <h1 className="font-semibold mb-4 text-[30px]">Topic of the day</h1>
          </section>
          <Topic />
          <InputButton onClick={inputOnClick} />
          <div className=" flex flex-col divide-y">
            {thoughtAPIResponse.map((thoughts, index) => {
              return <ThoughtComp key={index} thoughts={thoughts} />;
            })}
          </div>
        </div>
      </IonContent>
      <Fab />
    </IonPage>
  );
};

export default Tab3;
