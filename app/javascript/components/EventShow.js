import React from "react"
import EventMap from "./EventMap"
import EventMeets from "./EventMeets"

class EventShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: false
		}
		this.toggleHidden = this.toggleHidden.bind(this)
	}

	toggleHidden () {
		this.setState ({
			isHidden: !this.state.isHidden
		})
	}

	render () {

		return (
			<div className="container-fluid event">
				<br/>
				<br/>
				<div className="row">
					<div className="col show">
						<div className="card">
							<div className="card-body" style={{backgroundImage: "url(" + this.props.event.poster +")"}}>
								<div className="card-title date">
									<div className="center">
										<h5>{this.props.monthDate}</h5>
										<h5>{this.props.year}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col details">
						<div className="row info-main">
							<div className="col">
								<h5>{this.props.event.name}</h5>
								<p>{this.props.event.venue}</p>
								<p>{this.props.event.location}, CA</p>
							</div>
						</div>
						<div className="row description">
							<div className="col">
								<p>{this.props.event.description}</p>
							</div>
						</div>
						<br/>
						<div className="row meetuphandler">
							<div className="col center">
								<button onClick={this.toggleHidden} className="btn btn-primary">{this.state.isHidden? 'Hide':'See'} meetups my guy</button>
							</div>
						</div>
					</div>
				</div>
				<br/>
				{this.state.isHidden && <EventMeets meetups={this.props.meetups}/>}
				<br/>
				<EventMap event={this.props.event}/>
			</div>
		)
	};
}

export default EventShow