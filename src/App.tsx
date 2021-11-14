import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

import './App.css';
import ScrollToTop from './components/scroll-to-top';
import HomePage from './pages/home/home.page'
import JobDetailPage from './pages/job-detail/job-detail.page';
import JobList from './pages/job-list/job-list.page';
import NotFound from './pages/not-found/not-found.page';
import EZHire from './pages/ez-hire/ez-hire.page';
import PostJob from './pages/post-job/post-job.page';
import {resetProgressBar} from './redux/actions/progress/progress.action';
import {getProfile, getProfileFailed} from './redux/actions/profile/profile.action';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if(token) {
      dispatch(getProfile(token));
    } else {
      dispatch(getProfileFailed());
    }
  },[])

  const progress = useSelector((state: any) => {
    return state.progressReducer.progress;
  });


  return (
    <Router>
      <ScrollToTop/>
      <LoadingBar
        color='#2F86A6'
        height={4}
        progress={progress}
        onLoaderFinished={() => {
          dispatch(resetProgressBar())
        }}
      />
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
