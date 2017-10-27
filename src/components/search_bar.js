import React, { COm } from 'react';

class SearchBar extends React.Component {

        constructor(props){
                super(props);
                this.state = {term: ''};
        }
        
        render () {
                //return <input onChange={this.onInputChange} />
                //return <input onChange={event => console.log(event.target.value)} />;
                return ( 
                        <div>
                                <input onChange={event => this.setState({ term: event.target.value})} />
                                Value of the input: {this.state.term}
                        </div>
                );
        }
        
        onInputChange(event) {
              console.log(event.target.value);  
        }
}

export default SearchBar;
