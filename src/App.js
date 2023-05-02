import { store } from './redux/store';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Cover from './Container/Cover/Cover';
import { Provider } from 'react-redux';
import Paly from './redux/play/Play'
function App() {
  
  return (
    <div className='App'>
    <Provider store={store}>
      <Router>
        <Routes>
         <Route path='/' element={<Cover/>} />
         <Route path='/play' element={<Paly />} />
        </Routes>
      </Router>
    </Provider>
      </div>
    
  );
}

export default App;
