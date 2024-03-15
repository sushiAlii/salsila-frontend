"use client";

import React from "react";
import styles from "../page.module.css";

const LoginButton = () => {
  return (
    <>
      <button
        className={styles.loginButton}
        onSubmit={() => console.log("DO LOGIN!")}
      >
        Log In
      </button>
      <span>
        Need an account? <button>Register!</button>
      </span>
    </>
  );
};

export default LoginButton;
