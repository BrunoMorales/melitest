
import SearchBar from './components/SearchBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
    <SearchBar />
    <Switch>
      <Route path='/items/:id' component={ProductDetail} />
      <Route path='/items' component={ProductList} />
      <Route path='/' />
    </Switch>
  </BrowserRouter >
  );
}



export default App;
