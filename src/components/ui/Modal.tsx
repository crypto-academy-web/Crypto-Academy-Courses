'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Auth from '../Auth';

interface ModalProps {
  isOpenModal: boolean;
  onClose: () => void; // ✅ accept onClose from parent
  initialView: 'login' | 'getStarted';
}

const Modal: React.FC<ModalProps> = ({ isOpenModal, onClose, initialView  }) => {
  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog as="div" className="relative z-[9999] w-full" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-[478px] rounded-[56px] bg-white  shadow-xl ">
              <Auth onClose={onClose} initialView={initialView} />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
