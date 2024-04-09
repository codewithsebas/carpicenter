// Product.tsx
import React, { useState } from "react";
import Image from "next/image";
import { RiEye2Line, RiWhatsappLine } from "react-icons/ri";
import ViewProduct from "./ViewProduct";

interface Product {
  image: string;
  title: string;
  description: string;
  price: number | string;
  pay: string;
}

export const Product: React.FC<Product> = (props) => {
  const { image, title, description, price, pay } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative ">
      <div className="flex flex-col gap-2 w-full bg-white text-[#292929] rounded-md border border-black/10">
        <div className="w-full h-full">
          <Image
            width={300}
            height={300}
            priority
            src={image}
            alt="Product"
            className="rounded-t-md object-cover w-full max-h-60 border-b border-black/5 cursor-pointer"
            onClick={openModal}
          />

          <div className="flex items-center gap-3 py-2 px-3">
            <div className="flex flex-col w-full">
              <h1 className="font-medium text-lg">{title}</h1>
              <p className="text-black/50 flex items-center gap-1">
                {description}
              </p>
            </div>
          </div>
          <p className="px-4">Precio - ${price}</p>
        </div>

        <div className="h-[1px] mx-3 bg-black/10"></div>

        <div className="flex justify-between gap-1 pb-2 px-3">
          <button
            className="w-full flex items-center justify-center gap-2 py-1 rounded-md duration-150 hover:bg-black/10 text-black/60"
            onClick={openModal}
          >
            <RiEye2Line className="text-[1rem] md:text-2xl" />
            <h1 className="text-[0.7rem] font-medium md:text-base">Revisar</h1>
          </button>

          {/* Botón de compra, puedes agregar funcionalidad aquí si es necesario */}
          <a
            href={pay}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-1 rounded-md duration-150 hover:bg-black/10 text-black/60"
          >
            <RiWhatsappLine className="text-[1rem] md:text-2xl" />
            <h1 className="text-[0.7rem] font-medium md:text-base">Comprar</h1>
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <ViewProduct image={image} closeModal={closeModal} />}
    </div>
  );
};
