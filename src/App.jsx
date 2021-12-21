import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/Homepage";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Shop from "./pages/Shop/Shop";
import { auth, createUserProfileDocument } from "./Utils/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/hats" element={<HatsPage />} />
          <Route
            path="/login"
            element={
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <LoginRegister />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
