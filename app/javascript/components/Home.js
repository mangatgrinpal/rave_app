import React from "react"
import Nav from "./Nav"
import EventList from "./EventList"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	
	

	render() {
		console.log(this.props)

		return (
			<div>
				<Nav/>
				<div className="row">
					<div className="col-4">
						<EventList events={this.props.events}/>
					</div>
					<h1>Hello World</h1>
				</div>
			</div>
		)
	};
}

export default Home