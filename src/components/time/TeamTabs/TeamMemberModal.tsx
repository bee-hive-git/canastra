"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MemberData } from "./data";

interface TeamMemberModalProps {
  member: MemberData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.4);
            }
          `}</style>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[900px] bg-[#191919] rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 max-h-[90vh] overflow-y-auto md:overflow-y-visible"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-[#F05941] transition-colors rounded-full hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-[320px] shrink-0 flex flex-col">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden relative bg-[#1A1A1A]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col pt-2">
              <h2
                className="text-[#F05941] text-3xl md:text-[42px] leading-tight font-bold mb-2"
                style={{ fontFamily: '"Crimson Text", serif' }}
              >
                {member.name}
              </h2>
              
              <p className="text-white text-lg md:text-[22px] mb-4 font-light" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
                {member.role}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-[#0077b5] transition-colors mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}

              <div 
                className="space-y-4 text-white/80 text-[15px] md:text-[16px] leading-relaxed overflow-y-auto pr-2 custom-scrollbar"
                style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
              >
                {member.description.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
