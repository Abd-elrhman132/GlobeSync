import PageNav from "../src/components/PageNav";
import styles from "./Product.module.css";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <div className="container">
        <PageNav />
        <section>
        <div>
          <h2>
            Enterprise-grade pricing.
            <br />
            Starting at $49/node.
          </h2>
          <p>
            Scale your global data operations with our flexible pricing plans. 
            Get unlimited data points, real-time syncing, and advanced 
            geospatial visualization for your entire enterprise.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
      </div>
    </main>
  );
}