var Projects = React.createClass({
	render() {
		return(
			<h2>This is in projects</h2>
			<a href="https://http://boot-scheduler.herokuapp.com/"><img className="project" src="<%= asset_path('AngelicaHeadshot.png') %>" /></a>
			<a href="https://www.linkedin.com/in/angelica-pilarca"><img className="project" src="<%= asset_path('AngelicaHeadshot.png') %>" /></a>
		)
	}
});