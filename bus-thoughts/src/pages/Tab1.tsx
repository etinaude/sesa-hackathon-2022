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
import { gql, useLazyQuery, useMutation } from "@apollo/client";

const ADD_MESSAGE = gql`
mutation CreateMessage {
  addMessage(id: "INSERTED!!!", message: "asdfasdfasdf", date: "asdfasdf", reply: "asdfasf") {
    id
    message
    date
    reply
  }
}
`;

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
  const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);

  if (loading || error) {
    console.log("bad boy");
    console.log(loading);
    console.log(error);
    return null;
  }

  addMessage()

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

        <div className="thought-container">{thoughts}</div>

        <InputComp></InputComp>
      </IonContent>

      <Fab />
    </IonPage>
  );
};

export default Tab1;
