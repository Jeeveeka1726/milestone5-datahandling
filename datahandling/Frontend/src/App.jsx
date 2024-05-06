import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Timer from './Components/Timer';
import Data from './Components/Data';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
          <Route path='/filter' element={<Data/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
