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

const InputComp = (props: { setPostData: (props?: any) => void }) => {
  const { setPostData } = props;
  const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);
  const [message, setMessage] = useState("");

  if (loading || error) {
    console.log(loading);
    console.log(error);
    return null;
  }

  return (
    <div className="input-bar">
      <textarea
        placeholder="What are you thinking now?"
        onChange={(e) => setPostData(e.target.value)}
      />
    </div>
  );
};

export default InputComp;
