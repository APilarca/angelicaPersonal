var NewComments = React.createClass({
	handleClick() {
			var name = this.refs.name.value;
			var description = this.refs.description.value;

			console.log('The name' + name + 'the description' + description);
	},

	render() {
		return (
			<div>
				<input ref='name' placeholder='Your name' />
				<input ref='description' placeholder='comments, feedback, suggestions' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});