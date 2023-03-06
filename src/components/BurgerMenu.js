import React from "react";
export default class BurgerMenu extends React.Component{
	render(){
		return(
			<div className="BurgerMenu">
		<svg viewBox="0 0 100 80" width="40" height="40">
							<rect width="50" height="5"></rect>
							<rect y="30" width="50" height="5"></rect>
							<rect y="60" width="50" height="5"></rect>
						</svg></div>
		)
	}
}
