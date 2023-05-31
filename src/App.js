import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './main/Main';
import Select from './student/select/Select';
import Detail from './student/detail/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/student/select' element={<Select />} />
          <Route path='/student/select/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
