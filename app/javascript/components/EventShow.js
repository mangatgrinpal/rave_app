import React from "react"
import EventMap from "./EventMap"
import EventMeets from "./EventMeets"

class EventShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {

		return (
			<div className="container-fluid event">
				<br/>
				<br/>
				<div className="row">
					<div className="col show">
						<div className="card">
							<div className="card-body" style={{backgroundImage: "url(" + this.props.event.poster +")"}}>
								<div className="card-title date">
									<div className="center">
										<h5>{this.props.monthDate}</h5>
										<h5>{this.props.year}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col details">
						<div className="row info-main">
							<div className="col">
								<h5>{this.props.event.name}</h5>
								<p>{this.props.event.venue}</p>
								<p>{this.props.event.location}, CA</p>
							</div>
						</div>
						<div className="row description">
							<div className="col">
								<p>***Add Description Column to model***</p>
								<p>Lorem ipsum dolor amet skateboard wolf lyft, humblebrag shaman four dollar toast DIY iceland. Jianbing yr la croix irony butcher bespoke vexillologist blog artisan palo santo. Lomo cold-pressed godard hexagon chartreuse pok pok crucifix +1 mumblecore letterpress tilde. Etsy blue bottle occupy, bespoke hashtag vexillologist glossier keffiyeh letterpress intelligentsia fingerstache scenester.

Gastropub hell of taiyaki ramps, hammock shaman 90's single-origin coffee palo santo. Cred poutine banjo ennui marfa banh mi venmo cloud bread viral scenester kombucha retro shaman. Brunch gochujang prism cardigan edison bulb. Shaman listicle photo booth, plaid swag vegan DIY bespoke echo park sriracha kitsch. Jean shorts bicycle rights fixie, bespoke shoreditch affogato PBR&B locavore palo santo succulents coloring book meggings. Tousled microdosing godard af forage chambray. Selvage helvetica flannel listicle.

Biodiesel wayfarers tbh man bun umami. Meditation freegan slow-carb, waistcoat williamsburg mustache typewriter heirloom authentic enamel pin tote bag fam farm-to-table vegan. IPhone blog vegan glossier, put a bird on it edison bulb sustainable lyft crucifix actually. Cold-pressed forage man bun, cloud bread godard tofu normcore leggings lyft plaid XOXO try-hard waistcoat. Mumblecore sriracha vexillologist ethical enamel pin banh mi umami, chambray affogato 8-bit.

Fashion axe tacos jianbing farm-to-table +1, everyday carry franzen plaid. Swag echo park fashion axe taiyaki bespoke roof party. Kinfolk everyday carry blog mlkshk small batch iceland jean shorts thundercats yr vegan echo park selfies plaid la croix artisan. Sriracha master cleanse beard jianbing.

Taxidermy schlitz austin, vinyl keytar selfies salvia disrupt artisan iPhone. Disrupt kickstarter pok pok, taxidermy locavore freegan offal. Hell of tilde umami hammock. Williamsburg lo-fi glossier twee.
								</p>
							</div>
						</div>
						<br/>
						<div className="row meetuphandler">
							<div className="col center">
								<button className="btn btn-primary">See meetups my guy</button>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<EventMeets />
				<EventMap event={this.props.event}/>
				
			</div>
		)
	};
}

export default EventShow