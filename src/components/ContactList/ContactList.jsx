import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectFilteredContacts } from "../../redux/filters/filtersSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (filteredContacts.length === 0) {
    return <p>Немає контактів для відображення.</p>;
  }

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={styles.contactItem}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
