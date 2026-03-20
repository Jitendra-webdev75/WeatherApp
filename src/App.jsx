import { useState } from "react";
import Cards from "./component/Cards.jsx";
import humidity from "../src/assets/humidity.png";
import wind from "../src/assets/wind.png";

function App() {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [loc, setLoc] = useState("");
  const [humd, setHumd] = useState("");
  const [windM, setWindM] = useState("");
  const [isOn, setIson] = useState("");

  const getData = async () => {
    const apiKey = "c87452cfea264e3c9f4161806261703";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`;
    const response = await fetch(url);
    const result = await response.json();
    let code = result.current.condition.code;
    console.log(result);
    setTemp(`${result.current.temp_c}°C`);
    setLoc(`${result.location.name}`);
    setHumd(`${result.current.humidity}`);
    setWindM(`${result.current.wind_kph}Kph`);

    imgHandler(code);
  };

  const imgHandler = (code) => {
    if (code == 1000) {
      setIson("clear");
    } else if (code == 1006 || code == 1009) {
      setIson("clouded");
    } else if (code == 1003) {
      setIson("partlyCloud");
    } else if (code == 1030) {
      setIson("mist");
    } else if (code == 1063 || code == 1183 || code == 1273) {
      setIson("drizzle");
    } else if (code == 1189) {
      setIson("rain");
    } else if (code == 1210 || code == 1225) {
      setIson("snow");
    } else {
      setIson("clouded");
    }
  };
  return (
    <>
      <div className="main h-[100vh] w-[100vw] flex  justify-center items-center bg-zinc-800">
        <div
          className="contentBox  h-[70vh] w-[33vw] bg-emerald-500 rounded-2xl 
          p-10"
        >
          <div className="searchBar flex items-center ">
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

          <div className="weathDetail flex items-center gap-2 pt-10   ">
            <div className="weatHead flex flex-col gap-5  p-1">
              <h1 className="text-6xl  text-amber-50">{temp}</h1>
              <h2 className="text-4xl  text-amber-50">{loc}</h2>
            </div>
            <div className="images h-[26vh] w-[50vw]  object-contain ">
              {isOn && (
                <img
                  src={`./src/assets/${isOn}.png`}
                  className="h-[26vh] w-[17vw]  
                  "
                />
              )}
            </div>
          </div>
          <div className="cardDiv flex gap-6 pt-7">
            <Cards value={humd} icon={humidity} />
            <Cards value={windM} icon={wind} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
