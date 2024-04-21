import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function Header() {
  return (
    <header class="text-gray-400 bg-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="text-black mr-5 hover:text-black" href="#Home">
            Home
          </a>
          <a class="text-black mr-5 hover:text-black" href="/Feature">
          Feature
          </a>
          <a class="text-black mr-5 hover:text-black" href="Pricing">
            Pricing
          </a>
          <a class="text-black hover:text-white" href="#ContactUs">
            Contact Us
          </a>
        </nav>
        <a href="example.com" class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span class="ml-3 text-xl text-black xl:block lg:hidden">
            StudyPal
          </span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
