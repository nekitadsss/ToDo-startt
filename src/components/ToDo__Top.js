import React from "react";
export default class ToDo__top extends React.Component {
  render() {
    return(
			<div className="websiteTodo__top">
				<div className="websiteTodo__items">
					<div className="websiteTodo__item">
						<svg viewBox="0 0 100 80" width="40" height="40">
							<rect width="50" height="5"></rect>
							<rect y="30" width="50" height="5"></rect>
							<rect y="60" width="50" height="5"></rect>
						</svg>
					</div>
					<h3 className="websiteTodo__title">Website ToDo</h3>
				</div>
			</div>
		)
  }
}
