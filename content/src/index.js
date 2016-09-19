// imports
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// api key
const api_key = 'AIzaSyCYJwuGbbUYHwzy2GVd3X_Dpa_neUo6QMk';

// create a new component => HTML
class App extends Component {
	constructor(props) {
		super(props);

		// define state
		this.state = {
		  videos: [ ],
		  selectedVideo: null 
		};
		this.videoSearch('bajheera wow'); 
	}
		// video search
		videoSearch(term) {
			// youtube 
			YTSearch({key: api_key, term: term, maxResults: 50}, (videos) => {
				this.setState({ 
					videos: videos,
					selectedVideo: videos[0] 
				});
			});
		}
	// render
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400 );
		// return
		return (
           <div>
               <SearchBar onSearchTermChange={videoSearch} />
               <VideoDetail video = {this.state.selectedVideo} />
               <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
               	  videos={this.state.videos} />
           </div>
		)
	};
}

// put generated html in the dom
ReactDOM.render(<App />, document.getElementById('main-app'));

