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
		if (this.props.userEvents == null) { 
			return (
				<div/>
			)
		} else {
			return (
			<div className="card-deck">
				{userEvent}
			</div>
		)}
	}



	userMeetups() {
		var userMeetup = this.props.userMeetups.map ((meetup)=> {
			return (	
				<div className="list-group-item list-group-item-action flex-column align-items-start" key={meetup.id}>
					<div className="d-flex w-50 justify-content-between">
						<h4>{meetup.name}</h4>
					</div>
					<p className="mb-1">
						{meetup.description}
					</p>
				</div>
			)
		})
		if (this.props.userMeetups.length == 0) {
			return (
				<div/>
			)
		} else {
				return (
					<div>
						<h3>Meetups you've joined</h3>
							<br/>
						<div className="list-group">
							{userMeetup}
						</div>
					</div>
				)
			}
	}

	userCreatedMeetups() {
		var userCreatedMeetup = this.props.createdMeetups.map ((meetup)=> {
			return (	
				<div className="list-group-item list-group-item-action flex-column align-items-start" key={meetup.id}>
					<div className="d-flex w-50 justify-content-between">
						<h4>{meetup.name}</h4>
					</div>
					<p className="mb-1">
						{meetup.description}
					</p>
				</div>
			)
		})
		if (this.props.createdMeetups.length == 0) {
			return (
				<div/>
			)} else {
				return (
					<div>
					<br/>
					<h3>Meetups you've created</h3>
					<br/>
						<div className="list-group">

							{userCreatedMeetup}
						</div>
					</div>
			)
			}
	}

	userGreeting () {
		var d = new Date()
		var time = d.getHours();

		if (time < 12) {
			return ( 
				<div>
				Good morning
				</div>
			)
		}
		if (17 > time > 12) {
			return ( 
				<div>
				Good afternoon
				</div>
			)
		}
		if (time > 17) {
			return ( 
				<div>
				Good evening
				</div>
			)
		}
	}

	render () {
		var eventStatus;
		if (this.props.userEvents.length == 0) {
			eventStatus =
			<div className="col-9">
				<br/>
				<h3>You're not attending any events yet. Let's change that.</h3>
				<p>Return home now, click <a href="/">here</a>.</p>
			</div>
		}

		else {
			eventStatus =
			<div className="col-9">
				<div className="col-12">
					<div className="user-events">
						<br/>
						<h3>Events</h3>
					</div>
					<br/>
					{this.userEvents()}
				</div>
				<div className="col-9">
					
					{this.userMeetups()}
				</div>
				<div className="col-9">
					{this.userCreatedMeetups()}
				</div>
					<br/>
			</div>
		}


		return (
			<div className="container-fluid dashboard">
				<div className="row">
					<div className="col-3 user-greeting">
						<br/>
						<h3>{this.userGreeting()}
						{this.state.user.username},</h3>
						<p>your dashboard is a place for you to view events that you're attending and meetups that you've created or joined.</p>
						<br/>
						<br/>
						<br/>
						<p>Need to change your account information?<br/><br/> Manage your account by <a href="/users/edit">clicking here</a>.</p>
					</div>
					{eventStatus}
				</div>
			</div>
		)
	}
}

export default Dashboard