import React, { useState, useEffect } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Header() {

  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });


  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };




  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

// log out function to log the user out of google and set the profile array to null
const logOut = () => {
    googleLogout();
    setProfile(null);
};



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
        <a
          href="example.com"
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span class="ml-3 text-xl text-black xl:block lg:hidden">
            StudyPal
          </span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {profile ? (
            <div>
              <img src={profile.picture} alt="user image" />
              <p>Hi, {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <button onClick={login}>Sign in with Google 🚀</button>
          )}
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
