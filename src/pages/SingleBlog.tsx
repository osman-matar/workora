import Footer from "@/components/ui/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import blog1_Image from "../assets/images/blogs_1.jpg";
import blog2_Image from "../assets/images/blogs_2.jpg";
import blog3_Image from "../assets/images/blogs_3.jpg";

const SingleBlog = () => {
  const blogsImages = [blog1_Image, blog2_Image, blog3_Image];
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div className='flex flex-col justify-center '>
        {/* <div className=''>Blog{id}</div> */}
        <div className='mx-auto h-96 max-w-7xl w-full  mt-6 '>
          <img
            src={blogsImages[Number(id) - 1]}
            className='w-full h-full rounded-3xl '
          />
        </div>
        <div className='max-w-7xl mx-auto '>
          <div className=' my-5 border-2 border-[#44169c] w-fit  px-4 py-2 rounded-md hover:bg-[#44169c] hover:text-white transition-all duration-300'>
            <Link to='/' className=' font-semibold text-[14px] font-primary  '>
              Read More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlog;
