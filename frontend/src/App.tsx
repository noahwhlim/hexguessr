import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState<string>("");
  const [color, setColor] = useState<string>("#000000");
  const [streak, setStreak] = useState<number>(0);

  const generateHex = (): void => {
    let hex: string =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    setColor(hex);
    // console.log("generated hex: ", hex);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if ("#" + answer === color) {
      setStreak(streak + 1);
    } else {
      window.alert("Incorrect! The correct answer was: " + color);
      setStreak(0);
    }
    setAnswer("");
    generateHex();
  };

  useEffect(() => {
    generateHex();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen font-sans text-lg lg:text-2xl"
      style={{ backgroundColor: color }}
    >
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        {/* <div className="h-20" style={{ backgroundColor: color }}></div> */}
        <h1 className="flex font-bold text-lg lg:text-2xl justify-center">
          Guess the hex!
        </h1>

        <div className="flex justify-center mt-1 mb-2 text-sm lg:text-lg">
          {"streak: " + streak}
        </div>
        <form onSubmit={onFormSubmit} className="">
          <div className="flex flex-row relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 text-md lg:text-xl">#</span>
            </div>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 text-md lg:text-xl sm:leading-6"
            />
          </div>

          <button
            type="submit"
            className="mt-4 p-1 w-full rounded-lg bg-gray-300 border border-black hover:bg-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
