import React from "react"
import Meetup from "./Meetup"
import MeetupModal from "./MeetupModal"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		this.updateMeetupsState = this.updateMeetupsState.bind(this)
		this.setCurrentlySelectedMeetup = this.setCurrentlySelectedMeetup.bind(this)
		this.state = {
			meetups: this.props.meetups,
			currentlySelectedMeetup: {}
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

	
	render () {
		var stuff, text, badMeetupsText, startNewMeetupText;
		if (this.state.meetups.length > 0) {
			stuff =  
				<div>
					<div className="row meetup-info">
						<div className="col-5">
							{this.meetUpData()}
						</div>
						<div className="col meetup-full">
						{this.state.currentlySelectedMeetup.description}
						</div>
					</div>
				</div>

			text = "Meetups at this event."
			badMeetupsText = "Don't see any that you like?"
			startNewMeetupText = "Start your own."
		}
		else {
			text = "No Meetups at this event."
			startNewMeetupText = "Start one now."
		}

		return (
			<div className="meetups">
				<div className="row">
					<div className="col">
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
			</div>
		)
	};
}

export default EventMeets