import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode'; //used to decode jwt token
import { client } from '../client';

function Login() {
  const navigate = useNavigate();

  const responseGoogle = response => {
    const userObject = jwt_decode(response.credential);

    localStorage.setItem('user', JSON.stringify(userObject));
    const { name, email, picture } = userObject;

    let docId = email.replace('@gmail.com', '');

    const doc = {
      _id: docId,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
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
