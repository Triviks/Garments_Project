import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './ProductsPage';
import Scrubs from './scrubs';
import Aprons from './aprons';
import Uniforms from './uniforms';
import Waistcoats from './waistcoats';
import Labcoats from './labcoats';
import Overcoats from './overcoats';

function App() {
  return (
    <>
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/productspage' element = {<Products />} />
        <Route path='/scrubs' element = {<Scrubs />} />
        <Route path='/aprons' element = {<Aprons />} />
        <Route path='/uniforms' element = {<Uniforms />} />
        <Route path='/waistcoats' element = {<Waistcoats />} />
        <Route path='/labcoats' element = {<Labcoats />} />
        <Route path='/overcoats' element = {<Overcoats />} />
      </Routes>
    </>
  );
}

export default App;
