import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "971561529421"; // from footer
  const message = "Hello, I would like to know more about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us!
      </span>
    </a>
  );
}
