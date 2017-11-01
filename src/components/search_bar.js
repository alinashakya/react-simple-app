    import React, { Component } from 'react';

class SearchBar extends Component {

        constructor(props){
                super(props);
                this.state = {term: ''};
        }
        
        render () {
                //return <input onChange={this.onInputChange} />
                //return <input onChange={event => console.log(event.target.value)} />;
                return ( 
                        <div>
                                <input
                                 value={this.state.term}
                                 onChange={event => this.setState({ term: event.target.value})} />
                                <p>Value of the input: {this.state.term}</p> 
                        </div>
                );
        }
        
        onInputChange(event) {
              console.log(event.target.value);  
        }
}

export default SearchBar;
