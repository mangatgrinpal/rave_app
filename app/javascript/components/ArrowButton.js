import React from "react"

class ArrowButton extends React.Component {
	constructor(props) {
		super(props);	
	}

	render () {	
		if (this.props.showMore) {
			return (
				<div>
					<i onClick={this.props.getMoreEvents} className="fa fa-5x fa-angle-down"/>
				</div>
			)}
		else {
			return (
				<div/>
			)}
	}
}

export default ArrowButton