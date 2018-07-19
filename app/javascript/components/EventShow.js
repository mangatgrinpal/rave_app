import React from "react"

class EventShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		console.log(this.props)

		return (
			<div className="container">
				<br/>
				<br/>
				<div className="row">
					<div className="col show">
						<div className="card">
							<div className="card-body">
								<h5> hello </h5>
							</div>
						</div>
					</div>
					<div className="col details">
						<h5>{this.props.event.name}</h5>
						<p>{this.props.event.venue}</p>
						<p>{this.props.event.location}</p>
					</div>
				</div>
				
			</div>
		)
	};
}

export default EventShow