import SectionTitle from "./SectionTitle";
import {
  WifiHighIcon,
  LucideLampDesk,
  CoffeeIcon,
  LockIcon,
  AlarmClockIcon,
  PrinterIcon,
} from "lucide-react";

{
  /* <CoffeeIcon />
<LockIcon />
<AlarmClockIcon />
<LucideLampDesk /> */
}

const Perks = () => {
  return (
    <div className='py-20 w-full  bg-[#F8F7F4] '>
      <div className='max-w-7xl overflow-hidden mx-auto '>
        <div className='max-w-3xl px-4 mx-auto  flex flex-col gap-12 items-center '>
          <SectionTitle />
          <div className='scroll flex gap-5 max-w-7xl  ' id='perks'>
            {/* Group One */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <WifiHighIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                High-Speed Wi-Fi
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <CoffeeIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Coffee & Tea
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <LucideLampDesk className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Meeting Rooms
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <LockIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Lockers & Storage
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <AlarmClockIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                24/7 Access
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <PrinterIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Printing & Scanning
              </h2>
            </div>
            {/* Group Two */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <WifiHighIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                High-Speed Wi-Fi
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <CoffeeIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Coffee & Tea
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <LucideLampDesk className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Meeting Rooms
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <LockIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Lockers & Storage
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <AlarmClockIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                24/7 Access
              </h2>
            </div>
            {/*  */}
            <div className='icon bg-white rounded-3xl flex flex-col gap-8 p-8 min-w-55  justify-center text-center   '>
              <div className=' bg-[#d9d4ff]  p-4 w-fit mx-auto  rounded-3xl   '>
                <PrinterIcon className='text-[#7c4dff] w-10 h-10 ' />
              </div>
              <h2 className='text-dark  font-semibold text-2xl  font-mono '>
                Printing & Scanning
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
