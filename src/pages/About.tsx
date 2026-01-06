import sectionImage from "../assets/images/sectoin_2.jpg";
import Card from "../components/Card";
import { Wifi } from "lucide-react";
import { Armchair } from "lucide-react";
// import { Microphone } from "lucide-react";
import { Calendar } from "lucide-react";
import { UsersRound } from "lucide-react";

const About = () => {
  return (
    <div className=' py-8 md:py-20 px-4  bg-[#7c4dff] w-full '>
      <div className='max-w-345    flex-col mx-auto'>
        <div className=' flex flex-col md:flex-row gap-2  text-white '>
          <div className='flex-6 '>
            <h1 className=' text-[#fff7d1] font-bold mb-4 text-5xl max-w-xl  '>
              MORE THAN JUST A DESK
            </h1>
            <h3 className='text-3xl font-bold '>It's How You Work Best</h3>
          </div>
          <div className='flex-6 '>
            <p className='font-normal  text-base '>
              Workora gives you the freedom, comfort, and tools to work your way
              whether you’re flying solo, leading a team, or building the next
              big thing.
            </p>
          </div>
        </div>
        <div className=' mt-8  grid gap-4 grid-cols-1 md:grid-cols-2  '>
          <div className='img-holder'>
            <img
              src={sectionImage}
              alt='workora spaces'
              className='rounded shadow-lg h-full '
            />
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='flex gap-4 flex-col sm:flex-row  md:flex-row lg:flex-row w-full '>
              <Card
                iconSrc={
                  <Armchair
                    size={50}
                    className=' font-bold  text-white mx-auto mb-4 flex-1 w-full '
                  />
                }
                title='Felxible Workspaces'
                content='Choose what suits your rhythm from hot desks to private offices and meeting rooms. Pay for what you need, when you need it.'
              />
              <Card
                iconSrc={
                  <Wifi
                    size={50}
                    className=' font-bold  text-white mx-auto mb-4 flex-1 w-full '
                  />
                }
                title='Amenities That Keep You Going'
                content='Enjoy high-speed Wi-Fi, premium coffee, lockers, printers, lounges, and everything else to stay productive and relaxed.'
              />
            </div>
            <div className='flex gap-4 flex-col sm:flex-row md:flex-row lg:flex-row w-full '>
              <Card
                iconSrc={
                  <UsersRound
                    size={50}
                    className=' font-bold  text-white mx-auto mb-4 flex-1 w-full '
                  />
                }
                title='Creative Community'
                content='Surround yourself with freelancers, startups, and teams who are building, sharing, and growing just like you.'
              />
              <Card
                iconSrc={
                  <Calendar
                    size={50}
                    className=' font-bold  text-white mx-auto mb-4 flex-1 w-full '
                  />
                }
                title='Events, Workshops & More'
                content='Stay inspired with regular community events, expert-led talks, networking nights, and productivity sessions.'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
