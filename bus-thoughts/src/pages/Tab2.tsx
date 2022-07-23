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
import React, { useState } from "react";
import { BlockPicker } from "react-color";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Tab2: React.FC = () => {
  const [pickedColor, pickColor] = useState("#ff7788");
  const [strokeWidth, setStrokeWidth] = useState(2);

  const [isColorOpen, setColorOpen] = useState(false);

  const [paths, setPaths] = React.useState<CanvasPath[]>([]);

  const canvasRef = React.createRef<ReactSketchCanvasRef>();

  const loadPath = (path: CanvasPath[]) => {
    setPaths(path);
  };

  const selectColor = (color: any) => {
    console.log(color.hex);
    pickColor(color.hex);
  };

  const onChange = (updatedPaths: any): void => {
    console.log(updatedPaths);
    setPaths(updatedPaths);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ReactSketchCanvas
          style={styles}
          strokeWidth={strokeWidth}
          strokeColor={pickedColor}
          ref={canvasRef}
          onChange={onChange}
        />
      </IonContent>

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
      <Fab></Fab>
    </IonPage>
  );
};

export default Tab2;
