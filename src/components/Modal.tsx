import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  DialogOverlay,
} from 'solid-headless';

import { Component, createSignal, JSX } from 'solid-js';

export const Modal = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <Dialog isOpen={isOpen()} class="fixed inset-0 z-10 overflow-y-auto ">
      <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-50" />
      <DialogPanel class="w-full max-w-md p-6 my-8 overflow-hidden text-left mx-auto transition-all transform bg-gray-50 dark:bg-gray-900 shadow-xl rounded dark:border dark:border-gray-50 ">
        {children}
      </DialogPanel>
    </Dialog>
  );
};
