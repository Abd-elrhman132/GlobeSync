import { useNavigate } from "react-router-dom";
import Button from "../src/components/Button";
import PageNav from "../src/components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState, FormEvent } from "react";
import { useAuth } from "../src/contexts/FakeAuthContext";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.loginPage}>
      <div className="container">
        <PageNav />
        <div className={styles.loginWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.loginTitle}>Welcome Back</h2>
            <p className={styles.loginSubtitle}>Login to sync your adventures</p>
            
            <div className={styles.row}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="jack@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className={styles.actions}>
              <Button type="primary">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
