import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../src/components/PageNav";
import Logo from "../src/components/Logo";

// ICON COMPONENTS
const MapIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
  </svg>
);

const JournalIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const SyncIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
    <path d="M17.5 19a3.5 3.5 0 1 1 0-7c.3 0 .6 0 .9.1a7 7 0 1 0-11.7-1.4A5 5 0 0 0 7 21h10.5" />
    <polyline points="13 13 15 15 13 17" />
    <path d="M9 15h6" />
  </svg>
);

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroImageOverlay} />
        <div className="container">
          <PageNav />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.badge}>New: 3D Map View released</div>
          <h1 className={styles.heroTitle}>
            Map your world.<br />
            <span className={styles.gradientText}>Sync your memories.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            GlobeSync is the ultimate travel companion. Track your footsteps 
            across the globe, document your experiences, and share your 
            journey with the world.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link to="/login" className="btn btn-primary">
              Start Tracking Free
            </Link>
            <a href="#features" className="btn btn-outline">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className={styles.trustedSection}>
        <div className="container">
          <p className={styles.trustedTitle}>Trusted by travelers from</p>
          <div className={styles.brandGrid}>
            <span>Lonely Planet</span>
            <span>National Geographic</span>
            <span>TripAdvisor</span>
            <span>Airbnb</span>
            <span>Expedia</span>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Countries Covered</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>Cities Tracked</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>500k</span>
              <span className={styles.statLabel}>Active Explorers</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Private & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="container section-padding">
        <div className={styles.sectionHeader}>
          <h2 className="heading-secondary">Everything you need to track your travels</h2>
          <p className={styles.sectionSubtitle}>Powerful features designed for the modern adventurer.</p>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><MapIcon /></div>
            <h3 className={styles.featureTitle}>Interactive Mapping</h3>
            <p className={styles.featureText}>
              A beautiful, responsive map that updates in real-time as you log 
              your travels. See your global footprint expand visually.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><JournalIcon /></div>
            <h3 className={styles.featureTitle}>Personal Journal</h3>
            <p className={styles.featureText}>
              Attach notes, dates, and memories to every pin. Keep a digital 
              diary of your life&apos;s greatest adventures safely stored.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><SyncIcon /></div>
            <h3 className={styles.featureTitle}>Access Everywhere</h3>
            <p className={styles.featureText}>
              Your data stays synced across all your devices. Never lose your 
              travel history, no matter where your journey takes you next.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className={styles.stepsSection}>
        <div className="container section-padding">
          <h2 className="heading-secondary">How it works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Pin Your Location</h3>
              <p className={styles.stepText}>
                Click on any city on the global map to mark where you&apos;ve been.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Add the Details</h3>
              <p className={styles.stepText}>
                Note down the dates, your favorite spots, and what made the trip special.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Build Your Map</h3>
              <p className={styles.stepText}>
                Watch your personalized world map grow and share it with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerLogoDesc}>
              <Logo />
              <p className={styles.footerDesc}>
                Making travel tracking simple and beautiful for adventurers worldwide.
              </p>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Product</h4>
              <ul className={styles.footerLinks}>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/product">Features</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Social</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.copyrightSection}>
            &copy; {new Date().getFullYear()} GlobeSync Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
