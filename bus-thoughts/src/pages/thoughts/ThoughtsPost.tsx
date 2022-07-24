import { IonContent, IonPage } from "@ionic/react";
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

const ThoughtsPost: React.FC = () => {
  const [postData, setPostData] = useState("");
  const [createMessage, { data, loading, error }] = useMutation(CREATE_MESSAGE);
  const hisotry = useHistory();

  const handleButtonClick = () => {
    createMessage({
      variables: {
        messageInput: {
          name: window.sessionStorage.getItem("name"),
          content: postData,
          image: window.sessionStorage.getItem("image")
        },
      },
    });
    hisotry.push("/thoughts");
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
