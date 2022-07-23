import "./ThoughtComp.css";

interface ContainerProps {
  name: string;
  thought: string;
  ReplyTo?: string;
}

const ThoughtComp: React.FC<ContainerProps> = ({ name, thought, ReplyTo }) => {
  return (
    <div className={ReplyTo ? "thoughtBubble reply" : "thoughtBubble"}>
      <strong>{name}</strong>
      <p>{thought}</p>
    </div>
  );
};

export default ThoughtComp;
