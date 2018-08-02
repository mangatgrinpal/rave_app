import React from "react"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetups: this.props.meetups
		}
	}

	meetUpData () {
		var meetups = this.state.meetups.map ((meetup) => {
			return (
				<div key={meetup.id}>
					{meetup.name}
				</div>
			)
		})
		return (
			<div>
				<h3>{meetups}</h3>
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
							<h2>Meetups at this event</h2>
							<h3>{this.meetUpData()}</h3>
						</div>
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
							<p><a href="javascript:void(0)">Start one now to get it poppin'!</a></p>
						</div>
					</div>
				</div>
			)
		}
	};
}

export default EventMeets