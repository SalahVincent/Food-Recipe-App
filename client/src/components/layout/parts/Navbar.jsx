import React, { useContext } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar flex flex-wrap items-center justify-between px-20 py-3 sticky top-0 bg-[#ffffff6e] backdrop-blur-sm z-30">
        <label className="w-[20rem] cursor-pointer">
          <h1 className="font-bold text-[#e63946] text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

        <nav>
          <ul className="flex flex-row gap-3">
            
            <li>
              <a
              onClick={() => {navigate("/feed")}}className="flex items-center"><img className="h-8" src="./dashboard.svg" alt="" />Feed</a>
            </li>
            
          </ul>
        </nav>

<div className='flex items-center gap-2 px-3 py-1.5 rounded-2xl'>
  <div className="bg-[#00000013] flex items-center gap-2 px-3 py-1.5 rounded-2xl">
          <img
            src="./search.svg"
            alt="search icon"
            className="cursor-pointer"
          />
          <input
            type="text"
            className="w-17.5"
            value={state.searchQuery}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH", payload: e.target.value })
            }
          />
        </div>
        <div className="flex h-8 justify-around w-35">
          
          <img
          src="./notifications.svg" alt="" 
          onClick={() => navigate('/notifications')}/>

          <img src="./forum.svg" alt="" 
          onClick={() => navigate('/messages')}/>
          
          <img
          src='./account.svg'
          onClick={() => navigate('/profile')}/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
