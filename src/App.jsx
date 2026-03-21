import { useState } from "react";
import Cards from "./component/Cards.jsx";
import humidity from "../src/assets/humidity.png";
import wind from "../src/assets/wind.png";
import { RiSearchLine } from "@remixicon/react";

function App() {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [loc, setLoc] = useState("");
  const [humd, setHumd] = useState("");
  const [windM, setWindM] = useState("");
  const [isOn, setIson] = useState("");
  const [cond, setCond] = useState(false);

  const getData = async () => {
    if (value.trim() == "") {
      alert("🤡 Enter city name");
      return;
    }
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
    setCond(true);

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
      <div
        className="main h-[100vh] w-[100vw] flex  justify-center items-center 
        overflow-hidden bg-[radial-gradient(circle_farthest-corner_at_24.1%_68.8%,_rgba(50,50,50,1)_0%,_rgba(0,0,0,1)_99.4%)]"
      >
        <div
          className="contentBox  h-[72vh] w-[80vw] flex flex-col   backdrop:blur-md  rounded-2xl 
          p-10  bg-gradient-to-tr from-zinc-650 via-emerald-750 to-teal-600
          ring-1 ring-cyan-200 shadow-lg shadow-cyan-200
          sm:h-[73vh] sm:w-[70vw] sm:flex sm:flex-col sm:gap-6
          md:h-[63vh] md:w-[75vw]
          lg:h-[73vh] lg:w-[60vw]
          xl:h-[69vh] xl:w-[40vw]
"
        >
          <div className="searchBar  flex justify-center ">
            <input
              onChange={(e) => {
                if (e.target.value == "delhi") {
                  setValue(`${e.target.value},in`);
                } else {
                  setValue(e.target.value);
                }
              }}
              type="text"
              placeholder="Search City name"
              className="h-[8vh] w-[50vw] bg-amber-100 p-2 text-xl outline-0 
              rounded-l-xl font-semibold
              sm:h-[8vh] sm:w-[48vw] sm:text-3xl sm:p-4
              md:h-[8vh] md:w-[52vw] md:p-3 md:text-4xl
              lg:h-[10vh] lg:w-[44vw] lg:p-3 lg:text-3xl
              xl:h-[10vh] xl:w-[45vw] xl:p-3 xl:text-3xl"
            />
            <button
              onClick={getData}
              className="h-[8vh] w-[30vw] flex justify-center items-center  text-white rounded-r-2xl shadow-sm shadow-black 
              active:scale-95 bg-gradient-to-br from-slate-700 via-[#06102a] to-[#020617] 
              hover::bg-gradient-to-br hover:from-cyan-700 hover:via-[#3354a9] hover:to-[#05091b] hover:text-[#000] 
              
              sm:h-[8vh] sm:w-[10vw]
              md:h-[8vh] md:w-[12vw]
              lg:h-[10vh] lg:w-[10vw]
              xl:h-[10vh] xl:w-[12vw] "
            >
              <RiSearchLine />
            </button>
          </div>

          <div
            className="weathDetail flex flex-col-reverse justify-center  gap-2  items-center
          sm:h-[37vh] sm:[40vw] sm:flex sm:flex-col-reverse  sm:items-center sm:pt-8  
          md:h-[27vh] md:[42vw] md:flex  md:flex-row md:items-center md:p-10 
          lg:h-[30vh] lg:[54vw] lg:flex lg:items-center lg:p-10  "
          >
            <div
              className="weatHead flex flex-col content-center gap-5  p-1
              "
            >
              <h1
                className="text-[2.6rem]  text-amber-50 text-shadow-md
                text-shadow-green-300
              sm:text-[4rem] md:text-[5rem] lg:text-[4rem] xl:text-[4rem]"
              >
                {temp}
              </h1>
              <h2
                className="text-4xl  text-amber-50 text-shadow-md
                text-shadow-green-300  sm:text-[3rem] md:text-[4rem] lg:text-[3.2rem] xl:text-[3rem]"
              >
                {loc}
              </h2>
            </div>
            <div
              className="images h-[20vh] w-[70vw]  object-contain  flex
              items-center  justify-center 
            "
            >
              {isOn && (
                <img
                  src={`./src/assets/${isOn}.png`}
                  className="h-[18vh] w-[40vw] mt-5   
                    sm:h-[20vh] sm:w-[56vw]   
                    md:h-[26vh] md:w-[33vw] 
                    lg:h-[30vh] lg:w-[40vw]
                    xl:h-[30vh] xl:w-[20vw]"
                />
              )}
            </div>
          </div>
          {cond ? (
            <div className="cardDiv  flex  items-center block gap-6 mt-5   ">
              <Cards value={humd} icon={humidity} />
              <Cards value={windM} icon={wind} />
            </div>
          ) : (
            <div className="cardDiv flex hidden  gap-6 pt-7">
              <Cards value={humd} icon={humidity} labelVal={"Humidity"} />
              <Cards value={windM} icon={wind} labelVal={"Wind"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
