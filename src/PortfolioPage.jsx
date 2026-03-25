import { useEffect, useMemo, useRef, useState } from "react";

const projects = [
  {
    number: "001 / E-Commerce",
    clientLabel: "Client Name",
    clientName: "Fashion Retailer — Cairo",
    description:
      "Detailed outcome description illustrating the technical architecture and business impact achieved through our precision engineering process. Zero subscriptions, full ownership at handover.",
    tags: ["Next.js", "Supabase", "Stripe", "SEO"],
    reverse: false,
  },
  {
    number: "002 / Enterprise",
    clientLabel: "Client Name",
    clientName: "B2B Platform — Dubai",
    description:
      "Strategic integration of headless frameworks to maximise conversion rates and operational efficiency for high-value enterprise clients. Full source control delivered at handover.",
    tags: ["Headless CMS", "Multi-vendor", "API-first"],
    reverse: true,
  },
  {
    number: "003 / D2C Brand",
    clientLabel: "Client Name",
    clientName: "D2C Beauty Brand — Alexandria",
    description:
      "Zero-to-revenue in 24 hours. Full stack e-commerce with inventory management, order tracking, and a custom CMS — all owned outright by the client, no vendor lock-in.",
    tags: ["D2C", "Custom CMS", "Payments", "Analytics"],
    reverse: false,
  },
];

const tickerItems = [
  { text: "0% Ongoing Fees", highlight: false },
  { text: "Next.js Native", highlight: true },
  { text: "SEO Optimised", highlight: false },
  { text: "Full Source Control", highlight: true },
  { text: "MENA-Cloud Ready", highlight: false },
  { text: "1-Day Delivery", highlight: true },
  { text: "Zero Subscriptions", highlight: false },
  { text: "Headless Architecture", highlight: true },
  { text: "100% Ownership", highlight: false },
  { text: "Stripe Integrated", highlight: true },
];

const processSteps = [
  {
    stepName: "Discovery",
    title: "Understand the Terrain",
    description:
      "Dissecting business goals and identifying performance bottlenecks in your current infrastructure. No assumptions — pure forensic analysis.",
  },
  {
    stepName: "Architecture",
    title: "Build the System",
    description:
      "Developing a custom-tailored technical blueprint optimised for speed, scale, and long-term SEO dominance. Every component engineered, not assembled.",
  },
  {
    stepName: "Handover",
    title: "Take Full Ownership",
    description:
      "Seamless deployment and team training. We hand over the keys to a high-speed revenue engine. The source code, the data, the domain — yours forever.",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "LinkedIn",
  "Instagram",
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 7h8M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <>
      Buillt<span>.</span>
    </>
  );
}

function formatRevenue(value) {
  const safeValue = Math.min(value, 42.8);
  const whole = Math.floor(safeValue);
  const decimal = Math.min(8, Math.floor((safeValue - whole) * 10));

  if (safeValue >= 42.8) {
    return {
      prefix: "EGP 42",
      suffix: ".8M+",
    };
  }

  return {
    prefix: `EGP ${whole}`,
    suffix: `.${decimal}M+`,
  };
}

function PortfolioPage() {
  const metricsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counters, setCounters] = useState({
    revenue: 0,
    speed: 0,
    seo: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const nodes = document.querySelectorAll(".fade-up");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const node = metricsRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersStarted) {
      return undefined;
    }

    let animationFrame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        revenue: 42.8 * eased,
        speed: 0.4 * eased,
        seo: 100 * eased,
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setCounters({
          revenue: 42.8,
          speed: 0.4,
          seo: 100,
        });
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [countersStarted]);

  const revenueDisplay = useMemo(
    () => formatRevenue(counters.revenue),
    [counters.revenue]
  );

  const speedDigit = Math.min(4, Math.floor(counters.speed * 10));
  const seoValue = Math.min(100, Math.floor(counters.seo));

  return (
    <div className="portfolio-react">
      <nav className={isScrolled ? "scrolled" : ""}>
        <a href="#top" className="nav-logo">
          <Logo />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#top" className="active">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#case-studies">Services</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
        </ul>

        <a href="#commission" className="nav-cta">
          Start Project
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="hero-label">Buillt. — Architectural Outcomes</p>
          <h1>
            <span className="hero-title-line hero-title-line--full">
              The Proof of
            </span>
            <span className="hero-title-line">
              Concept<span className="accent">.</span>
            </span>
          </h1>
          <p className="hero-sub">
            We don't build stores. We engineer digital infrastructure that
            commands high-value transactions through brutalist precision and
            headless performance.
          </p>
          <div className="hero-buttons">
            <a href="#case-studies" className="btn-primary">
              <span>View Dossier</span>
              <ArrowIcon />
            </a>
            <a href="#process" className="btn-outline">
              Our Method
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="mockup-bar">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-url">analytics.buillt.io/dashboard</div>
            </div>

            <div className="mockup-body">
              <div className="mockup-header">
                <div>
                  <div className="mockup-label">Revenue — This Quarter</div>
                  <div className="mockup-value">
                    $12,450<span>.00</span>
                  </div>
                </div>
                <div className="mockup-badge">+38.4%</div>
              </div>

              <div className="mockup-chart">
                <div className="bar h20" />
                <div className="bar h10" />
                <div className="bar h35" />
                <div className="bar h25" />
                <div className="bar h60" />
                <div className="bar h45" />
                <div className="bar h55" />
                <div className="bar h80" />
                <div className="bar h65" />
                <div className="bar h70" />
                <div className="bar h75" />
                <div className="bar h90" />
              </div>

              <div className="mockup-stats">
                <div className="mstat">
                  <div className="mstat-label">Orders</div>
                  <div className="mstat-val">847</div>
                </div>
                <div className="mstat">
                  <div className="mstat-label">Conversion</div>
                  <div className="mstat-val green">4.8%</div>
                </div>
                <div className="mstat">
                  <div className="mstat-label">Load Time</div>
                  <div className="mstat-val green">0.4s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="metrics-bar" ref={metricsRef}>
        <div className="metric fade-up">
          <div className="metric-label-top">Volume Growth</div>
          <div className="metric-value">
            {revenueDisplay.prefix}
            <span>{revenueDisplay.suffix}</span>
          </div>
          <div className="metric-desc">Generated for partners</div>
        </div>
        <div className="metric fade-up delay-1">
          <div className="metric-label-top">Performance Floor</div>
          <div className="metric-value">
            0<span>.{speedDigit}s</span>
          </div>
          <div className="metric-desc">Avg. load time (LCP)</div>
        </div>
        <div className="metric fade-up delay-2">
          <div className="metric-label-top">Authority Index</div>
          <div className="metric-value">
            {seoValue}
            <span>%</span>
          </div>
          <div className="metric-desc">Lighthouse SEO score</div>
        </div>
      </div>

      <section id="case-studies">
        <div className="case-studies-header">
          <div>
            <p className="section-label">Case Studies</p>
            <h2 className="section-title">
              Engineered
              <br />
              Success Stories<span className="accent">.</span>
            </h2>
          </div>
          <p className="case-studies-desc">
            A selection of high-performance infrastructures built for brands who
            demand zero compromise.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            className={`project-row fade-up ${project.reverse ? "reverse" : ""} ${
              index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
            }`}
            key={project.number}
          >
            <div className="project-preview">
              <span className="project-preview-label">Project Preview</span>
            </div>

            <div className="project-info">
              <div>
                <div className="project-number">{project.number}</div>
                <div className="project-title">Project Title</div>
              </div>
              <div>
                <div className="project-client-label">{project.clientLabel}</div>
                <div className="project-client-name">{project.clientName}</div>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#commission" className="project-link">
                View Case Study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>

      <div className="ticker-section">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div className="ticker-item" key={`${item.text}-${index}`}>
                <span className={`ticker-text ${item.highlight ? "highlight" : ""}`}>
                  {item.text}
                </span>
                <span className="ticker-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="process" className="process-section">
        <div className="process-layout">
          <div className="process-intro fade-up">
            <h2 className="section-title">
              The Process Blueprint<span className="accent">.</span>
            </h2>
            <p>
              Precision engineering requires a structured assault. No fluff, just
              results derived from architectural excellence.
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div
                className={`process-step fade-up ${
                  index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
                }`}
                key={step.stepName}
              >
                <div className="step-line" />
                <div className="step-number">{`0${index + 1}`}</div>
                <div className="step-name">{step.stepName}</div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commission" className="cta-section">
        <h2 className="section-title fade-up">
          Commission Your
          <br />
          Masterpiece<span className="accent">.</span>
        </h2>
        <p className="cta-sub fade-up delay-1">
          No Subscriptions. Just Engineering. Secure your Q4 development slot
          before the window closes.
        </p>
        <a href="mailto:hello@buillt.io" className="btn-cta fade-up delay-2">
          <span>Initiate Protocol</span>
          <span className="lightning">⚡</span>
        </a>
      </section>

      <footer>
        <a href="#top" className="footer-logo">
          <Logo />
        </a>
        <ul className="footer-links">
          {footerLinks.map((link) => (
            <li key={link}>
              <a href="#top">{link}</a>
            </li>
          ))}
        </ul>
        <div className="footer-secure">Verified Secure</div>
        <div className="footer-copy">
          © 2025 Buillt. Global Architecture. All rights reserved. — Engineered
          for Permanence.
        </div>
      </footer>
    </div>
  );
}

export default PortfolioPage;
