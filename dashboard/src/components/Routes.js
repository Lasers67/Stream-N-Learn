import React from 'react';
import { Route, Switch} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import MyCoursesPage from './pages/MyCoursesPage';
import EnrolmentsPage from './pages/EnrolmentsPage';
import CreateCoursePage from './pages/CreateCoursePage';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/mycourses' component={MyCoursesPage} />
        <Route path='/enroledcourses' component={EnrolmentsPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/createcourse' component={CreateCoursePage} />
      </Switch>
    );
  }
}

export default AppRoutes;
