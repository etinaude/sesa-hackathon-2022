import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import ReplyComp from "../../components/ReplyComp";
import ThoughtComp from "../../components/ThoughtComp";

const Replies = () => {
  const params = useParams();
  const location = useLocation();
  const state: any = location.state;
  console.log(state);
  return (
    <div className="px-8">
      <section id="header" className="pt-10">
        <h1 className="font-semibold mb-4 text-[30px]">Replies</h1>
      </section>
      <ThoughtComp thoughts={state.thoughts} />
      <ReplyComp message={state.thoughts} isTopic={false} />
    </div>
  );
};

export default Replies;
