var button = ReactBootstrap.Button;

var NewComments = React.createClass({
	handleClick() {
			var name = this.refs.name.value;
			var description = this.refs.description.value;
			$.ajax({
				url: '/api/v1/comments',
				type: 'POST',
				data: { comment: { name:name, description: description } },
				success: (comment) => {
					this.props.handleSubmit(comment);
				}
			});
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