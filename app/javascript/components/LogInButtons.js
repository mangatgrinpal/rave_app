import React from "react"

class LogInButtons extends React.Component {
	constructor(props){
		super(props);

	}

	logOut () {
		$.ajax("users/sign_out", {
				dataType: "JSON",
				type: "DELETE",
				success: ()=> {
					window.location.replace("/");
				}
		})
	}



	render () {
		console.log(this.props)

		if (!this.props.isLoggedIn) {
			return (
				<div>
					<a className="btn btn-outline-primary" href="/users/sign_up">Sign Up</a>
				  <a className="btn btn-outline-primary" href="/users/sign_in">Log In</a>
				</div>
			)
		}
		else {
			return (
				<div>
					<button onClick={this.logOut} className="btn btn-outline-primary">Log Out</button>
				</div>
			)
		}
	};
}

export default LogInButtons