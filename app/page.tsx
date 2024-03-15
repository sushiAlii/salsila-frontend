import styles from "./page.module.css";
import { LoginButton } from "./components";

export default function Home() {
  return (
    <main className={styles.heroContent}>
      {/* <header>SALSILA HEADER</header> */}
      <section className={styles.section}>
        <div className={styles.loginContainer}>
          {/* <div>
            <h1>Welcome to Salsila!</h1>
            <p>Start making your own Salsila!</p>
          </div> */}

          <div>
            <h2>Login or Create an Account</h2>
            <p>Start making your own Salsila!</p>
          </div>

          <form className={styles.loginForm}>
            <div>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="text" name="email" />
            </div>

            <div>
              <label htmlFor="password">PASSWORD</label>
              <input type="password" name="password" />
            </div>

            <div>
              <LoginButton />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
