import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './App.css';
import ScrollToTop from './components/scroll-to-top';
import HomePage from './pages/home/home.page'
import JobDetailPage from './pages/job-detail/job-detail.page';
import JobList from './pages/job-list/job-list.page';
import NotFound from './pages/not-found/not-found.page';
import EZHire from './pages/ez-hire/ez-hire.page';
import PostJob from './pages/post-job/post-job.page';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
        <div className="background-color-common">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/job-list' component={JobList} />
            <Route path='/job-detail' component={JobDetailPage} />
            <Route path='/ez-hire' component={EZHire} />
            <Route path="/post-job" component={PostJob} />
            <Route path="*" component={NotFound} /  >
          </Switch>
        </div>
    </Router>
  );
}

export default App;
