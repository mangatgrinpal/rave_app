import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
    	<div className="container">
        <div className="row justify-content-end">
          <div className="col-4">
    	      <React.Fragment>
    	        Greeting: {this.props.greeting}
    	      </React.Fragment>
          </div>
        </div>
	    </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
