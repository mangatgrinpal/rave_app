import React from "react"

class EventMeets extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="meetups">
				<div className="row">
					<div className="col">
						<h3>Meetups go here **make this div visible onclick only**</h3>
						<p>There's no meetups at this event yet. <a href="javascript:void(0)">Start one now!</a></p>
					</div>
				</div>
			</div>
		)
	};
}

export default EventMeets