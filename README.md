import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LanguageList from './components/LanguageList';
import TeacherList from './components/TeacherList';
import Schedule from './components/Schedule';

const App = () => (
  <Router>
    <div className="App bg-amber-50 dark:bg-amber-950 text-amber-900 dark:text-amber-100 min-h-screen">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/languages" component={LanguageList} />
        <Route path="/teachers/:language" component={TeacherList} />
        <Route path="/schedule/:teacherId" component={Schedule} />
      </Switch>
    </div>
  </Router>
);

export default App;
