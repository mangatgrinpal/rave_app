import React from "react"

class HomeLanding extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		if (this.props.isLoggedIn) {
			return (
				<div className="row" id="landing-background">
					<div className="col">
						<h2>Locate friendly groups at your favorite events.</h2>
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="row" id="landing-background">
					<div className="col">
						<h2>Locate friendly groups at your favorite events.
						<br/>Sign up today!</h2>
						<a className="btn btn-primary" href="/users/sign_up">Sign Up</a>
					</div>
				</div>
			)
		}
	}
}

export default HomeLanding