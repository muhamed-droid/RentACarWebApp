import React from 'react';
import './Modal.css'; // You can style your modal as needed

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
