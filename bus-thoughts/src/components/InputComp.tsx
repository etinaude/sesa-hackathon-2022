import "./InputComp.css";

interface ContainerProps {}

const InputComp: React.FC<ContainerProps> = () => {
  return (
    <div className="input-bar">
      <textarea placeholder="What are you thinking now?" />
    </div>
  );
};

export default InputComp;
