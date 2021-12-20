import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
// import Sandbox from "./components/Sandbox/Sandbox";
import HomePage from "./pages/Homepage/Homepage";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Shop from "./pages/Shop/Shop";
import { auth, createUserProfileDocument } from "./Utils/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/hats" element={<HatsPage />} />
          <Route path="/login" element={<LoginRegister />} />
          {/* Add component Sandbox page for creating and styling new components */}
          {/* <Route path="/sandbox" element={<Sandbox />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
