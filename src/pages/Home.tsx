const Home = () => {
  return (
    <div>
      <div className='max-w-345 flex-col text-center'>
        <h1 className='text-8xl hidden  lg:mb-10 md:text-[150px] lg:text-[210px] xl:text-[225px]  mx-auto font-extrabold md:font-bold lg:font-bold   text-[#7c4dff] tracking-widest lg:-mt-4    '>
          Workora
        </h1>
        <h1 className=' text-violet-800  font-bold text-7xl sm:text-8xl  font-serif -mb-4 mt-2'>
          DESKORA
        </h1>
        <div className='content text-center flex flex-col items-center   mx-auto my-10 '>
          <h1 className='text-[#2a2734] font-bold text-3xl  md:text-5xl  lg:text-6xl xl:text-7xl lg:-mt-4     '>
            WORK YOUR WAY AT WORKORA
          </h1>
          <p className='text-[#2a2734] text-xl md:text-3xl   max-w-4xl mt-4 lg:mt-4  px-1  opacity-80 md:tracking-wider '>
            Flexible workspaces for freelancers, teams, and businesses designed
            for productivity, comfort, and community.
          </p>
        </div>
        <div className='flex gap-2  px-2  mx-auto md:max-w-xl lg:px-0  '></div>
      </div>
    </div>
  );
};

export default Home;
