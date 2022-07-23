import "./InputComp.css";

interface ContainerProps {}

interface IInputButton {
  onClick: (props?: any) => void;
}

const InputButton = (props: IInputButton) => {
  const { onClick } = props;
  return (
    <button
      onTouchEnd={onClick}
      className="h-14 w-full bg-grey rounded-md flex items-center pl-5 "
    >
      <p>What are you thinking now ...?</p>
    </button>
  );
};

export default InputButton;
