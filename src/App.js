import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route
       exact
       path='/login'
       component={Login}
      />
      <Route
       exact
       path='/register'
       component={Register}
      />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
