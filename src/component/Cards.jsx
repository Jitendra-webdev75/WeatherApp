function Cards({ value, icon }) {
  return (
    <>
      <div className="card h-[13vh] w-[13vw] flex items-center  justify-around bg-blue-400 gap-2 ">
        <div className="img h-12 w-12">
          <img src={icon} />
        </div>
        <h1 className="text-2xl text-zinc-900">{value}</h1>
      </div>
    </>
  );
}

export default Cards;
