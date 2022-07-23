import "./ThoughtComp.css";
import LikeIcon from "../assets/like-icon.svg";
import ReplyIcon from "../assets/reply-icon.svg";

interface ContainerProps {
  name: string;
  thought: string;
  ReplyTo?: string;
}

const ThoughtComp: React.FC<ContainerProps> = ({ name, thought, ReplyTo }) => {
  const currentDate = new Date();
  return (
    <div className="py-4">
      {/* <strong>{name}</strong>
      <p>{thought}</p> */}
      <section id="header" className="flex flex-row gap-3">
        <div id="avatar" className="w-12 h-12 rounded-full bg-slate-500"></div>
        <div id="info" className="flex flex-col">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">{`${currentDate.toLocaleString()}`}</p>
        </div>
      </section>
      <section id="content" className="mt-1 px-1">
        <p>{thought}</p>
      </section>
      <section id="footer" className="flex flex-row gap-3 mt-2 px-1">
        <div id="reply" className="flex flex-row justify-center">
          <img src={LikeIcon} alt="like-icon" />
          <p>count</p>
        </div>
        <div id="like">
          <img src={ReplyIcon} alt="reply-icon" />
        </div>
      </section>
    </div>
  );
};

export default ThoughtComp;
