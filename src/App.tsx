import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsListPage from '@Pages/MainPage';
import NewsItemPage from '@Pages/SecondPage';

const App:FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path = '/' element = {<NewsListPage/>}/>
				<Route path = '/:id' element = {<NewsItemPage/>} />
			</Routes>
		</BrowserRouter>
		
	);
}

export default App
