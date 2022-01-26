import './App.css';
import Footer from './components/Footer/Footer';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import Nevigation from './components/Nevigation/Nevigation';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRouter from './components/Routes/PrivateRouter';
import Home from './components/Home/Home';
import UserRoute from './components/Routes/UserRoute';
import CreatePost from './components/CreatePost/CreatePost';
import { CircularProgress } from '@mui/material';
import Sitereview from './components/SiteReview/Sitereview';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Nevigation></Nevigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Sitereview></Sitereview>
              <MakeAdmin></MakeAdmin>
            </Route>
            <PrivateRouter path="/createpost">
              <CreatePost></CreatePost>
            </PrivateRouter>
            <UserRoute path="/signup" >
              <SignUp></SignUp>
            </UserRoute>
            <UserRoute path="/signin">
              <SignIn></SignIn>
            </UserRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
