import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import InputComp from "../components/InputComp";
import ThoughtComp from "../components/ThoughtComp";
import Fab from "../components/Fab";
import "./Tab1.css";
import { Message } from "../types/message";
import InputButton from "../components/InputButton";
import { Redirect, useHistory } from "react-router";

// TEMP REPLACE
const thoughtAPIResponse: Message[] = [
  {
    name: "John Doe",
    message: "This is a test thought a",
    date: "jaksfjdlsa",
    id: "a",
    likes: 0,
  },
  {
    name: "Jane Doe",
    message: "Good thought",
    id: "b",
    likes: 1,
    date: "jaksfjdlsa",
  },
  {
    name: "Doe",
    message: "Wow cool app",
    id: "c",
    likes: 5,
    date: "jaksfjdlsa",
  },
  {
    name: "Joe",
    message: "Whats this random QR code?",
    reply: "aaaa",
    id: "d",
    likes: 0,
    date: "jaksfjdlsa",
  },
  {
    name: "Joe",
    message: "Whats this random QR code?",
    reply: "aaaa",
    id: "e",
    likes: 50,
    date: "jaksfjdlsa",
  },
  {
    name: "Joe",
    message: "Whats this random QR code?",
    reply: "aaaa",
    id: "f",
    likes: 2,
    date: "jaksfjdlsa",
  },
  {
    name: "Joe",
    message: "Whats this random QR code?",
    id: "asdfasf",
    reply: "aaaa",
    likes: 5,
    date: "jaksfjdlsa",
  },
  {
    name: "Joe",
    message: "Whats this random QR code?",
    reply: "aaaa",
    id: "h",
    likes: 5,
    date: "jaksfjdlsa",
  },
];

var thoughts: any = [];
thoughtAPIResponse.forEach((thought) => {
  thoughts.push(
    <ThoughtComp
      key={thought.id}
      id={thought.id}
      name={thought.name}
      message={thought.message}
      reply={thought.reply}
      date={thought.date}
      likes={thought.likes}
    />
  );
});

const Tab1 = () => {
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
            <h1 className="font-semibold mb-4 text-[30px]">Thoughts</h1>
          </section>
          <section id="input">
            <InputButton onClick={inputOnClick} />
          </section>
          <section id="thoughts" className="flex flex-col mt-1 divide-y">
            {thoughts}
          </section>
        </div>
      </IonContent>
      <Fab />
    </IonPage>
  );
};

export default Tab1;
