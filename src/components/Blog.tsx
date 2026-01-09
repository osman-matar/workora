import { data } from "../data";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const blogs = data.blogs;

  return (
    <div className='w-full bg-white py-20 '>
      <div className='max-w-7xl mx-auto flex flex-col gap-12  px-4 '>
        <h1 className='text-primary font-bold font-primary text-5xl  '>Blog</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-3 gap-5  '>
          {blogs.map((blog) => (
            <div className='flex flex-col w-full' key={blog.id}>
              <div className='img-holfer w-full h-77.5 '>
                <img
                  src={blog.imgsrc}
                  fetchPriority='high'
                  loading='lazy'
                  alt='blog1 image'
                  className='w-full h-full '
                  width={340}
                />
              </div>
              <div className='flex justify-between text-[#6d6d72] mt-2  '>
                <p className='font-normal font-secondary'>{blog.author}</p>
                <p className='font-normal font-secondary'>{blog.createdat}</p>
              </div>
              <div className='flex flex-col gap-4 mt-4 mb-4 '>
                <h4 className='text-primary  font-primary text-[22px] font-primary font-semibold  '>
                  {blog.title}
                </h4>
                <p className='text-[#6d6d72] font-normal text-[16px] tracking-wider   '>
                  {blog.content}
                </p>
              </div>
              <div className='mt-5 flex gap-2 items-center border-2 border-[#44169c] w-fit  px-4 py-2 rounded-md hover:bg-[#44169c] hover:text-white transition-all duration-300 group  '>
                <Link
                  to={`/blog/${blog.id}`}
                  className=' font-semibold text-[14px] font-primary  '>
                  Read More
                </Link>
                <ArrowUpRight className=' group-hover:rotate-45 transition duration-500 ' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
