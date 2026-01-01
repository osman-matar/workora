const SectionTitle = () => {
  return (
    <div className='text-center flex flex-col  max-w-211.5 mx-auto gap-5 '>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-5xl text-[#7C4DFF] uppercase font-primary  '>
          Perks You’ll Enjoy
        </h2>
        <h3 className='text-[#2A2734] font-bold text-3xl  font-primary  '>
          Everything You Need, Already Included
        </h3>
      </div>
      <p className='text-[#2A2734] font-normal text-[16px] font-secondary  '>
        At Deskora, we’ve taken care of the little things so you can focus on
        the big ideas. From productivity tools to daily comforts, our workspaces
        come fully equipped to support your best work, every day.
      </p>
    </div>
  );
};

export default SectionTitle;
