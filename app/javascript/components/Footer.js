import React from "react"

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id="footer" className="container-fluid">
				<br/>
				<div className="row meetup-link">
					<div className="col offset-1 sign-up">
						<a href="/users/sign_up">Sign up today</a>
					<br/>
					</div>
				</div>
				<div className="row account-links">
					<div className="col-2 offset-1">
					<br/>
						<a href="/dashboard">Your Dashboard</a>
					</div>
					<div className="col-2">
					<br/>
						<a href="/users/sign_in">Log in</a>
					</div>
					<div className="col-2">
					<br/>
						<a href="/users/sign_up">Sign up</a>
					</div>
					<div className="col-5 follow">
						<br/>
						<h5>Follow us</h5>
						<br/>
						<div className="row">
							<div className="col">
								<p> 
								<a href="https://www.instagram.com"><i className="fa fa-2x fa-instagram"/></a>
								&ensp;
								<a href="https://twitter.com"><i className="fa fa-2x fa-twitter-square"/></a>
								&ensp;
								<a href="https://www.github.com"><i className="fa fa-2x fa-github-square"/></a>
								</p>
								<br/>
								<br/>
								<br/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}

export default Footer