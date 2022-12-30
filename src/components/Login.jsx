import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; //google logo
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

function Login() {
  const responseGoogle = response => {
    console.log(response);
    // localStorage.setItem('user', JSON.stringify(response.profileObj));
    // const { name, googleId, imageUrl } = response.profileObj;

    // const doc ={
    //   _id = googleId,
    //   _type = 'user',
    //   userName = name,
    //   image = imageUrl,
    // }
  };

  return (
    <div>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            controls={false}
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-blackOverlay top-0 left-0 bottom-0 right-0">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={renderProps => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg outline-none cursor-pointer text-sm"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4 text-lg" /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            /> */}
            <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
