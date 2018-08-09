import React from "react"
import Meetup from "./Meetup"
import MeetupModal from "./MeetupModal"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		this.meetUpInfo = this.meetUpInfo.bind(this)
		this.updateMeetupsState = this.updateMeetupsState.bind(this)
		this.state = {
			meetups: this.props.meetups
		}
	}
	meetUpInfo () {
		
		$.ajax("/meetups/" + self.state.meetups.id, {
				type: "GET",
				dataType: "JSON",
				success: (data) => {
					self.setState({meetups: data.meetup})
				}
		})
	}

	updateMeetupsState(data) {
		this.setState({meetups: data})
	}

	meetUpData () {
		var meetups = this.state.meetups.map ((meetup) => {
			return (
				<div key={meetup.id}>
					<Meetup meetUpInfo={this.meetUpInfo} meetup={meetup} />
				</div>
			)
		})
		return (
			<div className="container-fluid">
				{meetups}
			</div>
		)
	}



	render () {
		var stuff, text, badMeetupsText, startNewMeetupText;
		if (this.state.meetups.length > 0) {
			stuff =  
				<div>
					<div className="row meetup-titles">
						<div className="col">
							<h5>Name</h5>
						</div>
						<div className="col">
							<h5>Organizer</h5>
						</div>
					</div>
					<div className="meetup-info">
						{this.meetUpData()}
					</div>
					<div className="meetup-full">
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
				<MeetupModal meetupIndexUrl={this.props.meetupIndexUrl} updateMeetupsState={this.updateMeetupsState} />
			</div>
		)
	};
}

export default EventMeets