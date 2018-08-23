import React from "react"

class Meetup extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.setCurrentlySelectedMeetup(this.props.meetup)
	}

	render () {
		return (
			<a onClick={this.handleClick} href="javascript:void(0)">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">{this.props.meetup.name}</h5>
					<small>{this.props.meetup.creator.username}</small>
				</div>
			</a>
		)
	}
}

export default Meetup
