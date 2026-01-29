import React from "react";

const Modal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-[35px] h-[35px] z-50 flex items-center justify-center bg-gray-700 rounded-full text-white text-xl font-bold hover:bg-gray-600 transition"
        >
          ×
        </button>

        {/* Video */}
        <div className="w-full aspect-video">
          <video
            src="https://videos.ctfassets.net/xpxpo6b6k2je/5ywn2L8ILYspmsbSK3RKMH/8d54fa4b3d446a5844bdad4810a12075/file_example_MP4_640_3MG.mp4"
            controls
            autoPlay
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
