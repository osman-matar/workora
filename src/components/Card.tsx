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
    <div className='py-8 rounded-2xl px-2 text-center flex flex-col   w-[calc(50%-8px)]  bg-violet-700 text-white '>
      <div className='iconHolder'>{iconSrc}</div>
      <div className='title'>
        <h4 className='text-[24px] font-semibold'>{title}</h4>
      </div>
      <div className='content'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
