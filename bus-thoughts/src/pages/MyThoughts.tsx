import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import Fab from "../components/Fab";
import InputComp from "../components/InputComp";
import "./MyThoughts.css";

const MyThoughts: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader className="ion-no-border">
                    <IonToolbar>
                        <IonTitle>My Thoughts</IonTitle>
                        <IonButtons slot="primary">
                            <IonButton id="share-button" shape="round" fill="solid">
                                Share
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <InputComp></InputComp>
            </IonContent>

            <Fab />
        </IonPage>
    );
};

export default MyThoughts;
