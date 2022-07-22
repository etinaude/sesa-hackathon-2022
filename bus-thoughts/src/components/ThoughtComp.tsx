import "./ThoughtComp.css";

interface ContainerProps {
  name: string;
  thought: string;
}

const ThoughtComp: React.FC<ContainerProps> = ({ name, thought }) => {
  return (
    <div className="thoughtBubble">
      <strong>{name}</strong>
      <p>{thought}</p>
    </div>
  );
};

export default ThoughtComp;
