import './styles.css'
import bord from './images/delete_cart.svg'

function App(){
	return(
		<div className="App">
				<div className="websiteTodo">
		<div className="container">
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
			<div className="websiteTodo__content">
				<div className="content__items">
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
				</div>
				<button className="content__btn">+ New Task</button>
			</div>
		</div>
	</div>
</div>
	)
}

export default App;