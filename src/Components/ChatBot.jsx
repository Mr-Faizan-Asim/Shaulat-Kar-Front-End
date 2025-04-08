// src/components/ChatBot.jsx
import React, { useState } from "react";

const ChatBot = () => {
  // Initial dummy message
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Shaulat Kar Chatbot. How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending a new message
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Simulate a bot reply after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to help! Please let me know your query.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg flex flex-col h-96 overflow-hidden">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4">
        <h2 className="text-lg font-bold">Shaulat Kar Chatbot</h2>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-grow p-4 overflow-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                msg.sender === "bot"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-purple-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
