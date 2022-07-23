import { useHistory } from "react-router";
import { uniqueNamesGenerator, Config, adjectives, animals } from 'unique-names-generator';

const WelcomePage = () => {
  const history = useHistory();

  const config: Config = {
    dictionaries: [adjectives, animals],
    separator: " "
  }

  return (
    <div className="w-screen h-screen bg-primary text-white flex flex-col gap-10 items-center justify-center">
      <h1 className="font-bold text-[30px] text-white">Bus Besties</h1>
      <button
        onClick={() => {
          const name: string = uniqueNamesGenerator(config)
          window.sessionStorage.setItem("name", name);
          history.push("/thoughts");
          window.location.reload();
        }}
        className="rounded-md w-[70%] h-12 bg-white bg-opacity-10 text-white"
      >
        Enter
      </button>
    </div>
  );
};

export default WelcomePage;
