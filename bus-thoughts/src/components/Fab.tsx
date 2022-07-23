import "./Fab.scss";
import { useHistory } from "react-router-dom";

// import { Link } from "@react-navigation/native";

interface ContainerProps {}

const Fab: React.FC<ContainerProps> = () => {
  // const linkTo = useLinkTo();
  const history = useHistory();
  const redirect = (location: string) => {
    history.push(location);
    window.location.reload();
  };
  return (
    <div className="fab-container">
      <div className="fab">
        <div className="icon">☰</div>
      </div>
      <div className="menu">
        <div className="menu-item" onTouchEnd={() => redirect("/tab2")}>
          Draw together
        </div>
        <div className="menu-item" onTouchEnd={() => history.push("/tab3")}>
          Topic of the day
        </div>
        <div className="menu-item" onTouchEnd={() => history.push("/tab3")}>
          Topic of the day
        </div>
      </div>
    </div>
  );
};

export default Fab;
