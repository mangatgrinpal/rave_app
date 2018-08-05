import React from "react"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			meetups: this.props.meetups
		}
	}
	meetupInfo () {}

	meetUpData () {
		var meetups = this.state.meetups.map ((meetup) => {
			return (
				<div key={meetup.id} className="row meetup-list">
					<div className="col">
						<a href="javascript:void(0)">{meetup.name}</a>
					</div>
					<div className="col">
						{meetup.user.email}
					</div>
				</div>
			)
		})
		return (
			<div className="container">
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
							<p><a href="javascript:void(0)">Start one</a> now to get it poppin'!</p>
						</div>
					</div>
				</div>
			)
		}
	};
}

export default EventMeets