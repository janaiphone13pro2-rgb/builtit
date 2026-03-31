import { useEffect, useMemo, useRef, useState } from "react";
import "./showcase.css";
import { ZekryWayShowcase } from "./ZekryWayShowcase";

const projects = [
  {
    number: "001 / Dashboard",
    title: "Feel Free to Control Your Website",
    clientLabel: "Why It Matters",
    clientName: "Everything Is Customizable",
    description:
      "Control every picture and section on your website directly from your mobile with a very friendly dashboard built for fast, simple updates.",
    tags: [
      "Mobile Control",
      "Image Updates",
      "Custom Sections",
      "Friendly Dashboard",
    ],
    image: "/image.png",
    imageAlt: "Builtit admin dashboard settings",
    previewLabel: "Admin Dashboard",
    ctaLabel: "Explore Feature",
    reverse: false,
  },
  {
    number: "002 / Orders",
    title: "Track Every Order Status",
    clientLabel: "What You Can Do",
    clientName: "WhatsApp Updates, Shipping, and Printing",
    description:
      "Track all your order statuses, send your clients WhatsApp updates from one button, keep them up to date with their order status, link your shipping company, and print the airway bill with one click.",
    tags: ["Order Tracking", "WhatsApp", "Shipping Link", "Airway Bill"],
    image: "/image2.png",
    imageAlt: "Builtit orders dashboard with status controls",
    previewLabel: "Orders Dashboard",
    ctaLabel: "Explore Feature",
    reverse: true,
  },
  {
    number: "003 / Analytics",
    title: "Real-Time Analytics",
    clientLabel: "What You Get",
    clientName: "Live Users and Full Features",
    description:
      "See real-time analytics, monitor how many users are live on your website, and access all features with no subscriptions.",
    tags: ["Real-Time Analytics", "Live Users", "Full Features", "No Subscriptions"],
    image: "/image3.png",
    imageAlt: "Builtit analytics dashboard overview",
    previewLabel: "Analytics Dashboard",
    ctaLabel: "Explore Feature",
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
  { label: "Privacy Policy", href: "#top" },
  { label: "Terms of Service", href: "#top" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/builtitnet/posts/?feedView=all",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/builtit_eg?igsh=MXhnMDI4OTF2eHJ1ZQ==",
  },
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

function HorizontalSlider() {
  const slides = [
    { src: '/photo1.png', alt: 'Dashboard', label: 'Dashboard' },
    { src: '/photo2.png', alt: 'Products', label: 'Products' },
    { src: '/photo3.png', alt: 'Orders', label: 'Orders' }
  ];

  return (
    <>
      <div className="showcase-gallery">
        {slides.map((slide, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-card">
              <img src={slide.src} alt={slide.alt} />
              <div className="gallery-label">{slide.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-hint">
        <span>Swipe or drag to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );
}

function PortfolioPage() {
  const metricsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counters, setCounters] = useState({
    brands: 0,
    roi: 0,
    support: 0,
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
        brands: 25 * eased,
        roi: 200 * eased,
        support: 24 * eased,
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setCounters({
          brands: 25,
          roi: 200,
          support: 24,
        });
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [countersStarted]);

  const brandsValue = Math.min(25, Math.floor(counters.brands));
  const roiValue = Math.min(200, Math.floor(counters.roi));
  const supportValue = Math.min(24, Math.floor(counters.support));

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

      <ZekryWayShowcase />

      <div className="metrics-bar" ref={metricsRef}>
        <div className="metric fade-up">
          <div className="metric-label-top">Brands Working With Us</div>
          <div className="metric-value">
            +{brandsValue}
            <span>+</span>
          </div>
          <div className="metric-desc">Brands already working with us</div>
        </div>
        <div className="metric fade-up delay-1">
          <div className="metric-label-top">ROI Delivered</div>
          <div className="metric-value">
            +{roiValue}
            <span>K</span>
          </div>
          <div className="metric-desc">Made more than 200k ROI</div>
        </div>
        <div className="metric fade-up delay-2">
          <div className="metric-label-top">Unlimited Support</div>
          <div className="metric-value">
            {supportValue}
            <span>/7</span>
          </div>
          <div className="metric-desc">24/7 unlimited support</div>
        </div>
      </div>

      <section id="case-studies">
        <div className="case-studies-header">
          <div>
            <p className="section-label">Features</p>
            <h2 className="section-title">
              That Will Change
              <br />
              Your Brand<span className="accent">.</span>
            </h2>
          </div>
          <p className="case-studies-desc">
            A set of high-impact features designed to elevate perception,
            strengthen trust, and move your brand forward.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            className={`project-row fade-up ${project.reverse ? "reverse" : ""} ${
              index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
            }`}
            key={project.number}
          >
            <div
              className={`project-preview${project.image ? " has-image" : ""}`}
            >
              {project.image ? (
                <img
                  className="project-preview-image"
                  src={project.image}
                  alt={project.imageAlt || project.title}
                />
              ) : null}
              <span className="project-preview-label">
                {project.previewLabel || "Project Preview"}
              </span>
            </div>

            <div className="project-info">
              <div>
                <div className="project-number">{project.number}</div>
                <div className="project-title">{project.title}</div>
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
                {project.ctaLabel || "View Feature"}
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
          <span className="accent">Masterpiece</span><span className="accent">.</span>
        </h2>
        <p className="cta-sub fade-up delay-1">
          No Subscriptions. Just Engineering. Secure your Q4 development slot
          before the window closes.
        </p>
        <a
          href="https://wa.me/201284744633"
          target="_blank"
          rel="noreferrer"
          className="btn-cta fade-up delay-2"
        >
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
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
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
