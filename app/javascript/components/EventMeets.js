import React from "react"
import Meetup from "./Meetup"

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