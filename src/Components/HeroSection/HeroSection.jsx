import React from "react";

function HeroSection() {
  return (
    <div>
      <section class="text-gray-400 bg-[#5C6BC0] body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-bold">
              Your Perfect Study
              <br class="hidden lg:inline-block" />
              Buddy.
            </h1>
            <p class="mb-8 leading-relaxed text-white">
              Say goodbye to solitary study sessions and hello to collaborative
              learning experiences that propel you towards success.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white  py-2  focus:outline-none rounded text-lg">
                Get Started
              </button>
              <button class="ml-4 inline-flex text-cyan-800 bg-white text-black border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 hover:text-white rounded text-lg ease-in duration-300">
                How It Works?
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
