import { useSelector, useDispatch } from "react-redux";
import { PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contacts.styled";
import { deleteContact } from "redux/contactSlices";
import { toast } from "react-toastify";

export const ContactList = () => {
        
        const contacts = useSelector(state => state.contacts);
        const filterValue = useSelector(state => state.filter);
        const dispatch = useDispatch();

        const handleDeleteContact = contactId => {
                dispatch(deleteContact(contactId));
                toast.info('The contact has been removed from your phonebook successfully!');
              };

        
        const filteredContacts = contacts.filter(contact =>
                contact.name.toLowerCase().includes(filterValue.toLowerCase())
        );

        return (
        <PhonebookContactsList>

            {filteredContacts.map(({name, number, id}) => {

            return (
                    <PhonebookContactsListItem key={id}>
                    <PhonebookContactsListItemName>{name}:{number}</PhonebookContactsListItemName>
                    <DeleteBtn onClick={() => handleDeleteContact(id)}>Delete</DeleteBtn>
                    </PhonebookContactsListItem>
            )
          })

        }
        </PhonebookContactsList>
        );
};      
