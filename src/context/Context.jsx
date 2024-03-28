import { createContext, useState } from 'react';
import runChat from '../congif/genimi.js';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    //Previous response would be removed from our state variable
    setResultData('');
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(input);

      //for storing the input
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    let responseArray = response.split('**');

    let newResponse = '';

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += '<b >' + responseArray[i] + '</b>';
      }
    }

    let newResponse2 = newResponse.split('*').join('</br>');
    // setResultData(newResponse2);
    let newResponseArray = newResponse2.split(' ');

    let typingEffect = '';
    let delay = 0;
    const delayIncrement = 100; // Adjust this value to control the typing speed

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      const nextWord2 = nextWord + ' ';

      setTimeout(() => {
        typingEffect += nextWord2;
        setResultData(typingEffect);
      }, delay);

      delay += delayIncrement;
    }

    setLoading(false);
    setInput('');
  };

  //   for (let i = 0; i < newResponseArray; i++) {
  //     const nextWord = newResponseArray[i];
  //     const nextWord2 = nextWord + ' ';
  //     delayPara(i, nextWord2);
  //   }
  //   setLoading(false);
  //   setInput('');
  // };

  //This Could be used anywhere in the project
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
