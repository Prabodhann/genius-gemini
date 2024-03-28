import React, { useContext } from 'react';
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  //when clicked on recent it will show recents;
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className=" hidden flex-col min-h-screen justify-between	bg-[#f0f4f9] py-6 p-4 font-outfit animate-fadeIn sm:inline-flex ">
      <div>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="img block ml-2 cursor-pointer animate-fadeIn "
          src={assets.menu_icon}
          alt="menu_icon"
        />
        <div
          onClick={() => newChat()}
          className=" mt-6 inline-flex items-center justify-center gap-5 py-2 px-4 rounded-[50px] text-[14px] cursor-pointer bg-[#e6eaf1] text-gray-700 "
        >
          <img className="w-4 " src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className=" flex flex-col animate-fadeIn  ">
            <p className=" mt-[30px] mb-5 ">Recents</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-3 p-2.5 pr-10 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb] "
                >
                  <img
                    className="img"
                    src={assets.message_icon}
                    alt="message_icon"
                  />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col ">
        <div className="img-div">
          <img
            className="img "
            src={assets.question_icon}
            alt="question_icon"
          />
          {extended ? <p className="ml-1.5">Help</p> : null}
        </div>
        <div className="img-div">
          <img className="img" src={assets.history_icon} alt="history_icon" />
          {extended ? <p className="ml-1.5">Activity</p> : null}
        </div>
        <div className="img-div">
          <img className="img" src={assets.setting_icon} alt="setting_icon" />
          {extended ? <p className="ml-1.5">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
