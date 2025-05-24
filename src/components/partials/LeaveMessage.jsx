import React from 'react';

const LeaveMessage = () => {
  return (
    <div className="hidden lg:fixed lg:right-0 lg:top-1/3 lg:transform lg:-translate-y-1/2 lg:z-50 lg:block bg-[#E0D583]">
      <a href="#Leave_message">
        <img
          src="/images/home/leav_message.jpg"
          alt="Leave a Message"
          className="w-9 h-40 object-contain rounded-tl-md"
        />
      </a>
    </div>
  );
};

export default LeaveMessage;
