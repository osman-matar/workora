const Card = ({
  iconSrc,
  title,
  content,
}: {
  iconSrc: any;
  title: string;
  content: string;
}) => {
  return (
    <div
      id='card'
      className='p-[0.7px]  rounded-2xl  bg-[linear-gradient(45deg,white,transparent,white)] w-full '>
      <div className='py-8 rounded-2xl px-2 text-center flex flex-col w-full flex-1  h-full  bg-violet-700 text-white  '>
        <div className='iconHolder'>{iconSrc}</div>
        <div className='title'>
          <h4 className='text-[24px] font-semibold text-[#fff7d1]'>{title}</h4>
        </div>
        <div className='content'>
          <p className='text-[16px] font-light '>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
