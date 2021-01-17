import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Header from './components/Header/Header'
import Services from './pages/Services/Services'
import Reports from './pages/Reports/Reports'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route
       exact
       path='/'
       component={Home}
      />
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
        <Route
       exact
       path='/services'
       component={Services}
      />
        <Route
       exact
       path='/services/:id/reports'
       component={Reports}
      />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
