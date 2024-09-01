import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LanguageList from './components/LanguageList';
import TeacherList from './components/TeacherList';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/languages" component={LanguageList} />
          <Route path="/teachers" component={TeacherList} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
