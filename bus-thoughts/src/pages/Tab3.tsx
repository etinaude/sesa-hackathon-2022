import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Fab from "../components/Fab";
import InputComp from "../components/InputComp";
import ThoughtComp from "../components/ThoughtComp";
import { Topic } from "../components/Topic";
import { Message } from "../types/message";
import "./Tab3.css";
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
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Topic of the day</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Topic of the day</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Topic />
        {/* TODO <InputButton/> */}
        <div className="px-8 flex flex-col divide-y">{thoughts}</div>
      </IonContent>
      <Fab />
    </IonPage>
  );
};

export default Tab3;
