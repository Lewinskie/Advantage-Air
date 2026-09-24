import { useEffect, type ReactNode } from "react";

export const inputClass =
  "w-full bg-transparent border border-[rgba(217,173,39,0.2)] px-4 py-3 text-[#F5F3EF] text-sm placeholder-[#7C7C7C] focus:outline-none focus:border-[#D9AD27] transition-colors";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[rgba(35,31,32,0.92)] backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[#1a1718] border border-[rgba(217,173,39,0.2)] w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-8 py-5 border-b border-[rgba(217,173,39,0.15)]">
          <h3 className="font-display font-700 uppercase text-[#F5F3EF] text-2xl">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-[#7C7C7C] hover:text-[#D9AD27] transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="px-8 py-6">{children}</div>
      </div>
    </div>
  );
}
