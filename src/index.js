import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBCnEbNt3I-ODDeEdse65pmhf2cWkdozS4';

// Create a new component. This component produces html file

const App = () => {
        return (
                <div>
                        <SearchBar />
                </div>
               ); 
}
// Take this component's generated html and put in DOm (in the page)
ReactDOM.render(<App />,document.querySelector('.container'));
