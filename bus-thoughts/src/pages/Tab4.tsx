import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab4.scss";
import React, { useState, useEffect } from "react";
import Fab from "../components/Fab";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const CREATE_LEADERBOARD_TIME = gql`
  mutation CreateLeaderboardTime($leaderboardInput: LeaderboardInput) {
    createLeaderboardTime(leaderboardInput: $leaderboardInput) {
      name
      image
      time
    }
  }
`;

const Tab4: React.FC = () => {
  const [textArray, updateDisplayText] = useState([<></>]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [isModal, setModal] = useState(false);
  const [createLeaderboardTime] = useMutation(CREATE_LEADERBOARD_TIME);

  const requiredText = "abcdefghijklmnopqrstuvwxyz";

  const closeModal = () => {
    createLeaderboardTime({
      variables: {
        leaderboardInput: {
          name: window.sessionStorage.getItem("name"),
          image: window.sessionStorage.getItem("image"),
          time: time.toString(),
        },
      },
    });
    setModal(false);
    setTime(0);
    updateTextArray("");
  };

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const updateTextArray = (text: string) => {
    let tempText = [];

    if (text.length === 0) {
      setRunning(false);
      setTime(0);
    } else {
      setRunning(true);
      setModal(false);
    }

    let valid = true;
    for (let i = 0; i < requiredText.length; i++) {
      const classText =
        "item " +
        (text[i] === requiredText[i]
          ? "valid true"
          : text.length < i + 1
          ? "empty"
          : "invalid");

      valid = classText.includes("true");

      tempText.push(
        <div key={i} className={classText}>
          {requiredText[i]}
        </div>
      );
    }

    if (valid) {
      setModal(true);
      setRunning(false);
    }

    updateDisplayText(tempText);
  };

  useEffect(() => {
    // Update the document title using the browser API
    updateTextArray("");
  }, []);
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="content" className="px-8">
          <section id="header" className="pt-10">
            <h1 className="font-semibold mb-4 text-[30px]">Text Speedster</h1>
          </section>
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
        </div>
        <div className="text-cont">
          <div className="text-area template">{textArray}</div>
          <textarea
            spellCheck="false"
            className="text-area"
            onChange={(e) => updateTextArray(e.target.value)}
          />
        </div>

        <div
          className={isModal ? "modal" : "hidden"}
          onTouchEnd={() => closeModal()}
        >
          <div className="modal-content">
            <h2> WOOHOO!!! you're done</h2>

            <p>
              Time:{" "}
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </p>
            <button
              className="solid rounded bg-sky-500 p-5"
              onTouchEnd={() => history.push("/bus-123/leaderboard")}
            >
              Go to Leaderboard
            </button>
          </div>
        </div>
      </IonContent>

      <Fab />
    </IonPage>
  );
};

export default Tab4;
