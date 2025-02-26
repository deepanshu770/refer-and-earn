import React, { useCallback, useState } from "react";
import "../styles/index.css";
import Modal from "../components/Model";
import Login from "./Login";

function App() {
  const [visible, setVisible] = useState(false); // Model Visible State
  const [loginMode, setLoginMode] = useState(true); // true -> Login , False -> Register
  const openModel = useCallback(() => {
    setVisible(true);
  }, []);
  const toggleMode = useCallback(() => {
   setLoginMode(state=>!state);
  }, []);
  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <>
      <Modal
        title={loginMode ? "Login" : "Register"}
        visible={visible}
        closeModal={closeModal}
      >
        <Login mode={loginMode} toggleMode={toggleMode} />
      </Modal>
      <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Refer Friends, Earn Rewards!
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Enter your friend's email to refer and get amazing rewards when
            they sign up.
          </p>

          <button
            onClick={openModel}
            className="bg-white text-blue-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Refer Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
