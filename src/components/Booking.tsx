const Booking = () => {
  return (
    <div className=' py-20   w-full  bg-[linear-gradient(135deg,#7C4DFF,#7C4DFF,#FFF7D1)] justify-center'>
      <div className=' flex justify-between max-w-[1380px]  mx-auto  '>
        <div className='flex flex-col gap-5  max-w-1/2 text-white  '>
          <h3 className='text-3xl font-bold'>Ready to Elevate Your Workday?</h3>
          <p className='text-[20px]leading-8 s font-thin tracking-widest    '>
            Discover your next favorite place to focus, connect, and create.
            Whether you're freelancing solo or scaling a team Workora has a
            space just for you.
          </p>
        </div>
        <div className='flex gap-5  flex-1 items-center  me-auto max-w-1/2 justify-end px-8  '>
          <button
            className='text-[20px] py-4  px-5  font-semibold border   border-[#44169C] bg-[#44169C] text-white rounded-xl  '
            style={{}}>
            Book Your Space
          </button>
          <button
            className='text-[20px] py-4 px-5 font-semibold border border-[#44169C] text-[#44169C] rounded-[8px] '
            style={{}}>
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
