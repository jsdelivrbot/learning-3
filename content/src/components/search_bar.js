import React, { Component } from 'react';

// class component
class SearchBar extends Component{
	constructor(props){
		super(props);
		// state
		this.state = {term: ''};
	}
	// render
	render() {
		return (
			<div>
				<input
				value={this.state.term} 
				onChange={e => this.onInputChange(e.target.value)} 
				placeholder="Search..."
				className="search-bar"
				/>
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
// export
export default SearchBar;

