import React from "react"
import Meetup from "./Meetup"
import MeetupModal from "./MeetupModal"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		this.meetUpInfo = this.meetUpInfo.bind(this)
		this.state = {
			meetups: this.props.meetups
		}
	}
	meetUpInfo () {
	
		$.ajax("/meetups/" + this.state.meetups.id, {
				type: "GET",
				dataType: "JSON",
				success: (data) => {
					this.setState({meetups: data.meetup})
				}
		})
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
		console.log(this.props)

		if (this.props.meetups.length > 0) {
			return (
				<div className="meetups">
					<div className="row">
						<div className="col">
							<h2 className="center">Meetups at this event</h2>
							<br/>
						</div>
					</div>
					<div className="meetup-info">
						{this.meetUpData()}
					</div>
					<div className="meetup-modal">
						<br/>
						Don't see any that you like?
						<br/>
						{/* Button trigger modal */}
						<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#meetupModal">Start your own.</button>
						{/* Modal */}
						<MeetupModal meetupIndexUrl={this.props.meetupIndexUrl} />
					</div>
					<div className="meetup-full">

					</div>
				</div>
			)
		}
		else {
			return (
				<div className="meetups">
					<div className="row">
						<div className="col">
							<h2>No meetups at this event yet.</h2>
							<div className="meetup-modal">
								{/* Button trigger modal */}
								<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#meetupModal">Start one now.</button>
								{/* Modal */}
								<MeetupModal meetupIndexUrl={this.props.meetupIndexUrl} />
							</div>
						</div>
					</div>
				</div>
			)
		}
	};
}

export default EventMeets