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
					<div className="col offset-1">
						<a href="javascript:void(0)"><h5>Sign up today</h5></a>
					<br/>
					</div>
				</div>
				<div className="row">
					<div className="col-2 offset-1">
					<br/>
						<p>Edit your account</p>
					</div>
					<div className="col-2">
					<br/>
						<p>see your account</p>
					</div>
					<div className="col-2">
					<br/>
						<p>Hello World</p>
					</div>
					<div className="col-5 follow">
						<br/>
						<h5>Follow us</h5>
						<div className="row">
							<div className="col">
								<p> <a href="www.instagram.com"><i className="fa fa-2x fa-instagram"/></a>
								<br/>

								<a href="www.twitter.com"><i className="fa fa-2x fa-twitter-square"/></a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}

export default Footer