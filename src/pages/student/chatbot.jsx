import React from "react";
import Sidebar from "../../components/sidebar";

export default function Chatbot() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-gray-900">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <iframe
            src="https://chat.qwen.ai/"
            width="100%"
            height="600"
            title="Chatbot"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
