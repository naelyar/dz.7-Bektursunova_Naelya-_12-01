import './App.css';
import {Routes , Route} from "react-router-dom";
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FirstPage/>}/>
      <Route path="/second" element={<SecondPage/>}/>
      <Route path="/third" element={<ThirdPage/>}/>

    </Routes>

    </>
    
  );
}

export default App;
