
import SearchBar from './components/SearchBar';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.scss'
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter >
    <div className='App-wrapper'>

      <SearchBar />
      <Switch >
        <Route exact path='/' >
          <NotFound>
            Buscá lo que más te guste
          </NotFound>
        </Route>
        <Route path='/items/:id' component={ProductDetail} />
        <Route path='/items' component={ProductList} />
        <Route path='/404' >
          <NotFound>
            404 - No se encontró lo que estás buscando
          </NotFound>
        </Route>
        <Route path='*' >
          <Redirect to='/404'/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter >
  );
}



export default App;
