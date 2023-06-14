import { Routes, Route, } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';





const Shop = () => {
  return <h1>I am the Shop</h1>
  }

const App = () => {
 return ( 
  <Routes>
    <Route path='/' element={<Navigation />}> 
      <Route index element={<Home />}  />
      <Route path='/Shop' element= {<Shop />}/>
    </Route>  
  </Routes> 
 );
};

export default App;