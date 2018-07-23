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
					alert("You've been logged out")
				}
		});
	}

	newMeetup () {
		
	}



	render () {
		console.log(this.props)
		
		if (this.props.isLoggedIn) {
			return (
				<div>
					{/* Button trigger modal */}
					<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">New RaveMeet</button>
					{/* Modal */}
					<EventModal/>
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