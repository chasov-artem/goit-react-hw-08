import "./App.css";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "./redux/contactsOps";
// import { selectIsError, selectIsLoading } from "./redux/contactsSlice";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ContactsPage from "./pages/ContactPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Error: {isError}</h2>}
        <ContactList />
      </div> */}
    </>
  );
};

export default App;
