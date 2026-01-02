"use client";
import { useState } from "react";
import Modal from "../app/components/Modal";
import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import BackgroundSelector from "./components/BackgroundSelector";
import QRForm from "./components/QRForm";

export default function HomePage() {
  const [step, setStep] = useState(0);
  const [showFullCard, setShowFullCard] = useState(false);

  const [company, setCompany] = useState(""); // state for company input
  const [profession, setProfession] = useState(""); // state for profession input

  const [socialLinks, setSocialLinks] = useState<string[]>(Array(9).fill(""));

  const modals = [
    {
      title: "Add content to your QR code",
      content: `Create your vCard QR code effortlessly. Input your contact details such as name, phone number, email, and other relevant info to personalize the virtual contact card that people will see after scanning.`,
    },
    {
      title: "Preview your QR code content",
      content: `At any time, click the [Preview] button to visualize what people will see after scanning your QR code.`,
    },
    {
      title: "Change your QR code type",
      content: `If you’re not sure about the type of QR code you selected, click [Back] to select another type that better fits your needs.`,
    },
    {
      title: "Go to the next step",
      content: `Once you're satisfied with the content you’ve added to your QR code, click [Next] to go to the next step and download your QR code.`,
    },
  ];

  const socialMedia = [
    { name: "Web", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "GitHub", icon: <Github className="w-5 h-5" /> },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { name: "TikTok", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "Telegram", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" /> },
    { name: "WhatsApp", icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const openModal = (index: number) => setStep(index + 1);
  const closeModal = () => {
    if (step === modals.length) setShowFullCard(true);
    setStep(0);
  };

  return (
    <div className=" border-2 bg-white shadow-lg transition-transform duration-150 hover:scale-105 max-w-7xl mx-auto p-6 space-y-12 relative">
      {/* vCard card section */}
      <div className="md:w-1/2">
          <img
            src="/cursor"
            alt="Hand clicking vCard"
            className="rounded shadow-lg max-w-full"
          />
        </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-black">Add content to your QR code</h2>
          <p className="text-gray-700">
            Share a digital business card with your contacts. Fill in your name, phone, email, and other
            information to create your personalized vCard QR code.
          </p>
          <button
            onClick={() => openModal(0)}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all"
          >
            Create vCard QR
          </button>
        </div>
        
      </div>

      {/* Render modals */}
      {modals.map((modal, index) => (
        <Modal
          key={index}
          title={modal.title}
          content={modal.content}
          isOpen={step === index + 1}
          onClose={() => {
            closeModal();
            if (index < modals.length - 1) setStep(index + 2);
          }}
        />
      ))}

      {/* Full vCard content after Continue */}
      {showFullCard && (
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 relative z-10">
          <h2 className="text-xl font-bold text-green-700">Add content to your QR code</h2>

          {/* Color Palette */}
          <div className="space-y-2">
            <h3 className="font-semibold text-black">Color Palette</h3>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                 <BackgroundSelector onChange={function (color: string): void {} }
                 />
                <label className="text-black font-medium">Primary color</label>
                <input type="color" defaultValue="#527ac9" className="w-12 h-8 cursor-pointer" />
              </div>

              <div className="flex flex-col">
                <label className="text-black font-medium">Secondary color</label>
                <input type="color" defaultValue="#7ec09f" className="w-12 h-8 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="space-y-2">
            <label className="text-black font-medium">Upload an image as your vCard profile picture</label>
            <input type="file" className="border p-2 rounded w-full text-black placeholder:text-gray-500" />
          </div>

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="border p-2 rounded w-full text-black placeholder:text-gray-500"
            />
            <input
              type="text"
              placeholder="Surname"
              className="border p-2 rounded w-full text-black placeholder:text-gray-500"
            />

            {/* Company with datalist and state */}
            <div className="flex flex-col">
              <label className="text-black font-medium">Company</label>
              <input
                type="text"
                list="company-list"
                placeholder="Type or select company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border p-2 rounded w-full text-black placeholder:text-gray-500"
              />
              <datalist id="company-list">
                <option value="Firm ABC" />
                <option value="XYZ Corp" />
                <option value="My Startup" />
              </datalist>
            </div>

            {/* Profession with datalist and state */}
            <div className="flex flex-col">
              <label className="text-black font-medium">Profession</label>
              <input
                type="text"
                list="profession-list"
                placeholder="Type or select profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="border p-2 rounded w-full text-black placeholder:text-gray-500"
              />
              <datalist id="profession-list">
                <option value="Account Manager" />
                <option value="Software Developer" />
                <option value="Designer" />
              </datalist>
            </div>
          </div>

          {/* Summary */}
          <textarea
            placeholder="Summary"
            className="border p-2 rounded w-full text-black placeholder:text-gray-500"
            rows={3}
          ></textarea>

          {/* Social Media Inputs as Cards with clickable icons */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {socialMedia.map((social, idx) => (
              <div
                key={social.name}
                className="flex items-center gap-3 border p-2 rounded shadow hover:shadow-lg transition-all"
              >
                {/* Icon wrapped in clickable link */}
                {social.icon && (
                  <a
                    href={socialLinks[idx] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                  >
                    {social.icon}
                  </a>
                )}

                {/* Input for the user to paste their profile link */}
                <input
                  type="text"
                  placeholder={`Enter your ${social.name} URL`}
                  value={socialLinks[idx]}
                  onChange={(e) => {
                    const newLinks = [...socialLinks];
                    newLinks[idx] = e.target.value;
                    setSocialLinks(newLinks);
                  }}
                  className="w-full border-none focus:ring-0 focus:outline-none text-black placeholder:text-gray-500"
                />
              </div>
            ))}
          </div>
          <QRForm onGenerate={function (content: string): void {
            throw new Error("Function not implemented.");
          } } onSave={function (data: { content: string; color: string; bgColor: string; }): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      )}
     
    </div>
  );
}
