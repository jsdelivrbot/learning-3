// imports
import React, {Component} from 'react';

// class component
class SearchBar extends Component{
	// constructor
	constructor(props) {
    super(props);

    // state
    this.state = { term: '' };
} 
  	// render jsx 
	render() {
		return(
			<div>
				<input 
				value={this.state.term}
				type="text"
				placeholder="Search..." 
				onChange={e => this.onInputChange(e.target.value)} />
			</div>
		)
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// export component
export default SearchBar;
