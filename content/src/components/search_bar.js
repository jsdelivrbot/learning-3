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
				onChange={e => this.setState({term: e.target.value})} 
				placeholder="Search..."
				/>
			</div>
		);
	}
}
// export
export default SearchBar;

