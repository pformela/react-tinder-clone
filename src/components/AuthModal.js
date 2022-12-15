import React from "react";

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <div onClick={handleClick}>Elo</div>
    </div>
  );
};

export default AuthModal;
