import React from "react"
import Event from "./Event"

class EventList extends React.Component {
	constructor(props) {
		super(props);
		this.getMoreEvents = this.getMoreEvents.bind(this)
		this.state = {
			events: this.props.events,
			page: 1
		}
	}

	tableData() {
		var events = this.state.events.map ((event)=> {
			return (
				<div className="center">
					<Event key={event.id} event={event} eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
				</div>
			)
		})

			if (this.state.events.length % 4 === 0)
				return (
					<div className="card-deck">
						{events}
					</div>
				)
			else
				return (
					<div className="card-deck">
						{events}
					</div>
				)
	}


	getMoreEvents() {
		this.setState({page: this.state.page += 1})
		$.ajax(this.props.eventIndexUrl + "?page=" + this.state.page, {
				dataType: "JSON",
				type: "GET",
				success: (data) => {
					this.setState({events: data.events })
				}
		})
	}

	render () {
		return (
			<div>
				<div className="container center">
					{this.tableData()}
					<a onClick={this.getMoreEvents} href="javascript:void(0)" ><i className="fa fa-5x fa-angle-down"/></a>
				</div>
			</div>
		)
	}
}

export default EventList