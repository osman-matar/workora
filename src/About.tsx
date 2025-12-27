import sectionImage from "./assets/images/sectoin_2.jpg";
import Card from "./components/Card";
import { Wifi } from "lucide-react";
import { Armchair } from "lucide-react";
// import { Microphone } from "lucide-react";
import { Calendar } from "lucide-react";
import { UsersRound } from "lucide-react";

const About = () => {
  return (
    <div className=' py-10 bg-[#7c4dff] w-full '>
      <div className='max-w-[1370px]  flex-col mx-auto'>
        <div className='top flex gap-2   text-white '>
          <div className='left   md:flex-6 '>
            <h1 className=' text-[#fff7d1] font-bold mb-4 text-5xl max-w-xl  '>
              MORE THAN JUST A DESK
            </h1>
            <h3 className='text-3xl font-bold '>It's How You Work Best</h3>
          </div>
          <div className='right py-1    md:flex-6 '>
            <p className='font-normal  text-base '>
              Workora gives you the freedom, comfort, and tools to work your way
              whether you’re flying solo, leading a team, or building the next
              big thing.
            </p>
          </div>
        </div>
        <div className=' mt-8  grid gap-4 grid-cols-1 md:grid-colsp-2  '>
          <div className='img-holder'>
            <img
              src={sectionImage}
              alt='workora spaces'
              className='rounded shadow-lg h-full '
            />
          </div>
          <div className='flex flex-wrap gap-4 '>
            <Card
              iconSrc={
                <Armchair
                  size={50}
                  className=' font-bold  text-white mx-auto mb-4 '
                />
              }
              title='Felxible Workspaces'
              content='Choose what suits your rhythm from hot desks to private offices and meeting rooms. Pay for what you need, when you need it.'
            />
            <Card
              iconSrc={
                <Wifi
                  size={50}
                  className=' font-bold  text-white mx-auto mb-4 '
                />
              }
              title='Amenities That Keep You Going'
              content='Enjoy high-speed Wi-Fi, premium coffee, lockers, printers, lounges, and everything else to stay productive and relaxed.'
            />
            <Card
              iconSrc={
                <UsersRound
                  size={50}
                  className=' font-bold  text-white mx-auto mb-4 '
                />
              }
              title='Creative Community'
              content='Surround yourself with freelancers, startups, and teams who are building, sharing, and growing just like you.'
            />
            <Card
              iconSrc={
                <Calendar
                  size={50}
                  className=' font-bold  text-white mx-auto mb-4 '
                />
              }
              title='Events, Workshops & More'
              content='Stay inspired with regular community events, expert-led talks, networking nights, and productivity sessions.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
