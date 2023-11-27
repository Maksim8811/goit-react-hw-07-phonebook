import "./Phonebook.css"
import {useDispatch} from "react-redux"
import {addContact} from "../../redux/contactsSlice"
import {nanoid} from 'nanoid'

export function Phonebook () {
    
    const dispatch = useDispatch()
    const loginInputId = nanoid()
    const telInputId = nanoid()

    const handleSubmit = ev => {
              ev.preventDefault()
              
              const newContactObj = {
                id: nanoid(),
                name: ev.target.elements.name.value,
                number: ev.target.elements.number.value,
              }

              dispatch(addContact(newContactObj))
              ev.target.reset()
            }

    return (
             <>
      <div className="container_form">
      <form htmlFor={loginInputId} className="form" onSubmit={handleSubmit} > 
      <label className="label_form" id={loginInputId}>Name
      <input
       
    
      className="input"     
      type="text"
      name="name"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
/>

<label className="label_form" id={telInputId}>Number
<input

      type="tel"
      name="number"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
/>
</label>
<button className="button" type="submit" >Add contact</button>
</label>
     </form>
     </div>
     
</>

    )
}