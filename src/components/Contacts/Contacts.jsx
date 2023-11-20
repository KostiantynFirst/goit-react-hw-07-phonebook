import { useSelector, useDispatch } from "react-redux";
import { PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contacts.styled";
import { deleteContact } from "redux/operations";
import { selectContacts, selectFilterContact } from "redux/selectors";
import { toast } from "react-toastify";

export const ContactList = () => {
        
        const contacts = useSelector(selectContacts);
        const filterValue = useSelector(selectFilterContact).toLowerCase();
      
        const dispatch = useDispatch();

        const handleDeleteContact = contactId => {
                dispatch(deleteContact(contactId));
                toast.info('The contact has been removed from your phonebook successfully!');
              };

        
        const filteredContacts = contacts.filter(contact =>
                contact.name.toLowerCase().includes(filterValue)
        );

        return (
        <PhonebookContactsList>

            {filteredContacts.map(({name, phone, id}) => {

            return (
                    <PhonebookContactsListItem key={id}>
                    <PhonebookContactsListItemName>{name}: {phone}</PhonebookContactsListItemName>
                    <DeleteBtn onClick={() => handleDeleteContact(id)}>Delete</DeleteBtn>
                    </PhonebookContactsListItem>
            )
          })

        }
        </PhonebookContactsList>
        );
};      
