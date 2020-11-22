
import SearchBar from './components/SearchBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
    <SearchBar />
    <Switch>
      <Route path='/items' component={ProductList} />
      <Route path='/' />
    </Switch>
  </BrowserRouter >
  );
}



export default App;
