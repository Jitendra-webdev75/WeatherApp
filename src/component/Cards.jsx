function Cards({ humd }) {
  return (
    <>
      <div className="card h-[13vh] w-[13vw] flex items-center  justify-center bg-blue-400 gap-4 ">
        <h1 className="text-2xl text-zinc-900">{humd}</h1>
        <div className="humImg h-10 w-13 bg-contain"></div>
      </div>
    </>
  );
}

export default Cards;
