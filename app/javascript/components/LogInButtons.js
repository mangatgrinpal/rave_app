import React from "react"
import EventModal from "./EventModal"

class LogInButtons extends React.Component {
	constructor(props){
		super(props);
	}

	logOut () {
		$.ajax("/users/sign_out", {
				dataType: "JSON",
				type: "DELETE",
				success: ()=> {
					window.location.replace("/")
					alert("You've been successfully logged out.")
				}
		});
	}


	render () {
		
		if (this.props.currentUser.admin) {
			return (
				<div>
					{/* Button trigger modal */}
					<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">New RaveMeet</button>
					{/* Modal */}
					<EventModal eventIndexUrl={this.props.eventIndexUrl}/>
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