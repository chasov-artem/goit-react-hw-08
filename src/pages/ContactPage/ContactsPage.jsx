import { useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "../../redux/contactsSlice";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error: {isError}</h2>}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
