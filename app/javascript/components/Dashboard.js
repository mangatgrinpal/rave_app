import React from "react"

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<h1> Hello World </h1>
						<p> hello </p>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard