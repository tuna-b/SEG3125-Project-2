import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Store from './Store';
import Genre from './Genre';
import Games from './Games';
import Write from './Write';
import View from './View';

function App() {
  return (
    <Router>
      <div className='App'>
        <Bar></Bar>
        <div className="content">
          <Switch>
              <Route exact path='/'>
                <Homepage></Homepage>
              </Route>

              <Route exact path='/store'>
                <Store></Store>
              </Route>

              <Route exact path='/about'>

              </Route>

              <Route exact path='/forum/:id'>
                <Write></Write>
              </Route>

              <Route exact path='/view/:id'>
                <View></View>
              </Route>

              <Route exact path='/forum/'>
                <Write></Write>
              </Route>

              <Route exact path='/games/:id'>
                <Games></Games>
              </Route>

              <Route path='/:genre'>
                <Genre></Genre>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
