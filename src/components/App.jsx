import {Phonebook} from "./Phonebook/Phonebook"
import {Contacts} from "./Contacts/Contacts"
import {Filter} from "./Filter/Filter"

export const App = () => {

const fetchMockAPI = () => {
  const KEY = 'https://6564ed40ceac41c0761f0842.mockapi.io/contacts/:endpoint'
  console.log(8)
}

  return (
    <>
         <h1 className="title">Phonebook</h1>
         <Phonebook/>
         <h2 className="title">Contacts</h2>
         <Filter/>
         <Contacts/>
         <button type="button" onClick={fetchMockAPI}>FETCH</button>
    </>
  );
};
