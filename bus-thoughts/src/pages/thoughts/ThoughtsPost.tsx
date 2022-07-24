import { IonContent, IonPage } from "@ionic/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Fab from "../../components/Fab";
import InputComp from "../../components/InputComp";
import "./ThoughtsPost.css";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($messageInput: MessageInput) {
    createMessage(messageInput: $messageInput) {
      name
      content
      image
    }
  }
`;

const CREATE_TOPIC_MESSAGE = gql`
  mutation CreateTopicMessage($topicMessageInput: MessageInput) {
    createTopicMessage(topicMessageInput: $topicMessageInput) {
      name
      content
      image
    }
  }
`;

const ThoughtsPost: React.FC = () => {
  const location = useLocation();
  const state: any = location.state;
  const [postData, setPostData] = useState("");
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const [createTopicMessage] = useMutation(CREATE_TOPIC_MESSAGE);

  const history = useHistory();

  const handleButtonClick = () => {
    console.log(postData);

    if (state.isTopic) {
      createTopicMessage({
        variables: {
          topicMessageInput: {
            name: window.sessionStorage.getItem("name"),
            content: postData,
            image: window.sessionStorage.getItem("image")
          },
        },
      });
      history.push("/bus-123/tab3");
    } else {
      createMessage({
        variables: {
          messageInput: {
            name: window.sessionStorage.getItem("name"),
            content: postData,
            image: window.sessionStorage.getItem("image")
          },
        },
      });
      history.push("/bus-123/thoughts");
    }
    
    window.location.reload();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <section
          id="header"
          className="pt-10 px-8 flex flex-row justify-between"
        >
          <h1 className="font-semibold mb-4 text-[30px]">My Thoughts</h1>
          <button
            onClick={() => handleButtonClick()}
            className="bg-primary text-white px-4 h-9 rounded-lg"
          >
            Share
          </button>
        </section>
        <InputComp setPostData={setPostData} />
      </IonContent>

      <Fab />
    </IonPage>
  );
};

export default ThoughtsPost;
