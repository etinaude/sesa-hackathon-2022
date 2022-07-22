import "./InputComp.css";

interface ContainerProps {}

const InputComp: React.FC<ContainerProps> = () => {
  return (
    <div className="input-bar">
      <input type="text" placeholder="Enter a thought..." />
    </div>
  );
};

export default InputComp;
