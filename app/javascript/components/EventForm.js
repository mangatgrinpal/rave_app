import React from "react"

class EventForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id="form">
				<form>
	        <label>
	        	Date:<br/>
	        	<input type="text" name="date" placeholder="YYYY-MM-DD"/>
	        	<br/>
	        	Name:<br/>
	        	<input type="text" name="name" placeholder="Event Name" />
	        	<br/>
	        	Venue:<br/>
	        	<input type="text" name="venue" placeholder="Venue"/>
	        	<br/>
	        	Location:<br/>
	        	<select name="location">
	        		<option value="San Francisco">San Francisco</option>
	        		<option value="Los Angeles">Los Angeles</option>
	        	</select>
	        </label>
	      </form>
      </div>
		)
	}
}

export default EventForm