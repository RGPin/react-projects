import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && <Modal showModal={showModal} />}
    </div>
  );
}
