import React from "react";
import bord from '../images/delete_cart.svg'
export default class content__list extends React.Component{
	render(){
		return(
			<ul className="content__list">
						<li className="content__item">Сделать видео
							<span className="websiteTodo__content-delete">
								<img className="websiteTodo__deletee" src={bord} alt="delete"/>
							</span>
						</li>
						<li className="content__item">Изучить scss
							<span className="websiteTodo__content-delete">
								<img className="websiteTodo__delete" src={bord} alt="delete"/>
							</span>
						</li>
						<li className="content__item">Закончить верстку
							<span className="websiteTodo__content-delete">
								<img className="websiteTodo__delete" src={bord} alt="delete"/>
							</span>
						</li>
						<li className="content__item">джаваскрипт тема
							<span className="websiteTodo__content-delete">
								<img className="websiteTodo__delete" src={bord} alt="delete"/>
							</span>
						</li>
					</ul>
		)
	}
}