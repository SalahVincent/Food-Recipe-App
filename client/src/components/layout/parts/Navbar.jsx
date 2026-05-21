import React, { useContext } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="navbar flex flex-wrap items-center justify-between px-20 py-3 sticky top-0 bg-[#ffffff6e] backdrop-blur-sm z-30">
        <label className="w-[20rem] cursor-pointer" onClick={() => navigate("/feed")}>
          <h1 className="font-bold text-[#e63946] text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

        <nav>
          <ul className="flex flex-row gap-3">
            
            <li>
              <button
                onClick={() => navigate("/feed")}
                className={`flex items-center gap-2 font-medium cursor-pointer transition-colors ${
                  isActive("/feed") ? "text-[#e63946]" : "text-gray-600 hover:text-black"
                }`}
              >
                Feed
              </button>
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
              className={`cursor-pointer h-7 hover:translate-y-[-2px] transition-all ${isActive("/notifications") ? "filter-active-red" : ""}`}
              src="./notifications.svg"
              alt="Notifications"
              onClick={() => navigate("/notifications")}
            />

            <img
              className={`cursor-pointer h-7 hover:translate-y-[-2px] transition-all ${isActive("/messages") ? "filter-active-red" : ""}`}
              src="./forum.svg"
              alt="Messages"
              onClick={() => navigate("/messages")}
            />

            <img
              className={`cursor-pointer h-7 transition-all ${isActive("/profile") ? "border-2 rounded-full border-[#e63946]" : ""}`}
              src="./pp.jpeg"
              alt="Profile"
              onClick={() => navigate("/profile")}
            />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
