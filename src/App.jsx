import { auth, db } from "../firebase";

import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import SignUpScreen from "./screen/SignUpScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/signUp",
    element: <SignUpScreen />,
  },
]);

function App() {
  const [postDetails, setPostDetails] = useState("");

  useEffect(() => {
    // onAuthStateChanged(auth);

    onSnapshot(collection(db, "post"), (snapshot) => {
      setPostDetails(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      // if (userAuth) {
      //   dispatch(
      //     login({
      //       uid: userAuth.uid,
      //       token: userAuth.accessToken,
      //       email: userAuth.email,
      //     })
      //   );
      // } else {
      //   // dispatch(logout());
      // }
    });
    return unsubscribe;
  }, []);

  console.log(postDetails);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
