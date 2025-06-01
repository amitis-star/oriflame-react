import "../../../assets/styles/index.css";
import ChatIcon from "../../../assets/icons/ChatIcon";

const ChatWithUs = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className="relative flex  items-center  justify-end  h-15  w-15  bg-gray-800  rounded-full  group  hover:w-[172px]  hover:rounded-[30px]  transition-all duration-300  ease-in-out overflow-hidden shadow-lg cursor-pointer
        "
      >
        <span className=" mr-15 text-14 font-600 text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          CHAT WITH US
        </span>

        <div className="absolute right-00 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-15 w-15">
          <ChatIcon className="text-white w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;
