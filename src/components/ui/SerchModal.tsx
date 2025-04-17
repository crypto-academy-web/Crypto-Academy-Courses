// SearchModal.tsx
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // 🛑 Block scrolling
      setShow(true);
      timeout = setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      timeout = setTimeout(() => {
        setShow(false);
        document.body.classList.remove("overflow-hidden"); // ✅ Restore scroll
      }, 300);
    }

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-500 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative z-10 bg-white rounded-lg shadow-xl w-full max-w-[1313px] px-8 py-10 transform transition-all duration-500 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:text-gray-600 transition"
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
