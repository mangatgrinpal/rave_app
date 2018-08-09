import React from "react"

class Meetup extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="row meetup-list">
				<div className="col">
					<a onClick={this.props.meetUpInfo} href="javascript:void(0)">{this.props.meetup.name}</a>
				</div>
				<div className="col">
					{this.props.meetup.user.username}
				</div>
			</div>
		)
	}
}

export default Meetup