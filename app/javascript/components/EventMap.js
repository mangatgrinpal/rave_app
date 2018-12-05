import React from "react"

class EventMap extends React.Component {
	constructor(props) {
		super(props);
		this.mousePos = this.mousePos.bind(this)
		this.state = { x:0, y: 0};
	}

	mousePos(evt) {
		const position = 
		this.refs.elem.getBoundingClientRect();

		this.setState({x:evt.nativeEvent.offsetX, y:evt.nativeEvent.offsetY});
		$('#meetupModal').modal('toggle');
		
	}

	render () {
		const {x,y} = this.state;
		if (this.props.event.venue_map === null) {

			return (
				<div/>
			)
		}

		else {
			return (
				<div className="container">
					<br/>
					<div className="row">
						<div className="col">
							<h3>Venue Map</h3>
							<p>To the right is a map of {this.props.event.venue}, it may be a good idea to check it out.</p>
						</div>
						<div ref="elem" className="col-8 venue-map">
							<img onClick={this.mousePos} src={this.props.event.venue_map}/>
							
						</div>
					</div>
					<br/>
					<br/>
				</div>
			)
		}
	}
}

export default EventMap