import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddContactForm } from "../AddContactForm/AddContactForm";
import { ContactList } from "../Contacts/Contacts";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "./App.styled";
import { Filter } from "../Filter/Filter";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
 
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>
      {isLoading && !error && <b>Request in progress...</b>}
    
  <AddContactForm />
  <PhonebookContacts>
    <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
     
  <Filter />

  <ContactList />

<ToastContainer/>

</PhonebookContacts>
    

    </PhonebookContainer> 
    
    );
 

};

