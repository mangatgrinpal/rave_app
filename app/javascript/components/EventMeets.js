import React from "react"
import Meetup from "./Meetup"
import MeetupModal from "./MeetupModal"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		this.updateMeetupsState = this.updateMeetupsState.bind(this)
		this.setCurrentlySelectedMeetup = this.setCurrentlySelectedMeetup.bind(this)
		this.joinMeetup = this.joinMeetup.bind(this)
		this.leaveMeetup = this.leaveMeetup.bind(this)
		this.state = {
			meetups: this.props.meetups,
			currentlySelectedMeetup: null
		}
	}
	

	updateMeetupsState(data) {
		this.setState({meetups: data})
	}

	setCurrentlySelectedMeetup(meetup) {
		this.setState({currentlySelectedMeetup: meetup})
	}

	meetUpData () {
		var meetups = this.state.meetups.map ((meetup) => {
			return (
				<div className="list-group-item list-group-item-action flex-column align-items-start" key={meetup.id}>
					<Meetup meetupIndexUrl={this.props.meetupIndexUrl} meetup={meetup} setCurrentlySelectedMeetup={this.setCurrentlySelectedMeetup}/>
				</div>
			)
		})
		return (
			<div className="list-group meetup-list">
				<div className="list-group-item bg-light flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h4 className="mb-1">Meetup Name</h4>
						<h4 className="mb-1">Creator</h4>
					</div>
				</div>
				{meetups}
			</div>
		)
	}

	meetupAttendees() {
		var attendees = this.state.currentlySelectedMeetup.users.map ((attendee, index)=> {
			return (
				<div key={index}>
					<a href="javascript:void(0)">{attendee.username}</a>
				</div>
			)
		})

		return (
			<div>
				{attendees}
			</div>
		)
	}

	joinMeetup(e) {
		e.preventDefault()
		var self = this;
		$.ajax("/meetups/"+ self.state.currentlySelectedMeetup.id +"/attendances", {
			dataType: "JSON",
			type: "POST",
			success: (data)=> {
				self.setState({meetups: data.meetups, currentlySelectedMeetup: data.currentlySelectedMeetup })
			}
		});
	}

	
	currentUserAttendanceId() {
		var currentUserId = this.props.currentUser.id
		var attending = this.state.currentlySelectedMeetup.attendances.filter( attendance => attendance.user_id == currentUserId)
		console.log(attending[0]["id"])
		
	}



	leaveMeetup() {
		var self = this;
		$.ajax("/meetups/"+ self.state.currentlySelectedMeetup.id +"/attendances/"+ self.state.currentlySelectedMeetup.attendances.filter( attendance => attendance.user_id == self.props.currentUser.id)[0]["id"], {
			dataType: "JSON",
			type: "DELETE",
			success: (data)=> {

				self.setState({meetups: data.meetups, currentlySelectedMeetup: data.currentlySelectedMeetup })
			}
		});
	}

	alreadyJoinedMeetup() {
		var currentUserId = this.props.currentUser.id
		this.state.currentlySelectedMeetup.users.forEach((user)=> {
			if (user.id == currentUserId) {
				return true
			}		 
		})
		return false
	}


	toggleMeetupStatus () {
		if (this.state.currentlySelectedMeetup.users.map((n)=> {return(n.id)}).includes(this.props.currentUser.id)) {
		return (<button onClick={this.leaveMeetup} className="btn btn-primary">Leave Meetup</button>)
		} else {
			return (<button onClick={this.joinMeetup} className="btn btn-primary">Join Meetup</button>)
		}
	}





	meetupDescription () {
		if (this.state.currentlySelectedMeetup) {
			return (
				<div className="list-group meetup-list">
					<div className="list-group-item bg-light flex-column align-items-start">
						<div className="d-flex w-100 justify-content-between">
							<h4 className="mb-1">Description</h4>
							{this.toggleMeetupStatus()}
							<h4 className="mb-1">Attendees</h4>
						</div>
					</div>
					<div className="list-group-item list-group-item-action flex-column align-items-start">
						<div className="row justify-content-between">
							<div className="col-9">
								{this.state.currentlySelectedMeetup.description}
							</div>
							<div className="col-3">
								{this.meetupAttendees()}
							</div>
						</div>
					</div>
				</div>

			)
		}
	}

	
	render () {
		var stuff, text, badMeetupsText, startNewMeetupText;
		if (this.state.meetups.length > 0) {
			stuff =  
				<div>
					<div className="row meetup-info">
						<div className="col-5">
							{this.meetUpData()}
						</div>
						<div className="col-7 meetup-full">
							{this.meetupDescription()}
						</div>
					</div>
				</div>
			

			text = "Meetups at this event"
			badMeetupsText = "Don't see any that you like?"
			startNewMeetupText = "Start your own."
		}
		else {
			text = "No Meetups at this event"
			startNewMeetupText = "Start one now."
		}

		return (
			<div className="meetups">
				<div className="row">
					<div className="col">
						<br/>
						<br/>
						<br/>
						<br/>
						<h2 className="center">{text}</h2>
						<br/>
					</div>
				</div>
				{stuff}
				<div className="meetup-modal">
					{badMeetupsText}
					<br/>
						<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#meetupModal">{startNewMeetupText}</button>
					</div>
				<MeetupModal meetupIndexUrl={this.props.meetupIndexUrl} 
										updateMeetupsState={this.updateMeetupsState}
										isLoggedIn={this.props.isLoggedIn}/>
					<br/>
					<br/>
			</div>
		)
	};
}

export default EventMeets