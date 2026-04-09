"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src="/logo.png" alt="IDEAL COMM" className="h-10" />
          </div>

          <div className="flex gap-8">
            <a
              href="#work"
              className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#process"
              className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="font-sans text-sm text-gray-400">
            idealcommllc@gmail.com
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-sans text-xs text-gray-500">
            © 2024 Ideal Comm Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
