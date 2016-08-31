// imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video-detail';
// youtube api key
const API_KEY = 'AIzaSyCYJwuGbbUYHwzy2GVd3X_Dpa_neUo6QMk';

// create a new component
 class App extends Component {
 	constructor(props) {
 		super(props);

 		// state
 		this.state = {
 			videos: [],
 			selectedVideo: null
 		};
 		this.videoSearch('pilav wow');
 	}
 	videoSearch(term){
 		// youtube videos
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
 	}
 	// render
 	render() {
	 	return( 
	 	<div>
	 		<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
	 		<VideoDetail video={this.state.selectedVideo}/>
	 		<VideoList 
	 		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	 		videos={this.state.videos}/>
	 	</div>
	 	);
 	}
 }

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));