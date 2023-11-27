import {useDispatch, useSelector} from "react-redux"
import "./Contacts.css"
import {deleteContact} from "../../redux/contactsSlice"
import {useMemo} from "react"

export const Contacts = () => {
    const dispatch = useDispatch()
    const contactsInitial = useSelector(state=>state.contacts.items)
    const filterValue = useSelector(state=>state.filter)

    const getFilteredContacts = useMemo(()=>()=>{
        const normalizeFilter = filterValue.toLowerCase().trim()
        return contactsInitial.filter(item=>item.name.toLowerCase().includes(normalizeFilter))
    },[contactsInitial, filterValue])

    const filteredContacts = getFilteredContacts()
   
    return(
        <div className="container_contacts">
            <ul>
                {filteredContacts.map(({name,id,number})=> {
                    return (
                        <li className="contacts_list" key={id}>{name}: {number}
                        <button className="contacts_list_button" type="button" onClick={ () => dispatch(deleteContact(id))}>Delete</button>
                       </li>
                    )
                })}
            </ul>
        </div>
    )
}