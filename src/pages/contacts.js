import ContactForm from "../components/form/form";
import ContactList from "../components/contactList/contactList";
import Filter from "../components/filter/filter";
import { useDispatch} from "react-redux";
// import { filtredContacts} from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";
import { Helmet,  HelmetProvider } from "react-helmet-async";


export default function Contacts() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filtredComponents = useSelector(filtredContacts);
  
    return (
      <HelmetProvider>
        <Helmet>
        <title>Your contacts</title>
      </Helmet>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
         <ContactList />
        </HelmetProvider>
    )
}