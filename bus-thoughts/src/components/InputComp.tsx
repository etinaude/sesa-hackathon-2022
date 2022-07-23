import { useMutation, gql } from "@apollo/client";
import { IonButton } from "@ionic/react";
import { useState } from "react";
import "./InputComp.css";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($message: String!) {
    addMessage(
      id: "asdfasdfasdf"
      message: $message
      date: "asdfasdf"
      reply: "asdfasf"
    ) {
      id
      message
      date
      reply
    }
  }
`;

interface ContainerProps {}

const InputComp: React.FC<ContainerProps> = () => {
  const [message, setMessage] = useState("");

  const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);
  if (loading || error) {
    console.log(loading);
    console.log(error);
    return null;
  }

  return (
    <>
      <div className="input-bar">
        <input
          type="text"
          placeholder="Enter a thought..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <IonButton
          className="ion-float-right"
          onClick={() => {
            addMessage({ variables: { message } });
            setMessage("");
          }}
        >
          Add Message
        </IonButton>
      </div>
    </>
  );
};

export default InputComp;
