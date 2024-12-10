import './App.css';
import {BrowserRouter , Route,Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/projects" exact element={<Projects/>} />
          <Route path="/skills" exact element={<Skills/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
