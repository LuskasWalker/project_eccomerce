import React from 'react'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className="pt-4 md:pt-8 lg:pt-16 pb-16">
      <h1
        data-aos="fade-left"
        data-aos-dela="150"
        className="text-2xl sm:text-3xl text-center text-gray-900 dark:text-white font-bold"
      >
        10k+ Clientes Satisfeitos
      </h1>
      <span
        data-aos="fade-right"
        data-aos-dela="150"
        className="w-16 h-1 bg-pink-600 mx-auto mt-3 block"
      ></span>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
        <ReviewSlider />
      </div>
    </div>
  );
}

export default Review
