import {
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

// TEMP REPLACE
const thoughtAPIResponse = [
  {
    name: "John Doe",
    Message: "This is a test thought a",
    id: "a",
  },
  {
    name: "Jane Doe",
    Message: "Good thought",
    id: "b",
  },
  {
    name: "Doe",
    Message: "Wow cool app",
    id: "c",
  },
  {
    name: "Joe",
    Message: "Whats this random QR code?",
    ReplyTo: "aaaa",
    id: "d",
  },
  {
    name: "Joe",
    Message: "Whats this random QR code?",
    ReplyTo: "aaaa",
    id: "e",
  },
  {
    name: "Joe",
    Message: "Whats this random QR code?",
    ReplyTo: "aaaa",
    id: "f",
  },
  {
    name: "Joe",
    Message: "Whats this random QR code?",
    ReplyTo: "aaaa",
    id: "g",
  },
  {
    name: "Joe",
    Message: "Whats this random QR code?",
    ReplyTo: "aaaa",
    id: "h",
  },
];

var thoughts: any = [];
thoughtAPIResponse.forEach((thought) => {
  thoughts.push(
    <ThoughtComp
      key={thought.id}
      name={thought.name}
      thought={thought.Message}
      ReplyTo={thought.ReplyTo}
    />
  );
});

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bus Thoughts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bus Thoughts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InputComp></InputComp>
        <div className="px-8 flex flex-col divide-y">{thoughts}</div>
      </IonContent>

      <Fab />
    </IonPage>
  );
};

export default Tab1;
