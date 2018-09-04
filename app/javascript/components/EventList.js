import React from "react"
import Event from "./Event"
import ArrowButton from "./ArrowButton"

class EventList extends React.Component {
	constructor(props) {
		super(props);
		this.getMoreEvents = this.getMoreEvents.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
		this.goBack = this.goBack.bind(this)
		this.state = {
			events: this.props.events,
			page: 1,
			showMore: true,
			location: '',
			isHidden: false
		}
	}

	tableData() {
		var events = this.state.events.map ((event)=> {
			return (
				<div className="center" key={event.id} >
					<br/>
					<br/>
					<Event event={event} eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
				</div>
			)
		})

			if (this.state.events.length % 3 === 0) {
				return (
					<div className="card-deck center">
						{events}
					</div>
				)
			}
			else {
				return (
					<div className="card-deck center">
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

	goBack() {
		this.setState({ isHidden: !this.state.isHidden, page: 1 })
	}

	changeLocation(evt) {
		$(this.setState({location: evt.target.id, page: 0, isHidden: !this.state.isHidden}, ()=>{this.getMoreEvents()}))
	}

	camelCaseToString() {
		var x = this.state.location
		return (
		x.replace(/([A-Z])/g, ' $1')
		.replace(/^./, function(str){ return str.toUpperCase(); })
		)
	}


	render () {

		return (
	
				<div className="center">
					<div className="row">
						<div className="col-12 event-selector">
							{!this.state.isHidden && 
							<div> 
							<h3>Choose a city to get started</h3>
							<br/>
							<div className="row cities">
								<div onClick={this.changeLocation} id="sanFrancisco" className="col-7 san-francisco-pic">
									<p id="sanFrancisco">San Francisco</p>
								</div>
								<div onClick={this.changeLocation} id="losAngeles" className="col-5 los-angeles-pic">
									<p id="losAngeles">Los Angeles</p>
								</div>
							</div>
							</div>}
							{this.state.isHidden && 
							<div>
							<h3>Upcoming events in {this.camelCaseToString()}</h3>
							<button className="btn btn-primary" onClick={this.goBack}>Start Over</button>
							<br/>
							{this.tableData()}
							<a onClick={this.getMoreEvents} href="javascript:void(0)" >
							<ArrowButton events={this.props.events} showMore={this.state.showMore}/></a>
							</div>}
						</div>
					</div>
				</div>
		)
	}
}

export default EventList