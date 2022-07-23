import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Fab from "../../components/Fab";
import InputComp from "../../components/InputComp";
import "./ThoughtsPost.css";

const ThoughtsPost: React.FC = () => {
  const [postData, setPostData] = useState("");
  const handleButtonClick = () => {
    console.log(postData);
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
