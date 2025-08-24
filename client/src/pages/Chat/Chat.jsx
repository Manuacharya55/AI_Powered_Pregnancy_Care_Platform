import React, { useEffect, useRef, useState } from "react";
import { ChatWithAI } from "../../utils/Gemini";
import ReactMarkdown from "react-markdown";

const Chat = () => {
  const bottomRef = useRef(null);
  const [ai, setAi] = useState(false);
  const [chat, setChat] = useState([
    {
      role: "model",
      parts: [{ text: "How can I help you" }],
    },
  ]);

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAi(true);
    setText("");
    setChat((prev) => [...prev, { role: "user", parts: [{ text }] }]);
    const response = await ChatWithAI(chat, text);
    console.log(response);

    setChat((prev) => [
      ...prev,
      { role: "model", parts: [{ text: response }] },
    ]);
    setAi(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div id="blog">
      <div id="container">
         <span id="title">Chat With AI-Doctor</span>
      </div>
      <div id="container">
        <div id="chat-holder">
          <div id="chat">
            {chat.map((curele, i) => (
              <div
                key={i}
                id={curele.role}
                dangerouslySetInnerHTML={{ __html: curele.parts[0].text }}
              />
            ))}
            {ai && <div id="model">thinkinggggg....</div>}
            <div ref={bottomRef} />
          </div>
          <div id="text-box-holder">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name=""
                placeholder="Chat With AI"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button>chat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
