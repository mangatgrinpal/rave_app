import React from "react"
import Event from "./Event"
import ArrowButton from "./ArrowButton"

class EventList extends React.Component {
	constructor(props) {
		super(props);
		this.getMoreEvents = this.getMoreEvents.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
		this.state = {
			events: this.props.events,
			page: 1,
			showMore: '',
			location: "San Francisco"
		}
	}

	tableData() {
		var events = this.state.events.map ((event)=> {
			return (
				<div className="center" key={event.id} >
					<Event event={event} eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
				</div>
			)
		})

			if (this.state.events.length % 3 === 0) {
				return (
					<div className="card-deck">
						{events}
					</div>
				)
			}
			else {
				return (
					<div className="card-deck">
						{events}
					</div>
				)
			}
	}


	getMoreEvents() {
		this.setState({page: this.state.page += 1})
		$.ajax(this.props.eventIndexUrl + "?page=" + this.state.page + "&location=" + this.state.location, {
				dataType: "JSON",
				type: "GET",
				success: (data) => {
					this.setState({events: data.events,  showMore: data.isAll})
				}
		})
	}

	changeLocation(evt) {
		this.setState({location: evt.target.value, page: 0}, ()=>{this.getMoreEvents()})
	}

	render () {

		return (
			<div>
				<div className="container center">
					<button onClick={this.changeLocation} className="btn btn-primary" value="San Francisco">San Francisco</button>
					<button onClick={this.changeLocation} className="btn btn-primary" value="Los Angeles">Los Angeles</button>
					{this.tableData()}
					<a onClick={this.getMoreEvents} href="javascript:void(0)" >
					<ArrowButton events={this.props.events} showMore={this.state.showMore}/></a>
				</div>
			</div>
		)
	}
}

export default EventList