import {createSlice} from "@reduxjs/toolkit"
import {nanoid} from "nanoid"

const contactsInitialState = { items: [
    {id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56'},
    {id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12'},
    {id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79'},
    {id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26'},

] }


export const myContactSlice = createSlice({
    name: "contacts", 
    initialState: contactsInitialState,
    reducers: {
    addContact (state, action)  { state.items.push(action.payload)},
    deleteContact (state, action) {
        state.items = state.items.filter(todo=> todo.id !== action.payload) }
    }})

export const contactReducer = myContactSlice.reducer
export const {addContact, deleteContact} = myContactSlice.actions