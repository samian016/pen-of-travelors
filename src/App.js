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
import Sitereview from './components/SiteReview/Sitereview';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Approval from './components/Approval/Approval';
import Compare from './components/Compare/Compare';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import AdminRoute from './components/Routes/AdminRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Nevigation></Nevigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>            
            </Route>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/approve">
              <Approval></Approval>
            </AdminRoute>
            <Route exact path="/compare/:id">
              <Compare></Compare>
            </Route>
            <PrivateRouter path="/reviewsite">
              <Sitereview></Sitereview>
            </PrivateRouter>
            
            <PrivateRouter path="/createpost">
              <CreatePost></CreatePost>
            </PrivateRouter>
            <UserRoute path="/signup" >
              <SignUp></SignUp>
            </UserRoute>
            <UserRoute path="/signin">
              <SignIn></SignIn>
            </UserRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


// 
//               

//               

//               