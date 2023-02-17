import React from "react";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <div>
      <p className="footer">Made by Denys Hlushchenko &copy; {year} </p>
    </div>
  );
};

export default Footer;
