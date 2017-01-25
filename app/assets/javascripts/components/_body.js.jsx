var Body = React.createClass({
	getInitialState() {
		return { comments: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/comments.json', (response) => { this.setState({ comments: response }) });
	},

	handleSubmit(comment) {
		var newState = this.state.comments.concat(comment);
		this.setState({ comments: newState })
	},

	render() {
		return(
			<div>
				<AllComments comments={ this.state.comments }/>
				<NewComments handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
});