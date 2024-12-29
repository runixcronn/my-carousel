import React, { useState } from "react";
import "@/app/styles/global.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
//  npm install react-icons yazmanız gerekmektedir.
const App = () => {
  // Carousel örneği

  const images = [
    {
      url: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrease = () => {
    setCurrentIndex((pre) => (pre + 1) % images.length);
  };
  const handleDecrease = () => {
    setCurrentIndex((pre) => (pre - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Project 01 : Carousel
        </h1>
      </div>
      <div className="relative h-96 w-2/4 mx-auto mt-10">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className="bg-cover bg-center h-full w-full"
        ></div>
        <button
          className="
            absolute
            top-1/2
            left-0
            transform
            -translate-y-1/2
           
            text-white
            font-bold
            py-2
            px-4
            rounded
            mx-2
          "
          onClick={handleDecrease}
        >
          <BsChevronCompactLeft size={36} />
        </button>
        <button
          className="
            absolute
            top-1/2
            right-0
            transform
            -translate-y-1/2
           
            text-white
            font-bold
            py-2
            px-4
            rounded
            mx-2
          "
          onClick={handleIncrease}
        >
          <BsChevronCompactRight size={36} />
        </button>
      </div>
      <div className="flex justify-center mt-10">
        {images.map((image, i) => {
          return (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`mx-2 ${
                currentIndex === i ? "text-blue-700" : "text-blue-500"
              } hover:text-blue-700`}
            >
              <RxDotFilled size={36} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
