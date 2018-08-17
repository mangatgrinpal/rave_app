import React from "react"
import Event from "./Event"


class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.currentUser
		}
	}

	userEvents() {
		var userEvent = this.props.userEvents.map ((event)=> {
			return (
				<div className="center-text" key={event.id} >

					<Event event={event} eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
				</div>
			)
		})

		return (
			<div className="card-deck">
				{userEvent}
			</div>
		)
	}



	userMeetups() {
		var userMeetup = this.props.userMeetups.map ((meetup)=> {
			return (
				<div className="row" key={meetup.id}>
					<div className="col">
						{meetup.name}
					</div>
				</div>
			)
		})

		return (
			<div>
				{userMeetup}
			</div>
		)
	}

	render () {
		var eventStatus;
		debugger
		if (this.props.userEvents.length === 0) {
			eventStatus =
			<div className="col-9">
				<h3>You're not attending any events yet. Let's change that.</h3>
			</div>
		}

		else {
			eventStatus =
			<div className="col-9">
				<h3>Events that you're attending</h3>
				<br/>
				{this.userEvents()}
				<h3>Your Meetups</h3>
				{this.userMeetups()}
			</div>
		}


		return (
			<div className="container-fluid dashboard">
				<div className="row">
					<div className="col-3 user-greeting">
						<h3>Hello {this.state.user.username}</h3>
						<a href="/users/edit">Edit your account</a>
					</div>
					{eventStatus}
				</div>
			</div>
		)
	}
}

export default Dashboard