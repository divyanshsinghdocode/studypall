import React from "react";

function Features() {
  return (
    <div>
      Hi From Features
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              The Features
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Discover The Simple Steps To Finding Your Perfect StudyPal
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 line-bar rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <i class="bx bxs-conversation" style={{ fontSize: "2rem" }}></i>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Chat With StudyPal
                </h2>
                <p class="leading-relaxed text-base">
                  We Provide Chat Facility With Study Partener For Better
                  Communication
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center" href="example.com">
                  Learn More <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <i class="bx bxl-google" style={{ fontSize: "2rem" }}></i>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Google Sign in
                </h2>
                <p class="leading-relaxed text-base">
                  The User Can Directly Sign Up From Google Account To Save
                  Their Progress
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center" href="example.com">
                  Learn More
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <i
                  class="bx bxs-happy-heart-eyes"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Prefrence Based Learning
                </h2>
                <p class="leading-relaxed text-base">
                  Students Will Be Paired In Form Of Their Study Interest /
                  Prefrences
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center" href="example.com">
                  Learn More
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
