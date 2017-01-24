var AllComments = React.createClass({
	getInitialState() {
		return { comments: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/comments.json', (response) => { this.setState({ comments: response }) });
		console.log('component mounted', this.comments)		
	},

	render() {
		var comments = this.state.comments.map((comment) => {
			return(
				<div key={ comment.id }>
					<h3>{ comment.name }</h3>
					<p>{ comment.description }</p>
				</div>
			)
		});

		return(
			<div>
				{ comments }
			</div>
		)
	}
});