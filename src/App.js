
import SearchBar from './components';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <SearchBar />
    <Switch>
      
      <Route path='/' />
    </Switch>
  </BrowserRouter >
  );
}



export default App;
