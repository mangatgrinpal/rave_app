import React from "react"
import LogInButtons from "./LogInButtons"

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	goHome() {
		window.location.href = ("/");
	}



	render () {

		return (
			<div>
				<nav className="navbar navbar-light justify-content-between">
				  <a onClick={this.goHome} className="navbar-brand">Rave Meet</a>
				  <div className="justify-content-end">
					  <LogInButtons isLoggedIn={this.props.isLoggedIn}/>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Nav