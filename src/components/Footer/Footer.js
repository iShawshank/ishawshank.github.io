import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  return (
    <footer className="footer flex items-center justify-center text-sm font-thin w-full h-16 bg-zinc-800">
      Copyright &#169; {currentDate.getFullYear()} Kevin Shaw
    </footer>
  );
};

export default Footer;
