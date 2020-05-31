import React from 'react';
import { Route, Switch} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import MyCoursesPage from './pages/MyCoursesPage';
import EnrolmentsPage from './pages/EnrolmentsPage';
import CreateCoursePage from './pages/CreateCoursePage';
import Monetization from './pages/Monetization';
import LiveWatcher from './LiveWatcher'
import LiveStream from './LiveStream';
import CoursePage from './pages/CoursePage';


class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/mycourses' component={MyCoursesPage} />
        <Route path='/enroledcourses' component={EnrolmentsPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/enroledcourse' component={CoursePage} type="enroled" />
        {/* <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} /> */}
        <Route path='/createcourse' exact={true} component={CreateCoursePage} />
        <Route path='/createcourse/done' component={Monetization} />
        <Route path='/watchlive' component={LiveWatcher} />
        <Route path='/streamlive' component={LiveStream} />
      </Switch>
    );
  }
}

export default AppRoutes;
