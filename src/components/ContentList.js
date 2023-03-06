import React from "react";
import bord from '../images/delete_cart.svg'
export default class ContentList extends React.Component{
	render(){
		return(
						<li className="content__item">Сделать видео
							<span className="websiteTodo__content-delete">
								<img className="websiteTodo__deletee" src={bord} alt="delete"/>
							</span>
						</li>
		)
	}
}