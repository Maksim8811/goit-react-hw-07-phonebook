import "./Filter.css"
import {useDispatch, useSelector} from "react-redux"
import {filterContact} from "../../redux/filterSlice"

export const Filter = () => {

    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onChange = e => {
        dispatch(filterContact(e.target.value))
    }
    
    return (
        <div>
            <label className="filter">Find contacts by name
                <input 
                 className="filter_input"
                 value={filter}
                 name="filter" 
                 type="text"
                 onChange={onChange}
                 />
            </label>
        </div>
        )
}
