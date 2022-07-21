import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';

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
            </Switch>
        </div>
        

      </div>
    </Router>
  );
}

export default App;
