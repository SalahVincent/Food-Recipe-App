import React from "react";

const NotificationsPage = () => {
  return (
    <div className="flex flex-row px-20 gap-12">
      <div className="w-[80%] bg-[#0000000a]">
        <h1 className="px-5 py-3">Notifications</h1>
      </div>
      
        <div className="w-[20%]">
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
