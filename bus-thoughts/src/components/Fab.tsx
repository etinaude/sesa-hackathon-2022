import "./Fab.scss";
import { useHistory } from "react-router-dom";

// import { Link } from "@react-navigation/native";

interface ContainerProps {}

const Fab: React.FC<ContainerProps> = () => {
  // const linkTo = useLinkTo();
  const history = useHistory();
  return (
    <div className="fab-container">
      <div className="fab">
        <div className="icon">☰</div>
      </div>
      <div className="menu">
        <div className="menu-item" onTouchEnd={(e) => history.push("/tab1")}>
          Daily Thought
        </div>
        <div className="menu-item" onTouchEnd={(e) => history.push("/tab2")}>
          Canvas
        </div>

        <div className="menu-item" onTouchEnd={(e) => history.push("/tab3")}>
          Topic of the day
        </div>
      </div>
    </div>
  );
};

export default Fab;
