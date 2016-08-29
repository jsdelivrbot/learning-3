// imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// youtube api key
const API_KEY = 'AIzaSyCYJwuGbbUYHwzy2GVd3X_Dpa_neUo6QMk';

// create a new component
 class App extends Component {
 	constructor(props) {
 		super(props);

 		// state
 		this.state = { videos: [] };

 		// youtube videos
		YTSearch({key: API_KEY, term: 'pilav'}, (videos) => {
			this.setState({videos});
		});
 	}

 	render() {
	 	return( 
	 	<div>
	 		<SearchBar />
	 	</div>
	 	);
 	}
 }

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));