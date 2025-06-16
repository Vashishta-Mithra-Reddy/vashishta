"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dock() {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setTimeout(() => setHash(window.location.hash), 10);
    };

    updateHash(); // Initial
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);
    window.addEventListener('scroll', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
      window.removeEventListener('scroll', updateHash);
    };
  }, []);

  return (
    <section className="hidden md:block">
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-50/10 border-2 px-8 py-5 backdrop-blur-3xl rounded-xl space-x-2">
        {navItems.map((item) => {
          const itemHash = `#${item.toLowerCase()}`;
          const isActive = hash === itemHash;
          return (
            <Link
              key={item}
              href={itemHash}
              className={`nav-link relative group text-sm font-semibold tracking-wide px-4 py-2 rounded-lg font-poppins transition-colors duration-300 active:scale-150 ${
                isActive ? 'border-2 border-black/20 border-dashed text-black' : 'text-black border-2 border-transparent hover:bg-black/10'
              }`}
            >
              {item}
              {/* <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
