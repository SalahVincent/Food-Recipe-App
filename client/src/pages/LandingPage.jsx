import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/ui/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="navbar flex flex-wrap items-center justify-between px-20 py-3 sticky backdrop-blur-[8px] top-0">
        <label>
          <h1 className="font-bold text-[#e63946] text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

        <nav>
          <ul className="flex flex-row gap-3">
            <li>
              <a href="">FEATURES</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
        <Button
        onClick={() => {navigate('/login')}}>SIGN IN</Button>
      </div>

      <div className="bg-white px-20 py-25">
        <div className="w-[45%]">
          <h1 className="flex flex-col">
            <em className="font-semibold text-6xl">The Modern Cameroonians'</em>
          <span className="text-[#b80707] text-8xl font-bold">Digital Cookbook.</span>
          </h1>
          <p className="my-5">A curated culinary sanctuary for the refined palate. Share your signature creations and discover a global gallery of masterfully plated recipes from a community of discerning chefs</p>
          <div className="flex gap-4">
            <Button
        onClick={() => {navigate('/signup')}}>Join the Circle</Button>
          <button
    className='bg-[#f3f2f2] text-[#e63946] py-3 px-12 rounded-md flex gap-2 cursor-pointer'>
      Explore
    </button>
    </div>
        </div>
        <div></div>
      </div>

      <div className="p-20 bg-[#f3f2f2]">
        <div>
          <div className="w-[60%]">
          <h2 className="text-5xl flex flex-col">
          <span>Discovery through the</span>
          <em className="text-[green]">Native Lens</em>
        </h2>
        <p className="my-5">Each plate tells a story. Immerse yourself in a dynamic feed of culinary brilliance. Where community favorites and rising stars redefine the art of cooking.</p>
        </div>
        <span></span>
        </div>

        <div>
          <div className="post1"></div>
          <div className="post2"></div>
          <div className="post3"></div>
        </div>
      </div>
      <div className="bg-[#faf7f7] p-20">
        <div className="w-[50%]">
          <h2 className="flex flex-col text-5xl">
            <em>Earning Your Stars in the</em>
            <span className="font-bold text-[#e63946]">Kitchen Arena.</span>
          </h2>
          <p className="py-[25px]">Our star-based system isn't just about popularity. It's a validation of craft. As a community members "star" your recipes, you rise through the ranks from an amateur to a master chef, unlocking exclusive editorial features and platform prestige.</p>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center text-center p-20'>
        <img className="w-[40px]" src="./fork_spoon.svg" alt="" />
        <h1 className="text-7xl">Plated to <em className="text-[#e63946]">Perfection.</em></h1>
        <p className="w-[60%] py-10">The table is set. All that's missing is your perspective. Join Cameroon's most sophisticated digital culinary circle today</p>
        <div>
          <Button>Start Your Culinary Journey</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
