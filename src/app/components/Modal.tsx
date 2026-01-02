"use client";
import React from "react";

interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ title, content, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dimmed/blur background */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal card */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 z-50 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-green-700 mb-3">{title}</h2>
        <p className="text-gray-700 whitespace-pre-line">{content}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
