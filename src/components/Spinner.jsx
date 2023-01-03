import React from 'react';
import { Circles } from 'react-loader-spinner';

/* Audio, BallTriangle, Bars, Blocks, Circles, CirclesWithBar, 
ColorRing, Comment, Discuss, Dna, FallingLines, FidgetSpinner, Grid, Hearts, 
InfinitySpin, LineWave, MagnifyingGlass, MutatingDots, Oval, ProgressBar, Puff, 
Radio, RevolvingDot, Rings, RotatingLines, RotatingSquare, RotatingTriangles, TailSpin, 
ThreeCircles, ThreeDots, Triangle, Vortex, Watch*/

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Circles color="#00BFFF" height={50} width={200} className="m-5" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
