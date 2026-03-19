import { Link } from "react-router-dom";
import PageNav from "../src/components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <div className="container">
        <PageNav />

        <header className={styles.hero}>
          <h1>Real-time Global Connectivity Platform</h1>
          <p>
            Effortlessly sync your global operations with powerful visualization
            and real-time insights for modern enterprises.
          </p>
          <div className={styles.cta}>
            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/app" className="btn btn-outline">
              View Demo
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </header>

        <section>
          <img
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
          <div>
            <h2>Precision Global Sync.</h2>
          <p>
            GlobeSync provides a unified interface for complex global data 
            streams. Our platform transforms raw data into actionable 
            geospatial insights, allowing your team to monitor 
            infrastructure health and performance in every region 
            simultaneously.
          </p>
          <p>
            With enterprise-grade security and sub-millisecond sync latency, 
            we ensure that your global operations are always visible, 
            consistent, and optimized for peak performance.
          </p>
        </div>
              </section>
            </div>
          </main>
      
  );
}
