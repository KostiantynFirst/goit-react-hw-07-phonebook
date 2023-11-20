import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn  } from "./AddContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { toast } from "react-toastify";
import { useState } from "react";
import { selectContacts } from "redux/selectors";

export const AddContactForm = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
   
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
 
        const isNameExist = contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
        
        const isNumberExist = contacts.some(
          contact => contact.number === number,
        );

        const resetForm = () => {
            setName("");
            setNumber("");
        }

    
        if (isNameExist) {
          toast.error('Contact with such name already exists!', {
            autoClose: 3000
          });
          resetForm();
          return;
        }
    
        if (isNumberExist) {
          toast.error('Contact with such number already exists!', {
            autoClose: 3000
          });
          resetForm();
          return;
        }

        dispatch(addContact({ name, number }));
        toast.success(`Contact with the name ${name} has been added to the list!`);
        resetForm();
    
    }
  
    return (
        <PhonebookForm onSubmit={handleSubmit}>
         
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel> 
            <PhonebookFormInput   type="text"
                                  value={name}
                                  name="name"
                                  pattern="^[a-zA-Z\u0400-\u04FF\s'\x2D]+$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required
                                  placeholder="Enter name"
                                  onChange={(e) => setName(e.currentTarget.value) } />
        </PhonebookFormContainer>
        
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number"> Number: </PhonebookFormLabel> 
            <PhonebookFormInput   type="tel"
                                  value={number} 
                                  name="number"
                                  pattern="^[\d\s\x28\x29\x2D\x2B]+$"
                                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                  required
                                  placeholder="Tel number"
                                  onChange={(e) => setNumber(e.currentTarget.value)} />
        </PhonebookFormContainer>
        
        
            <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

          </PhonebookForm>

    );
}