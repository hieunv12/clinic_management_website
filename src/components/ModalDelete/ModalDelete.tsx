import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
interface ModalDeleteProps {
  isOpen: boolean;
  onDelete: () => void;
  title: string;
  message: string;
  closeModal: () => void;
}
const ModalDelete = ({
  isOpen,
  onDelete,
  title,
  message,
  closeModal,
}: ModalDeleteProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    // Perform delete operation here
    setIsDeleted(true);
    closeModal();
    setTimeout(() => setIsDeleted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <h3
              className="text-lg font-medium leading-6 text-gray-900 mb-4"
              id="modal-headline"
            >
              {title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
             {message}
            </p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalDelete;
