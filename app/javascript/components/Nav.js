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
			<div className="global-nav">
				<nav className="navbar navbar-light justify-content-between">
				  <a onClick={this.goHome} href="javascript:void(0)" className="navbar-brand">RaveMeet</a>
				  <div className="justify-content-end">
					  <LogInButtons isLoggedIn={this.props.isLoggedIn} 
					  								rootPath={this.props.rootPath} 
					  							currentUser={this.props.currentUser}
					  							eventIndexUrl={this.props.eventIndexUrl}/>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Nav