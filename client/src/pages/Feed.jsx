import React from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const FollowSuggestions = ({ name }) => {
    return (
      <div className="flex items-center justify-between mr-5">
        <div className="flex gap-2 items-center py-1">
          <img className="h-12" src="./account.svg" alt="" />
          <h1 className="text-[16px] font-semibold">
            <a href="">{name}</a>
          </h1>
        </div>
        <button className="text-[#e64936] font-bold cursor-pointer h-fit">
          Follow
        </button>
      </div>
    );
  };

  const UserProfile = ({ name, bio, profileViews, width}) => {
    return (
       <div className={`side2 w-[${width}]`}>
        <div className="sticky top-25">
          <div className="h-fit bg-[#0000000a] border-[#00000069] rounded-xl p-5 ">
            <div className="flex flex-col justify-center items-center ">
              <img className="h-16" src="account.svg" alt="" />
              <h1 className="text-xl font-bold text-center">{name}</h1>
              <p className="text-[12px]">{bio}</p>
            </div>
          </div>
           <div className="h-fit bg-[#0000000a] border-[#00000069] rounded-xl py-2 px-5 mt-3">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-lg font-bold">{profileViews}</p>
              <p className="text-[12px]">Profile Views</p>
            </div>
            </div>
             <div className="h-fit bg-[#0000000a] border-[#00000069] hover:bg-[#0000003b] rounded-xl py-2 px-5 mt-3 ">
            <div className="flex flex-row justify-center"><img src="./bookmark.svg"/><p>SAVED</p></div></div>

            <div className="h-15 w-15 p-3 bg-[#0000000a] border-[#00000069] hover:bg-[#0000003b] rounded-[20px] absolute top-110 right-[-30px]">
              <img className="w-full" src="./ai.png" alt="ai logo" />
            </div>
        </div>
      </div>
    )
  }
  return (
    <div className="main-content flex flex-row px-20 gap-12">
      <div className="side1 rounded-xl w-[25%]">
        <h1 className="border-b pb-3 mb-2">Who To Follow</h1>
        <FollowSuggestions name="Nyap Bless" />
        <FollowSuggestions name="Chu Abongkesi" />
        <FollowSuggestions name="Jaff Davy Arnold" />

        <footer className="text-[#000000a2] mt-5 flex flex-col items-center gap-3 sticky top-25">
          <div className="text-[15px] gap-4 flex flex-wrap leading-1 py">
            <a className="text-[12px]" href="">
              About
            </a>
            <a className="text-[12px]" href="">
              Help
            </a>
            <a className="text-[12px]" href="">
              Privacy
            </a>
            <a className="text-[12px]" href="">
              Terms
            </a>
            <a className="text-[12px]" href="">
              Logout
            </a>
          </div>
          <div className="flex flex-wrap">
            <h1 className="text-[17px] font-bold">
              Cooker<sub>CMR</sub>
            </h1>
            <span className="text-[12px]">Rebase Code Camp © 2025-2026</span>
          </div>
        </footer>
      </div>

      <div className="rounded-xl w-[51.5%]">
        <div className="rounded-[40px] bg-[#0000000c] h-12 flex flex-row justify-between items-center px-3">
          <input type="text" placeholder="Create a post" className=""/>
          <img
          className="w-15 h-15 cursor-pointer"
          src="./camera.svg" alt="" />
        </div>
        <h1 className="text-5xl py-3">Your Culinary Feed</h1>
        <nav className="">
          <ul className="flex gap-3 py-2 z-20">
            <li>Popular</li>
            <li>Recent</li>
          </ul>
        </nav>

        <div></div>
        <div
        onClick={() => {navigate('/details')}}
        className="w-full overflow-hidden rounded-[15px] relative group cursor-pointer my-4">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="./dummy_bg.jpg"
            alt="dummy_post"
          />

          <div className="absolute top-6 right-6 z-10 flex flex-col items-end group/rating">
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors border border-white/30">
              <img src="./star.svg" className="w-5 h-5" alt="star" />
            </button>

            <div
              className="mt-2 flex gap-1 p-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 
                    opacity-0 -translate-y-2.5 pointer-events-none 
                    group-hover/rating:opacity-100 group-hover/rating:translate-y-0 group-hover/rating:pointer-events-auto 
                    transition-all duration-300 shadow-xl"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="hover:scale-125 transition-transform"
                >
                  <img
                    src="./star.svg"
                    className="w-4 h-4"
                    alt={`rate-${num}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div
          className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
            <img className="h-30 w-30" src="./account-white.svg" />
            <h1 className="text-white text-3xl">Jaff Davy Arnold</h1>
            <p className="text-gray-300">
              Cameroonian fried rice with a twist of local spices and a blend of
              fresh vegetables, creating a vibrant and flavorful dish that
              celebrates the rich culinary heritage of Cameroon.
            </p>
            <h2 className="text-4xl font-bold text-white mb-2 font-serif">
              Delicious Fried Rice
            </h2>
            <div className="flex items-center gap-4 text-sm font-medium text-gray-200">
              <span>90 mins</span>
              <span>•</span>
              <span>6 people</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-150 cursor-pointer hover:bg-amber-500/10"
                aria-label="Rate 1 star"
              >
                <img src="./comment.svg" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-150 cursor-pointer hover:bg-amber-500/10"
                aria-label="Rate 1 star"
              >
                <img src="./bookmark_white.svg" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-150 cursor-pointer hover:bg-amber-500/10"
                aria-label="Rate 1 star"
              >
                <img src="./share.svg" />
              </button>
            </div>
          </div>
        </div>

        <div
        onClick={() => {navigate('/details')}}
        className="w-full rounded-[15px] relative group flex bg-[#00000013] px-9 py-7 gap-5">
          <div className="w-[50%]">
            <a href="" className="flex h-13 items-center gap-2 mb-3">
              <img className="h-full" src="./account.svg" />
              <h1 className="text-xl">Yongha Fanoel</h1>
            </a>
            <h2 className="text-3xl font-semibold">Garri and Omelets</h2>
            <p className="py-3">
              Fried cassava grains soaked in water with peanuts and sugar
            </p>

            <div className="flex gap-6">
              <div className="flex items-center justify-center">
                <img src="./bookmark.svg" alt="" />
                <span className="font-[Noto-serif]">1.2K</span>
              </div>
              <Button className="flex-row">View Recipe</Button>
            </div>
          </div>

          <div className="w-[50%] flex items-center justify-center">
            <div className="absolute top-6 right-6 z-10 flex flex-col items-end group/rating">
              <button className="p-3 rounded-full bg-black/10 backdrop-blur-md hover:bg-black/40 transition-colors border border-white/30">
                <img src="./star.svg" className="w-5 h-5" alt="star" />
              </button>

              <div
                className="mt-2 flex gap-1 p-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 
                    opacity-0 -translate-y-2.5 pointer-events-none 
                    group-hover/rating:opacity-100 group-hover/rating:translate-y-0 group-hover/rating:pointer-events-auto 
                    transition-all duration-300 shadow-xl"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className="hover:scale-125 transition-transform"
                  >
                    <img
                      src="./star.svg"
                      className="w-4 h-4"
                      alt={`rate-${num}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <img
              className="rounded-[25px] w-full rotate-3 overflow-hidden relative group cursor-pointer transition-transform duration-500 group-hover:rotate-0"
              src="./dummy_post1.webp"
              alt=""
            />
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg group my-4">
          <video controls className="w-full h-auto block" src="./videoplayback.mp4">
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-6 right-6 z-10 flex flex-col items-end group/rating">
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors border border-white/30">
              <img src="./star.svg" className="w-5 h-5" alt="star" />
            </button>

            <div
              className="mt-2 flex gap-1 p-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 
                    opacity-0 -translate-y-2.5 pointer-events-none 
                    group-hover/rating:opacity-100 group-hover/rating:translate-y-0 group-hover/rating:pointer-events-auto 
                    transition-all duration-300 shadow-xl"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="hover:scale-125 transition-transform"
                >
                  <img
                    src="./star.svg"
                    className="w-4 h-4"
                    alt={`rate-${num}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent h-1/3" />

            <div className="relative z-10">
              <h2 className="text-white text-2xl font-bold tracking-tight drop-shadow-md">
                Post Title Goes Here
              </h2>
              <p className="text-gray-200 text-sm mt-1 drop-shadow-sm">
                @username • 2 hours ago
              </p>
              <img className="h-30 w-30" src="./account-white.svg" />
            </div>
          </div>
        </div>
      </div>

      <UserProfile name="Vincent Salah" bio="Food enthusiast" profileViews="1.5K" width="20%" />
    </div>
  );
};

export default Feed;
