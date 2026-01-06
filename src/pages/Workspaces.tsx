const workspacesLinks = document.querySelectorAll(".workspacesLink");

console.log(Array(workspacesLinks));

import Footer from "@/components/ui/Footer";

const Workspaces = () => {
  return (
    <>
      <div className=' py-8 md:py-20 px-4  bg-[linear-gradient(135deg,#7C4DFF,#FFF7D1)] w-full '>
        <div className='max-w-345    flex-col mx-auto text-center'>
          <h1 className='font-bold font-primary text-[#fff7d1] text-5xl'>
            WORKSPACES
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const One = () => {
  return <h1>First 1</h1>;
};
export const Two = () => {
  return <h1>First 2</h1>;
};
export const Three = () => {
  return <h1>First 3</h1>;
};
export default Workspaces;
