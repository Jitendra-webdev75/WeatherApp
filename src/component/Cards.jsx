function Cards({ value, icon, labelVal }) {
  return (
    <>
      <div
        className="card h-[13vh] w-[13vw] flex items-center  justify-around bg-gradient-to-r from-blue-400  to-blue-600 gap-2 
        shadow-md shadow-amber-100 rounded-xl 
        hover::bg-gradient-to-r hover:from-red-400  hover:to-blue-600
        sm:h-[10vh] sm:w-[30vw] sm:mt-2
        md:h-[10vh] md:[14vw]
        lg:h-[10vh] lg:[14vw] lg:mt-4
        xl:h-[10vh] xl:[14vw] xl:mt-7"
      >
        <div className="img h-12 w-12">
          <img src={icon} />
        </div>
        <h1
          className="text-2xl text-white 
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
