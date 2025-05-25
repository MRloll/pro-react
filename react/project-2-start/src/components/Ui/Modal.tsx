import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "./Button";
import React from "react";
// import { useState } from "react";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  closeModal,
  title,
  desc,
  children,
}: IModal) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle as="h3" className="text-base/7 font-medium ">
                  {title}
                </DialogTitle>
              )}

              {desc && <p className="mt-2 text-sm/6 ">{desc}</p>}
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
