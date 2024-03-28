import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Content = () => {
  //Get the state and function using context api
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen	pb-[15vh] relative font-outfit ">
      <div className="flex items-center  justify-between text-xl p-5 text-[#585858]">
        <p>Genius Gemini</p>
        <img
          className="w-10 rounded-full"
          src={assets.user_icon}
          alt="user_icon"
        />
      </div>
      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="my-6 mx-0 text-6xl p-5 text-[#c4c7c5] xs:text-4xl sm:text-6xl ">
              <p>
                <span class="text-transparent bg-clip-text gradient ">
                  Hi, Human
                </span>
                <p>How can I help you today?</p>
              </p>
            </div>
            <div className="grid grid-cols-fill gap-4 p-5 xs:grid-cols-2 sm:grid-cols-fill">
              <div className="card">
                <p className="card-p">
                  Beautiful places you visit around the world
                </p>
                <img
                  className="card-img"
                  src={assets.compass_icon}
                  alt="compass_icon"
                />
              </div>
              <div className="card">
                <p className="card-p">Suggest some creative start-up ideas</p>
                <img
                  className="card-img"
                  src={assets.bulb_icon}
                  alt="bulb_icon"
                />
              </div>
              <div className="card">
                <p className="card-p">
                  Productive team building ideas for our work retreat
                </p>
                <img
                  className="card-img"
                  src={assets.message_icon}
                  alt="message_icon"
                />
              </div>
              <div className="card">
                <p className="card-p">
                  Improve, optize the following code keeping in mind the best
                  coding practice
                </p>
                <img
                  className="card-img"
                  src={assets.code_icon}
                  alt="code_icon"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] overflow-y-scroll hide-scrollbar">
            <div className="flex my-10 mx-0 items-center gap-5">
              <img
                className="w-10 rounded-full"
                src={assets.user_icon}
                alt="user_icon"
              />
              <p> {recentPrompt} </p>
            </div>
            <div className="flex items-start gap-5 ">
              <img
                className="w-10"
                src={assets.gemini_icon}
                alt="gemini_icon"
              />
              {loading ? (
                <div className="flex w-full flex-col gap-2 ">
                  <hr className="loader-hr" />
                  <hr className="loader-hr" />
                  <hr className="loader-hr" />
                </div>
              ) : (
                <p
                  className="text-lg  font-light "
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] py-[0px] px-5 m-auto xs:px-1 xs:py-2 ">
          <div className="flex items-center justify-between  gap-5 bg-[#f0f4f9] py-2 px-5 rounded-[50px] xs:gap-1 xs:sticky xs:bottom-0 xs:left-0 xs:right-0">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg xs:flex-none xs:w-[148px] sm:flex-1   "
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-3">
              <img
                className="search-img"
                src={assets.gallery_icon}
                alt="gallery_icon"
              />
              <img
                className="search-img"
                src={assets.mic_icon}
                alt="mic_icon"
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="search-img "
                  src={assets.send_icon}
                  alt="send_icon"
                />
              ) : (
                <img
                  onClick={(e) => e.preventDefault()}
                  className="opacity-40 cursor-not-allowed search-img"
                  src={assets.send_icon}
                  alt="send_icon"
                />
              )}
            </div>
          </div>
          <p className="items-center text-xs text-center my-3 mx-auto font-light">
            Genius Gemini may display inaccurate info, including about people,
            so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
