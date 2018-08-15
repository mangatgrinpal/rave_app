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
			<div className="row meetup-list">
				<div className="col">
					<a onClick={this.handleClick} href="javascript:void(0)">{this.props.meetup.name}</a>
				</div>
				<div className="col">
					{this.props.meetup.user.username}
				</div>
			</div>
		)
	}
}

export default Meetup