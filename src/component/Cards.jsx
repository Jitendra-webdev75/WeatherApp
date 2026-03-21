function Cards({ value, icon, labelVal }) {
  return (
    <>
      <div
        className="card h-[14vh] w-[26vw] flex flex-col items-center  justify-around p-2 bg-gradient-to-r from-blue-400  to-blue-600 
        shadow-lg shadow-blue-400 rounded-xl select-none 
        hover::bg-gradient-to-r hover:from-red-400  hover:to-blue-600
        sm:h-[10vh] sm:w-[30vw] sm:flex sm:flex-row
        md:h-[10vh] md:[14vw] md:flex
        lg:h-[10vh] lg:[14vw] lg:flex
        xl:h-[10vh] xl:[14vw] xl:flex"
      >
        <div className="img h-12 w-12 ">
          <img src={icon} />
        </div>
        <h1
          className="text-xl text-white 
          sm:text-[2.2rem]
          md:text-[3rem]
          lg:text-[2.5rem]
          xl:text-[2rem] "
        >
          {value}
        </h1>
      </div>
    </>
  );
}

export default Cards;
