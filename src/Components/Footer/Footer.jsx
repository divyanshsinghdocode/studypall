import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 bg-[#5C6BC0] body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white" href="example.com">
            <span class="ml-3 text-xl">StudyPal</span>
          </a>
          <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
            © 2024 StudyPal —
            <a
              href="example.com"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: "white"}}
            >
              @StudyPal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
