import React from "react"

class MeetupForm extends React.Component {
	constructor(props) {
		super(props);
		this.newMeetup = this.newMeetup.bind(this)
		this.state = {
			name: '',
			description: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);

	}


	handleInputChange(meetup) {
		const target = meetup.target;
		const value = target.value;
		const name = target.name;


		this.setState({
			[name]: value
		});
	}
	
	newMeetup(e) {
		e.preventDefault()
		var self = this;
		$.ajax(self.props.meetupIndexUrl, {
				data: {meetup: self.state},
				dataType: "JSON",
				type: "POST",
				success: (data)=> {
					self.props.updateMeetupsState(data)
					$('#meetupModal').modal('toggle');
					self.setState({name: '', description: ''})
				},error: ()=> {
						if (self.props.isLoggedIn) {
							alert("Please enter a name.")
						}
						else {
							alert("Please log in to create meetups.")
						}
					}
		})
	}
	
	render () {
		return (
			<div>
				<div className="modal-body">
	        <div>
						<form id="meetup-form">
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
			        <label>
			        	Description:<br/> 
			        	<textarea  
			        		name="description"
			        		rows="10"
			        		cols="50" 
			        		value={this.state.description} 
			        		onChange={this.handleInputChange} 
			        		placeholder="Meetup Description" />
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