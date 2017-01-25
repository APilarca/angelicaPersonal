var AllComments = React.createClass({
	render() {
		var comments = this.props.comments.map((comment) => {
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