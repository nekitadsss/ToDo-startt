import './styles.css'
import ToDo__top from './components/ToDo__Top.js';
import Content__list from './components/Content__list.js';
import Button from './components/Button.js'

function App(){
	return(
		<div className="App">

			<div className='Wrapper'>
					<ToDo__top />
						<div className='websiteTodo__content'>
							<div className='content__items'>
								<Content__list />
							</div>
							<Button />
				</div>
			</div>
		</div>
	)
}

export default App;