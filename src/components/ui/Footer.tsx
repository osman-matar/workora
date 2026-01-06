import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocateFixed,
  YoutubeIcon,
} from "lucide-react";
import { MailCheckIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className=' py-20 w-full justify-center bg-[#2A2734]'>
      <div className='flex flex-col max-w-345 px-4   mx-auto'>
        {/* top foooter  */}
        <div className='mb-8 flex flex-col'>
          <h1 className='text-primary text-5xl font-primary font-bold '>
            WORKORA
          </h1>
          <p className='font-primary  text-[16px]  text-white mt-4 mb-2'>
            Your space to grow, create,
          </p>
          <p className='font-primary  text-[16px]  text-white '>and connect.</p>
        </div>
        {/* center footer 4 columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-0 justify-between px-6  '>
          <div className='flex flex-col gap-4 '>
            <h3 className='font-medium   text-2xl  text-white '>Quick Links</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <FooterLink path='/' text='Home' />
              </li>
              <li>
                <FooterLink path='/packages' text='Packages' />
              </li>
              <li>
                <FooterLink path='/blog' text='Blog' />
              </li>
              <li>
                <FooterLink path='/events' text='Events' />
              </li>
              <li>
                <FooterLink path='/contact' text='Contact us' />
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-medium   text-2xl  text-white'>Explore</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <FooterLink path='/signin' text='Sign In' />
              </li>
              <li>
                <FooterLink path='/signup' text='Sign Up' />
              </li>
              <li>
                <FooterLink path='/booking' text='Book a Space' />
              </li>
              <li>
                <FooterLink path='/membership' text='Become a Member' />
              </li>
              <li>
                <FooterLink path='/contact' text='Contact Us' />
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-medium   text-2xl  text-white'>Contact Info</h3>
            <ul className='flex flex-col gap-2 '>
              <li className='flex  items-center gap-4 text-white hover:text-white '>
                <LocateFixed />
                <div>
                  <p>Design Avenue Street,</p>
                  <p> Addis Ababa, Ethiopia</p>
                </div>
              </li>
              <li className='flex items-center gap-4 text-white hover:text-white'>
                <PhoneIcon />
                <p>093 2939 0029</p>
              </li>
              <li className='flex items-center gap-4 text-white hover:text-white'>
                <MailCheckIcon />
                <p>hello@workora.com</p>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-medium   text-2xl  text-white '>
              Keep in Touch
            </h3>
            <div className='flex gap-4  '>
              <LinkedinIcon className='bg-white rounded-full p-2  text-xl w-10 h-10  ' />
              <FacebookIcon className='bg-white rounded-full p-2  text-xl w-10 h-10  ' />
              <YoutubeIcon className='bg-white rounded-full p-2  text-xl w-10 h-10  ' />
              <InstagramIcon className='bg-white rounded-full p-2  text-xl w-10 h-10  ' />
            </div>
          </div>
        </div>
        {/* footer copyrights  */}
        <div className='mt-8'>
          <p className='font-normal text-[16px] text-white '>
            &copy; {new Date().getFullYear()} Workora. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
