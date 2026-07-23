import React from "react";

const NotificationsPage = () => {
  return (
    <div className="flex flex-row px-20 gap-12">
      <div className="w-[80%]">
        <h1 className="font-bold text-[2.5rem]">Notifications</h1>
        <ol className="gap-3">
          <li className="bg-[#00000013] rounded-lg px-6 py-3 flex justify-between font-bold hover:bg-[#9494948e]"><span>Nyap Bless rated your post</span><div className="bg-[#e63946] h-8 w-5 text-white rounded-full flex items-center justify-center">1</div></li>
        </ol>
      </div>
      
        <div className="side2 w-[20%]">
          <div className="sticky top-25">
            <div className="h-fit bg-[#0000000a] border-[#00000069] rounded-xl p-5 ">
              <div className="flex flex-col justify-center items-center ">
                <img className="w-16" src="./account.svg" alt="" />
                <h1 className="text-xl font-bold text-center">Vincent Salah</h1>
                <p className="text-[12px]">Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default NotificationsPage;
