"use client";

import React from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

const LoginButton = () => {
  return (
    <>
      <button
        className={styles.loginButton}
        type="submit"
        onSubmit={() => console.log("DO LOGIN!")}
      >
        Log In
      </button>
      <span>
        Need an account? <Link href="/register">Register!</Link>
      </span>
    </>
  );
};

export default LoginButton;
