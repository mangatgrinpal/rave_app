import React from "react"
import EventForm from "./EventForm"

class EventModal extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Enter RaveMeet Details</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <EventForm eventIndexUrl={this.props.eventIndexUrl}/>
			    </div>
			  </div>
			</div>
		);
	}
}

export default EventModal