import { Button } from "flowbite-react";
import React from "react";

export const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      {/* div in the left side */}
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Maths can be really fun with the right mindset
        </h2>
        <p className="text-gray-500 my-2">
          Check out these resources and make the effort to practice maths
          everyday
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://whiteroseeducation.com/parent-pupil-resources/maths/home-learning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </Button>
      </div>
      {/* image in the right side  */}
      <div className="p-7 flex-1 justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5QKjgOfsW4IP75ECdZ8X-HVN7kCdJqPbVw&s" />
      </div>
    </div>
  );
};
