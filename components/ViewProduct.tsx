// Modal.tsx
import React from "react";
import Image from "next/image";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";

interface ModalProps {
  image: string;
  closeModal: () => void;
}

const ViewProduct: React.FC<ModalProps> = ({ image, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-2 rounded-xl">
        <div className="relative">
          <Image
            src={image}
            alt="Product"
            width={200}
            height={200}
            className="w-full rounded-xl object-contain"
          />
          <button
            className="absolute top-2 right-2 text-[#292929] bg-white text-2xl rounded-full"
            onClick={closeModal}
          >
            <RiCloseCircleLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
