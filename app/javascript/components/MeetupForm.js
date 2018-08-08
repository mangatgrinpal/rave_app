import React from "react"

class MeetupForm extends React.Component {
	constructor(props) {
		super(props);
		this.newMeetup = this.newMeetup.bind(this)
		this.state = {
			name: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);

	}


	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;


		this.setState({
			[name]: value
		});
	}
	
	newMeetup(e) {
		e.preventDefault()
		$.ajax(this.props.meetupIndexUrl, {
				data: {meetup: this.state},
				dataType: "JSON",
				type: "POST",
				success: ()=> {
					alert("HIT!")
				}
		})
	}
	
	render () {
		return (
			<div>
				<div className="modal-body">
	        <div>
						<form>
			        <label>
			        	Name:<br/>
			        	<input 
			        		type="text" 
			        		name="name" 
			        		value={this.state.name} 
			        		onChange={this.handleInputChange} 
			        		placeholder="Meetup Name" />
			        	<br/>
			        </label>
			      </form>
		      </div>
	      </div>
	      <div className="modal-footer">
	        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button type="button" onClick={this.newMeetup} className="btn btn-primary">Submit</button>
	      </div>
      </div>
		)
	}
}

export default MeetupForm