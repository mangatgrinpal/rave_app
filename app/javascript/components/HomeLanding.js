import React from "react"

class HomeLanding extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		var loggedIn;
		if (this.props.isLoggedIn) {
			loggedIn =
				<div>
					<h2>Locate friendly groups at your favorite events</h2>
				</div>
		}
		else {
			loggedIn =
				<div>
					<h2>Locate friendly groups at your favorite events
					<br/>Sign up today!</h2>
					<a className="btn btn-sm btn-primary" href="/users/sign_up">Sign Up</a>
				</div>
		}
		return (
			<div className="row">
				<div className="col" id="landing-background">
					{loggedIn}
				</div>
			</div>
		)
	}
}

export default HomeLanding