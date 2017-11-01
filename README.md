# React Simple App
This app uses Youtube API to search youtube videos and display them.

Some useful notes on react :
1. After creating project, "npm install" => to get all project dependencies.
1. npm start => runs local server
1. bundle.js => compiled javascript for complete applications
1. jsx => javascript that looks like html => return <div>test</div> => gets tranformed to vanilla js, normal js
5. webpack and babel => trasforms the js code to viewable form
6. You can refer http://babeljs.io/repl/ to check your jsx codes
7. To import react => import React from 'react'; import ReactDom from 'react-dom';
8. document.querySelector('.container') =>  search div container
9. npm install --save youtube-api search => install youtube api search
10. Functional components do not have "state" but class do have "state"
11. Function based method : 
```const App = () => {
        return (
                <div>
                        <SearchBar />
                </div>
               ); 
}
```
12. npm install --save lodash => used to load page on certain intervals
13. Call Backs => Used to maintain Parent child relation