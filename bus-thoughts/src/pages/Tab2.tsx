import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.scss";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Fab from "../components/Fab";
import React, { useState, useEffect } from "react";
import { BlockPicker } from "react-color";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Tab2: React.FC = () => {
  const [pickedColor, pickColor] = useState("#ff7788");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [isColorOpen, setColorOpen] = useState(false);
  const [updateTimeStamp, updateUpdateTime] = useState(0);
  const [paths, setPaths] = React.useState<CanvasPath[]>([]);

  const canvasRef = React.createRef<ReactSketchCanvasRef>();

  const updateServer = () => {
    if (Date.now() - updateTimeStamp > 5000) {
      console.log("updated");
      updateUpdateTime(Date.now());

      // ! API GOES HERE

      // ! GET FROM SERVER HERE then load path
    }
  };

  const loadPath = (path: CanvasPath[]) => {
    setPaths(path);
  };

  const selectColor = (color: any) => {
    console.log(color.hex);
    pickColor(color.hex);
  };

  const onChange = (updatedPaths: any): void => {
    // console.log(updatedPaths);
    updateServer();
    setPaths(updatedPaths);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="content heading" className="px-8">
          <section id="header" className="pb-2 pt-10">
            <h1 className="font-semibold mb-4 text-[30px]">
              Draw Together
            </h1>
          </section>
        </div>
        <div className="color-menu-container">
          <div className="item" onClick={() => setColorOpen(!isColorOpen)}>
            size
            <input
              type="range"
              min="1"
              max="10"
              className="slider"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
            />
          </div>

          <div className="item">
            <img
              onClick={() => setColorOpen(!isColorOpen)}
              alt=""
              src="https://res.cloudinary.com/etienne-naude/image/upload/v1658547625/color_n8jdfc.png"></img>

            <div className={isColorOpen ? "picker " : "picker hidden"}>
              <BlockPicker
                color={pickedColor}
                onChangeComplete={(pickedColor) => selectColor(pickedColor)}
              />
            </div>
          </div>
        </div>
        <div className="canvas">
          <ReactSketchCanvas
            style={styles}
            strokeWidth={strokeWidth}
            strokeColor={pickedColor}
            ref={canvasRef}
            onChange={onChange}
          />
        </div>
        
      </IonContent>
      <Fab></Fab>
    </IonPage>
  );
};

export default Tab2;
