// imports
import React from 'react';
import ReactDOM from 'react-dom';

// components
import SearchBar from './components/search_bar';

// youtube api key
const API_KEY = 'AIzaSyCYJwuGbbUYHwzy2GVd3X_Dpa_neUo6QMk';

// create a new component

 const App = () => {
 	return( 
 	<div>
 		<SearchBar />
 	</div>
 	);
 }

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));