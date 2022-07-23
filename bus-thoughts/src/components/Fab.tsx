import "./Fab.scss";
import { useHistory } from "react-router-dom";

// import { Link } from "@react-navigation/native";

interface ContainerProps {}

const Fab: React.FC<ContainerProps> = () => {
  // const linkTo = useLinkTo();
  const navigate = useHistory();
  return (
    <div className="fab-container">
      <div className="fab">
        <div className="icon">☰</div>
      </div>
      <div className="menu">
        <div className="menu-item">Daily Thought</div>
        <div className="menu-item">Canvas</div>

        <div className="menu-item">Canvas</div>
      </div>
    </div>
  );
};

export default Fab;
