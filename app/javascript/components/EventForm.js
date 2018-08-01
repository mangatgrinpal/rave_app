import React from "react"

class EventForm extends React.Component {
	constructor(props) {
		super(props);
		this.newEvent = this.newEvent.bind(this)
		this.state = {
			date: '',
			name: '',
			venue: '',
			location: 'San Francisco'
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
	
	newEvent(e) {
		e.preventDefault()
		$.ajax(this.props.eventIndexUrl, {
				data: {event: this.state},
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
			        	Date:<br/>
			        	<input 
			        		type="date" 
			        		name="date" 
			        		value={this.state.date} 
			        		onChange={this.handleInputChange}/>
			        	<br/>
			        	Name:<br/>
			        	<input 
			        		type="text" 
			        		name="name" 
			        		value={this.state.name} 
			        		onChange={this.handleInputChange} 
			        		placeholder="Event Name" />
			        	<br/>
			        	Venue:<br/>
			        	<input 
			        		type="text" 
			        		name="venue" 
			        		value={this.state.venue} 
			        		onChange={this.handleInputChange} 
			        		placeholder="Venue"/>
			        	<br/>
			        	Location:<br/>
			        	<select 
			        		value={this.state.value} 
			        		onChange={this.handleInputChange} 
			        		name="location">
			        		<option value="San Francisco">San Francisco</option>
			        		<option value="Los Angeles">Los Angeles</option>
			        	</select>
			        </label>
			      </form>
		      </div>
	      </div>
	      <div className="modal-footer">
	        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button type="button" onClick={this.newEvent} className="btn btn-primary">Submit</button>
	      </div>
      </div>
		)
	}
}

export default EventForm