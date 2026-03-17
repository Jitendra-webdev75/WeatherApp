import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState("");
  const [isOn, setIson] = useState(false);

  const apiKey = "c87452cfea264e3c9f4161806261703";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`;

  const getData = async () => {
    let code = response.current.condition.code;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setDetail(`${result.current.temp_c} °C`);
  };
  return (
    <>
      <div className="main h-[100vh] w-[100vw] flex justify-center items-center bg-zinc-800">
        <div
          className="contentBox h-[76vh] w-[50vw] bg-emerald-500 rounded-2xl
          p-10"
        >
          <div className="searchBar flex items-center">
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Search City name"
              className="h-[8vh] w-[32vw] bg-amber-100 p-2 text-2xl outline-0 
              rounded-l-xl"
            />
            <button
              onClick={getData}
              className="h-[8vh] w-[11vw] bg-blue-800 text-white rounded-r-2xl
              active:scale-95"
            >
              Search
            </button>
          </div>
          <div className="weathDetail flex items-center">
            <h1 className="text-6xl p-10 text-amber-50">{detail}</h1>
            <div className="images ">
              <img
                src="./src/assets/clear.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2
                  "
              />
              <img
                src="./src/assets/cloud.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
              <img
                src="./src/assets/drizzle.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
              <img
                src="./src/assets/humidity.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
              <img
                src="./src/assets/snow.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
              <img
                src="./src/assets/wind.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
              <img
                src="./src/assets/rain.png"
                className="h-[30vh] w-[17vw] absolute top-48 left-52 translate-x-4/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
