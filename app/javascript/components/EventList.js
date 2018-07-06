import React from "react"
import Event from "./Event"

class EventList extends React.Component {
	constructor(props) {
		super(props);
	}

	tableData() {
		return this.props.events.map ((event)=> {
			return (

				<Event key={event.id} events={event}/>
			)
		});
	}

	render () {
		return (
			<div>
				<div className="row justify-content-start">
					<div className="col">
						<h3>Event Name:</h3>
						
					</div>
					<div className="col">
						<h3>Location:</h3>
					</div>
				</div>
				{this.tableData()}
				

			</div>
		)
	}
}

export default EventList