"use client"
import { useEffect, useRef, MutableRefObject, useState } from 'react';

const Chatbot: React.FC = () => {
    const messagesEndRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string, text: string }[]>([]);
  
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }
    }, []);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    };
  
    const sendMessage = async () => {
      const payload = {
        text: inputText
      };
  
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const responseText = data.parts[0].text;
  
      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { role: 'user', text: inputText },
        { role: 'bot', text: responseText }
      ]);
      setInputText(''); // Clear input after sending
    };
  
    return (
      <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
        <div>
            {chatHistory.map((message, index) => (
            <div key={index} className={`chat-message ${message.role === 'user' ? 'justify-end' : ''}`}>
                <div className={`flex items-end ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-${message.role === 'user' ? 'end' : 'start'}`}>
                    <div>
                    <span className={`px-4 py-2 rounded-lg inline-block ${message.role === 'user' ? 'rounded-br-none bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>{message.text}</span>
                    </div>
                </div>
                {/* <img src={message.role === 'user' ? 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144' : 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'} alt="My profile" className="w-6 h-6 rounded-full order-2" /> */}
                </div>
            </div>
            ))}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
                <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
                </button>
            </span>
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
              value={inputText}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              onClick={sendMessage}
            >
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Chatbot;