import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Image from './assets/hercule.png';
import User from './assets/user.png';

function App() {
  const [inputState, setInputState] = useState('');
  const [color, setColor] = useState('bg-slate-900');
  const [textColor, setTextColor] = useState('text-white');
  const [bubbleColor, setBubbleColor] = useState('bg-slate-600');
  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [FAQ, setFAQ] = useState([{'Question': 'What is Antaeus?', 'Answer': 'Antaeus is a chatbot that helps you with your queries.'}, {'Question': 'How can I use Antaeus?', 'Answer': 'You can use Antaeus by typing your queries in the chatbox.'},{
    'Question': 'What is the purpose of Antaeus?', 'Answer': 'The purpose of Antaeus is to help you with your queries.'}]);
  

  const messagesEndRef = useRef(null);

  const handleChange = (e) => {
    setInputState(e.target.value);
    console.log('Input state changed:', inputState);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      console.log('Enter was pressed');
      setMessages([...messages, e.target.value]);
      e.target.value = '';
      setInputState('');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log('Input state changed:', inputState);
  }, [inputState]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className={`flex flex-col justify-between items-center min-h-screen mx-auto`}>
        <header className={`flex sticky top-0 justify-between items-center px-4 bg-gray-800 w-full p-4 z-10 shadow-md shadow-red-100 ${textColor}`}>
          <div className="flex items-center">
            <button onClick={toggleSidebar} className={`p-2 ${textColor} text-4xl`}>
              {isSidebarOpen ? '✕' : '☰'}
            </button>
            <h1 className={`text-2xl font-bold ${textColor} ml-4`}>Antaeus</h1>
          </div>
          <div>
            <button className='bg-green-500 hover:bg-gray-500 text-gray-300 font-semibold hover:text-gray-100 py-2 px-4 border-2 border-gray-500 hover:border-transparent rounded'>New Chat</button>
          </div>
        </header>
        <div className='min-h-full w-full md:w-4/5 sm:w-4/5 lg:w-3/5'>
          {messages.length > 0 && (
            <div className='p-4 self-end align-text-bottom w-full overflow-y-auto '>
              {messages.map((message, index) => (
                <span key={index}>
                  <div className=' flex justify-end items-center '>
                    <div className={`${bubbleColor} p-3 rounded-lg text-white text-lg max-w-xl text-wrap break-words mt-5`}>
                      <p>{message}</p>
                    </div>
                    <span> <img src={User} width={50} height={50} /> </span>
                  </div>
                  <div className=' flex justify-start items-center'>
                    <span> <img src={Image} width={50} height={50} /> </span>
                    <div className={`${bubbleColor} max-w-xl text-wrap break-words p-3 mt-5 rounded-lg text-white text-lg`}>
                      <p>{message}</p>
                    </div>
                  </div>
                </span>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        <div className={`md:mb-72 ${messages.length === 0 ? '' : 'hidden'} flex-col justify-center items-center`}>
          <img src={Image} width={180} height={180} className='self-center mx-auto' />
          <div className='flex gap-2'>
            {FAQ.map((faq, index) => (
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  ">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{FAQ[index]['Question']}</div>
                  <p className="text-gray-700 text-base">
                    {FAQ[index]['Answer']}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <input
            type="text"
            placeholder="Enter your name"
            className={`p-2 border-gray-300 color-gray-300 w-full md:w-3/5 bg-gray-100  rounded-3xl mb-5 focus:outline-none text-blue-950 transform transition-transform duration-800 ease-in-out ${messages.length === 0 ? '-translate-y-56' : 'translate-y-0'}`}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 text-gray-800 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-28">
          <h2 className="text-xl font-semibold mb-6 ">Navigation</h2>
          <nav >
            <ul className="space-y-4 mb-6 ">
              <li><a href="#section1" className="block py-2 hover:bg-gray-100">Section 1</a></li>
              <li><a href="#section2" className="block py-2 hover:bg-gray-100">Section 2</a></li>
              <li><a href="#section3" className="block py-2 hover:bg-gray-100">Section 3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;