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
        <PageNav />
        
        <div className={styles.heroContent}>
          <div className={styles.badge}>New: Real-time Data Visualization released</div>
          <h1 className={styles.heroTitle}>
            Visualize your data.<br />
            <span className={styles.gradientText}>Sync your global insights.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            GlobeSync is the enterprise-grade analytics platform. Monitor your 
            global footprint, analyze regional performance, and optimize 
            your operations with real-time data sync.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link to="/login" className="btn btn-primary">
              Start Analyzing Now
            </Link>
            <a href="#features" className="btn btn-outline">
              View Platform Features
            </a>
          </div>
        </div>

        <a href="#trusted" className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </a>
      </section>

      {/* TRUSTED BY SECTION */}
      <section id="trusted" className={styles.trustedSection}>
        <div className="container">
          <p className={styles.trustedTitle}>Powering global analytics for</p>
          <div className={styles.brandGrid}>
            <span>Stripe</span>
            <span>Shopify</span>
            <span>Uber</span>
            <span>Slack</span>
            <span>Airbnb</span>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Global Hubs</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>Data Points</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50k</span>
              <span className={styles.statLabel}>Enterprise Users</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="container section-padding">
        <div className={styles.sectionHeader}>
          <h2 className="heading-secondary">Complete Global Operations Visibility</h2>
          <p className={styles.sectionSubtitle}>Advanced analytics tools designed for data-driven teams.</p>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><MapIcon /></div>
            <h3 className={styles.featureTitle}>Geospatial Intelligence</h3>
            <p className={styles.featureText}>
              Leverage dynamic mapping to visualize regional performance metrics
              in real-time across your entire global infrastructure.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><JournalIcon /></div>
            <h3 className={styles.featureTitle}>Integrated Audit Logs</h3>
            <p className={styles.featureText}>
              Maintain detailed records of every operational change. Track 
              historical performance and ensure compliance with automated logging.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}><SyncIcon /></div>
            <h3 className={styles.featureTitle}>Low-Latency Syncing</h3>
            <p className={styles.featureText}>
              Ensure all your data is synchronized across the world in milliseconds. 
              Make critical decisions based on the most current data available.
            </p>
          </div>
        </div>
      </section>

      {/* DATA PREVIEW SECTION */}
      <section className={styles.previewSection}>
        <div className="container">
          <div className={styles.previewGrid}>
            <div className={styles.previewContent}>
              <h2 className="heading-secondary" style={{ textAlign: "left" }}>
                Real-time visibility into your global operations
              </h2>
              <p className={styles.previewText}>
                Our intuitive dashboard gives you a bird&apos;s-eye view of your entire 
                infrastructure. Monitor traffic, identify bottlenecks, and 
                optimize performance with geospatial data that updates as it 
                happens.
              </p>
              <ul className={styles.previewList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Multi-region performance tracking
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Automated anomaly detection
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Customizable KPI visualization
                </li>
              </ul>
            </div>
            <div className={styles.previewImageContainer}>
              <div className={styles.dashboardMockup}>
                <div className={styles.mockupHeader}>
                  <div className={styles.dots}><span /><span /><span /></div>
                  <div className={styles.addressBar}>analytics.globesync.io</div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.globePlaceholder}>
                    <div className={styles.globeCircle} />
                    <div className={styles.pulsePoint} style={{ top: "30%", left: "40%" }} />
                    <div className={styles.pulsePoint} style={{ top: "50%", left: "70%" }} />
                    <div className={styles.pulsePoint} style={{ top: "20%", left: "60%" }} />
                  </div>
                  <div className={styles.sidebarMock}>
                    <div className={styles.mockItem} style={{ width: "80%" }} />
                    <div className={styles.mockItem} style={{ width: "60%" }} />
                    <div className={styles.mockItem} style={{ width: "70%" }} />
                  </div>
                </div>
              </div>
            </div>
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
              <h3 className={styles.stepTitle}>Connect Your Sources</h3>
              <p className={styles.stepText}>
                Integrate your existing data streams from any global region.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Analyze in Real-time</h3>
              <p className={styles.stepText}>
                Monitor KPIs and performance metrics on your personalized dashboard.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Scale Operations</h3>
              <p className={styles.stepText}>
                Use actionable insights to optimize your global business infrastructure.
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
                Advanced global data analytics and visualization for the modern enterprise.
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
