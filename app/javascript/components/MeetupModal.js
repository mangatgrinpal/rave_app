import React from "react"
import MeetupForm from "./MeetupForm"

class MeetupModal extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="modal fade" id="meetupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Enter RaveMeet Details</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <MeetupForm meetupIndexUrl={this.props.meetupIndexUrl} />
			    </div>
			  </div>
			</div>
		);
	}
}

export default MeetupModal