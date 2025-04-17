// Modal.tsx
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
      setShow(true);
      // Delay adding animation classes for smooth entrance
      timeout = setTimeout(() => {
        setAnimate(true);
      }, 10); // 10ms is enough to trigger transition
    } else {
      setAnimate(false);
      // Delay unmount to allow exit animation
      timeout = setTimeout(() => {
        setShow(false);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal box */}
      <div
        className={`relative bg-white rounded-lg shadow-lg w-full max-w-[1313px] px-8 py-10 transform transition-all duration-300 ${
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
