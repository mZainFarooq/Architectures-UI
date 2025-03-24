import React from "react";

const Header = () => {
  const links = [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];
  return (
    <header className="bg-white fixed top-0 w-full text-black h-14 px-4 flex justify-between items-center shadow-lg z-10 ">
      <a
        href="#home"
        className="inline-block text-[15px] tracking-[4px]  hover:bg-gray-300 p-2 px-4 cursor-pointer space-x-2 font-medium "
      >
        <b>BR</b>
        <span>Architects</span>
      </a>
      <nav className="hidden sm:block">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className="inline-block  hover:bg-gray-300 p-2 px-4 cursor-pointer"
            >
              <a
                href={link.href}
                className="text-[15px] font-medium tracking-[4px]"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
