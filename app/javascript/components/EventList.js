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
				<div className="container">
					<div className="card-deck">
						{this.tableData()}
					</div>
				</div>
			</div>
		)
	}
}

export default EventList