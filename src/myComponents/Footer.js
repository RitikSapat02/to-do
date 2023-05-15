import React from "react";
// import "./footer.css"

export const Footer = () => {
  let footerStyle = {};
  return (
    <footer className="bg-dark text-light py-3 mt-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
