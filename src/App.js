
import SearchBar from './components/SearchBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.scss'

function App() {
  return (
    <BrowserRouter>
    <SearchBar />
    <div  className='App-wrapper'>

    <Switch>
      <Route path='/items/:id' component={ProductDetail} />
      <Route path='/items' component={ProductList} />
      <Route path='/' />
    </Switch>
    </div>
  </BrowserRouter >
  );
}



export default App;
