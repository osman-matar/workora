import Image1 from "../../assets/images/banner_1.jpg";
import Image2 from "../../assets/images/banner_2.jpg";
import Image3 from "../../assets/images/banner_3.jpg";
import Image4 from "../../assets/images/banner_4.jpg";
import Image5 from "../../assets/images/banner_5.jpg";
import Image6 from "../../assets/images/banner_6.jpg";
import Image7 from "../../assets/images/banner_7.jpg";
import Image8 from "../../assets/images/banner_8.jpg";

const Swiper = () => {
  return (
    <div className='slider  max-w-[1380px] w-full my-10 mx-auto overflow-hidden '>
      <div className='slider-track flex '>
        {/* group one */}
        <img src={Image1} />
        <img src={Image2} />
        <img src={Image3} />
        <img src={Image4} />
        {/* group 2 */}
        <img src={Image5} />
        <img src={Image6} />
        <img src={Image7} />
        <img src={Image8} />
      </div>
    </div>
  );
};

export default Swiper;

// import React from 'react'

// const Swiper = () => {
//   return (
//     <div>Swiper</div>
//   )
// }

// export default Swiper
