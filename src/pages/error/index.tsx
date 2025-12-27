import { Link } from "react-router-dom";
// import "./error.css";

const ErrorPage = () => {
  return (
    <div
      className='error-container bg-white text-shadow-gray-700 '
      style={{
        minHeight: "calc(100vh - 84px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}>
      <div className='content text-center max-w-6xl '>
        <h1 className='text-8xl animate-bounce duration-[4000] ease-in-out text-violet-600 font-serif  '>
          404
        </h1>
        <h2 className='text-5xl mb-2 '>Page Not Found</h2>
        <p className='opacity-85 mb-4 '>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to='/'
          className='btn py-2 px-4 rounded-2xl bg-violet-700 text-white  font-semibold decoration-none transition-all duration-300 hover:bg-violet-900 hover:-translate-y-0.5'>
          Go back home
        </Link>
      </div>

      <div className='circle absolute width-[260px] height-[260px] bg-[rgba(56, 189, 248, 0.15)] -top-16 -left-16 animate-ping duration-1000 ease-in-out ' />
      <div className='circle small width-[150px] height-[150px] -bottom-8 -right-8 top-auto left-auto duration-1000' />
    </div>
  );
};

export default ErrorPage;
