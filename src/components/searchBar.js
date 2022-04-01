import React ,{useState} from "react";
import Button from "./Button"

const SearchBar = ({onFormSubmit}) => {
    const [term , setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    };
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text"
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                             /><Button>submit</Button>
                    </div>
            </form>
        </div>
    );
};

export default SearchBar;