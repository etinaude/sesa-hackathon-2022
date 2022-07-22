import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import InputComp from "../components/InputComp";
import ThoughtComp from "../components/ThoughtComp";

import "./Tab1.css";

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

        <div className="thought-container">
          <ThoughtComp
            name="Fred"
            thought="Today I'm going to a hackathon!!!"
          />
          <ThoughtComp name="Fred" thought="@Fred SAME!!!" />
        </div>

        <InputComp></InputComp>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
