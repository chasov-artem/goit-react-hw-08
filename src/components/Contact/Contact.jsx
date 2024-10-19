import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Contact.module.css";
import { IoAccessibility, IoCall } from "react-icons/io5";
import { deleteContactThunk } from "../../redux/contacts/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
    setIsModalOpen(false);
  };

  return (
    <div className={styles.cardWrap}>
      <div className={styles.textWrap}>
        <span className={styles.name}>
          <IoAccessibility />
          {name}
        </span>
        <span className={styles.number}>
          <IoCall />
          {number}
        </span>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={handleDelete} className={styles.confirmButton}>
              Yes
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className={styles.cancelButton}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
