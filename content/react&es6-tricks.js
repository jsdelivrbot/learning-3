// on input text change
onInputChange(event) {
    console.log(event.target.value);
}

// or 

return <input onChange={e => console.log(e.target.value) } placeholder="Search..."/>;

// *******************************************************************************
// add text on change input
constructor(props) {
    super(props);

    this.state = { term: '' };
}
render() {
    return ( <div>
        <input onChange = { e => this.setState({ term: e.target.value }) }
        placeholder = "Search..." />
        Value of the input: { this.state.term } </div>
    );
}
