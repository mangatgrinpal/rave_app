import React from "react"


class LogInButtons extends React.Component {
	constructor(props){
		super(props);
	}

	logOut () {
		$.ajax("/users/sign_out", {
				dataType: "JSON",
				type: "DELETE",
				success: ()=> {
					alert("You've been successfully logged out.")
					var pathname = window.location.pathname
					if (pathname === "/dashboard") {
						window.location.replace("/")
					}
					else {
						window.location.reload()
					}
				}
		});
	}

	goDashboard() {
		window.location.replace("/dashboard")
	}


	render () {
		
		if (this.props.isLoggedIn) {
			return (
				<div>
					<button onClick={this.goDashboard} className="btn btn-outline-primary">Dashboard</button>
					<button onClick={this.logOut} className="btn btn-outline-primary">Log Out</button>
				</div>
			)
		}
		else {
			return (
				<div>
					<a className="btn btn-outline-primary" href="/users/sign_up">Sign Up</a>
				  <a className="btn btn-outline-primary" href="/users/sign_in">Log In</a>
				</div>
			)
		}
	};
}

export default LogInButtons