import { Link } from "react-router-dom";

const FooterLink = ({ text, path }: { text: string; path: string }) => {
  return (
    <Link
      to={path}
      className='text-purple-100   text-[16px]  hover:text-white transition ease-in-out duration-75 font-secondary'>
      {text}
    </Link>
  );
};

export default FooterLink;
