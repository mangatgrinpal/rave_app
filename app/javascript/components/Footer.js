import React from "react"

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	goInstagram() {
		window.location.assign("www.instagram.com")
	}

	render () {
		return (
			<div id="footer" className="container-fluid">
				<br/>
				<div className="row meetup-link">
					<div className="col offset-1">
						<a href="/users/sign_up">Sign up today</a>
					<br/>
					</div>
				</div>
				<div className="row account-links">
					<div className="col-2 offset-1">
					<br/>
						<a href="/users/edit">Your Account</a>
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
								<a href="javascript:void(0)"><i className="fa fa-2x fa-instagram"/></a>
								&ensp;
								<a href="javascript:void(0)"><i className="fa fa-2x fa-twitter-square"/></a>
								&ensp;
								<a href="javascript:void(0)"><i className="fa fa-2x fa-github-square"/></a>
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