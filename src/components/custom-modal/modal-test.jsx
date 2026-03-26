import { useState } from "react";
import Modal from "./modal";
import "./styles.css";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && (
        <Modal
          body={<div>Customized body</div>}
          showModal={handleToggleModal}
        />
      )}
    </div>
  );
}
