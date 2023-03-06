import './styles.css'

// Components

import Button from './components/Button.js'
import BurgerMenu from './components/BurgerMenu.js'
import ContentTitle from './components/ContentTitle.js';
import ContentList from './components/ContentList.js';

function App(){
	return(
			<div className="App">
				<div className='TodoTop'>
					<BurgerMenu /> 
					<ContentTitle />
				</div>
					<div className='ToDoContent'>
						<div className='ToDoList'>
							<ul className='content__list'>
							<ContentList />
							<ContentList />
				      <ContentList />
				      <ContentList />
							</ul>
			</div>
			<Button />
		</div>
		</div>
	)
}

export default App;