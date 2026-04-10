import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = document.querySelector('.hero-grid');
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      targetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, .dashboard-card');
      setIsHovering(!!isInteractive);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);
    hero.addEventListener('mouseover', handleElementHover);

    let rafId;
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${targetRef.current.x}px, ${targetRef.current.y}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      hero.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
      />
      <div
        ref={cursorRef}
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
      />
    </>
  );
}

function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPhase('enter'), 0),
      setTimeout(() => setPhase('reveal'), 800),
      setTimeout(() => setPhase('exit'), 2200),
      setTimeout(() => onComplete?.(), 3000)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${phase}`} aria-hidden={phase === 'exit'}>
      <div className="intro-glow" />
      <div className="intro-grid" />

      <div className="intro-content">
        <div className="intro-logo">
          <span className="logo-built">Built</span>
          <span className="logo-it">It</span>
          <span className="logo-dot">.</span>
        </div>

        <div className="intro-tagline">
          <span className="tagline-word">Own</span>
          <span className="tagline-word">Your</span>
          <span className="tagline-word">Digital</span>
          <span className="tagline-word accent">Future</span>
        </div>
      </div>

      <div className="intro-progress">
        <div className="progress-bar" />
        <div className="progress-glow" />
      </div>

      <div className="intro-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.15}s`,
              '--x': `${20 + Math.random() * 60}%`,
              '--y': `${20 + Math.random() * 60}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Portfolio", href: "/portfolio.html" },
  { label: "How it works", href: "#how-it-works", section: "how-it-works" },
  { label: "Pricing", href: "#pricing", section: "pricing" },
  { label: "Testimonials", href: "#testimonials", section: "testimonials" },
];

const comparisonRows = [
  {
    title: "Renting (The SaaS Trap)",
    theme: "negative",
    icon: "cross",
    items: [
      { label: "Monthly Subscription", value: "EGP 1,500+/mo" },
      { label: "Transaction Fees", value: "2.5% + EGP 10" },
      { label: "Delivery Day", value: "1-2 Weeks" },
    ],
    total: 54000,
    totalLabel: "3-Year Cost",
    suffix: "+",
  },
  {
    title: "BuiltIt. (True Asset)",
    theme: "positive",
    icon: "check",
    items: [
      { label: "One-Time Payment", value: "EGP 7,500" },
      { label: "Transaction Fees", value: "0% Fees" },
      { label: "Delivery Day", value: "One Day" },
    ],
    total: 7500,
    totalLabel: "3-Year Cost",
    suffix: "",
  },
];

const featureCards = [
  {
    title: "Zero Subscriptions",
    copy: "No monthly drain on your margins. One payment for a lifetime of uncompromised profit.",
    icon: "zero",
  },
  {
    title: "Full Source Control",
    copy: "Total ownership. We hand over the entire codebase. Host it anywhere, modify anything, scale without limits.",
    icon: "source",
  },
  {
    title: "SEO-First DNA",
    copy: "Built for Google dominance. Semantic HTML, lightning-quick speed, and structured data baked in for organic revenue growth.",
    icon: "seo",
  },
  {
    title: "MENA-Cloud Ready",
    copy: "Optimised for regional scale. Seamless integration with local payment gateways and low-latency cloud infrastructure.",
    icon: "mena",
  },
];

const serviceShowcaseCards = [
  {
    title: "E-Commerce Websites",
    copy: "Full online store with analytics, admin & product pages.",
    icon: "commerce",
    featured: true,
  },
  {
    title: "Landing Pages",
    copy: "One-page business site. Services, contact, brand story.",
    icon: "landing",
    featured: false,
  },
  {
    title: "Personal Portfolios",
    copy: "Showcase your work. Build your brand. Influence that lasts.",
    icon: "portfolio",
    featured: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose Your Store.",
    copy: "Select from 1 e-commerce or bi-directional Pro, tailored to your specific scale and volume needs.",
    featured: false,
  },
  {
    number: "02",
    title: "One-Day Delivery.",
    copy: "We build, launch, and optimise your store in 24 hours. From contract to live sales in a single day.",
    featured: false,
  },
  {
    number: "03",
    title: "Take the Keys.",
    copy: "Full handover. It's truly like owning a Pro flat. The source code is yours to keep, forever.",
    featured: true,
  },
];

const pricingPlans = [
  {
    badge: "MOST POPULAR",
    name: "E-commerce",
    price: "EGP 7,500",
    description: "Complete online store with inventory management.",
    features: ["Payment Gateway", "Inventory System", "Order Tracking"],
    featured: true,
  },
  {
    badge: "",
    name: "E-commerce Pro",
    price: "EGP 10,000",
    description: "Custom scaling architecture for high-volume stores.",
    features: ["Priority Support", "Custom CMS", "Multi-vendor Ready"],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "BuiltIt. delivered my store in 18 hours. I own everything, and I've already saved EGP 1.5k in monthly fees.",
    name: "Local Brand Owner",
    role: "With Lydia Market",
    initials: "LM",
  },
  {
    quote:
      "Simply the best investment I've made for my business. Pure ownership and very supportive onboarding.",
    name: "Local Brand Owner",
    role: "With Doaa El Farouk bazzar ",
    initials: "DE",
  },
  {
    quote:
      "The speed of execution is unmatched. The code is clean, the design is premium, and I never have to pay a subscription again.",
    name: "Hekaya Korean Reseller",
    role: "Brand",
    initials: "HK",
  },
];

const footerLinks = [
  { label: "Portfolio", href: "/portfolio.html" },
  { label: "Instagram", href: "https://www.instagram.com/builtit_eg?igsh=MXhnMDI4OTF2eHJ1ZQ==" },
  { label: "Twitter", href: "#top" },
  { label: "LinkedIn", href: "#top" },
  { label: "WhatsApp", href: "https://wa.me/201284744633" },
  { label: "Privacy", href: "#top" },
];

function Logo() {
  return (
    <span className="logo-wordmark" aria-label="BuiltIt.">
      <span className="logo-white">Built</span>
      <span className="logo-accent">It.</span>
    </span>
  );
}

function Icon({ type, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 12.2 10.9 14.6 15.8 9.7" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.2 9.2 14.8 14.8" />
          <path d="M14.8 9.2 9.2 14.8" />
        </svg>
      );
    case "zero":
      return (
        <svg {...common}>
          <path d="M6 18c1.8-4.8 4.8-7.2 12-12" />
          <circle cx="17.5" cy="6.5" r="3.5" />
          <path d="M3.5 20.5h17" />
        </svg>
      );
    case "source":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case "seo":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-3.5-3.5" />
          <path d="M11 8v3l2 2" />
        </svg>
      );
    case "mena":
      return (
        <svg {...common}>
          <path d="M12 3c4.8 0 8.5 3.9 8.5 8.8 0 6-8.5 9.9-8.5 9.9S3.5 17.8 3.5 11.8C3.5 6.9 7.2 3 12 3Z" />
          <circle cx="12" cy="11.5" r="2.8" />
        </svg>
      );
    case "commerce":
      return (
        <svg {...common}>
          <path d="M3.5 5.5H6l1.7 8.1a1 1 0 0 0 1 .8h8.5a1 1 0 0 0 1-.8l1.3-5.8H7.2" />
          <path d="M9 5.5V3.5h10.5" />
          <circle cx="10.2" cy="18.4" r="1.4" />
          <circle cx="16.8" cy="18.4" r="1.4" />
        </svg>
      );
    case "landing":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="14.5" rx="2.5" />
          <rect x="6.5" y="7.5" width="4.6" height="5.4" rx="1" />
          <path d="M13.7 8.2H17.8" />
          <path d="M13.7 11.1H17.8" />
          <path d="M6.5 15.8H17.8" />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...common}>
          <path d="M7.2 7.4h10.6a2.2 2.2 0 0 1 2.2 2.2v7a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.6v-7a2.2 2.2 0 0 1 2.2-2.2Z" />
          <path d="M8.8 4.7h8a2.2 2.2 0 0 1 2.2 2.2" />
          <path d="M10.8 2.2h5.8a2.2 2.2 0 0 1 2.2 2.2" />
          <path d="M8.3 12h4.2" />
          <path d="M8.3 15.2h2.8" />
        </svg>
      );
    default:
      return null;
  }
}

function CountUpStat({ value, suffix }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) {
      return undefined;
    }

    let animationFrame = 0;
    const startTime = performance.now();
    const duration = 1700;

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value]);

  return (
    <span ref={ref}>
      EGP {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const trackedSections = ["testimonials", "pricing", "how-it-works"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const marker = window.scrollY + 180;
      let nextActive = null;

      for (const sectionId of trackedSections) {
        const section = document.getElementById(sectionId);

        if (section && marker >= section.offsetTop) {
          nextActive = sectionId;
          break;
        }
      }

      setActiveSection((current) =>
        current === nextActive ? current : nextActive
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -32px 0px",
      }
    );

    revealNodes.forEach((node, index) => {
      node.style.setProperty("--delay", `${index * 60}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [introDone]);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleNavClick = (section) => {
    setMobileOpen(false);
    setActiveSection(section ?? null);
  };

  return (
    <>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <div className="page">
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#top">
          <Logo />
        </a>

        <button
          className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${mobileOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.section ? "active" : undefined}
              onClick={() => handleNavClick(link.section)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#pricing" onClick={() => handleNavClick("pricing")}>
          Get Started
        </a>
      </header>

      <main className="main-content" id="top">
        <section className="hero-grid" data-reveal>
          <CustomCursor />
          <div className="hero-copy">
            <p className="section-label">THE OBSIDIAN ARCHITECT</p>
            <h1 className="hero-title">
              <span>Pay once.</span>
              <span>
                Sell <em>forever.</em>
              </span>
            </h1>
            <p className="hero-subtitle">Your store. Not a rental.</p>
            <p className="hero-body">
              Get your business online today with zero subscriptions and 1-day
              delivery. Full ownership at handover. No recurring fees, no
              platform lock-in.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#pricing">
                Launch Today
              </a>
              <a className="button button-secondary" href="#pricing">
                View Pricing
              </a>
            </div>
          </div>

          <aside className="dashboard-card" aria-label="Revenue dashboard mockup">
            <div className="dashboard-top">
              <div>
                <p className="dashboard-label">LAST 4</p>
                <h2 className="dashboard-value">$12,450.00</h2>
              </div>
              <span className="dashboard-chip">Revenue</span>
            </div>

            <div className="dashboard-chart">
              <div className="chart-column">
                <span />
                <small>W1</small>
              </div>
              <div className="chart-column">
                <span />
                <small>W2</small>
              </div>
              <div className="chart-column">
                <span />
                <small>W3</small>
              </div>
              <div className="chart-column is-tall">
                <span />
                <small>W4</small>
              </div>
            </div>

            <div className="dashboard-metrics">
              <div>
                <span>Orders</span>
                <strong>128</strong>
              </div>
              <div>
                <span>AOV</span>
                <strong>$97</strong>
              </div>
              <div>
                <span>Conv.</span>
                <strong>4.8%</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="content-section service-showcase-section" data-reveal>
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">WHAT WE BUILD</p>
              <h2>
                Same services.
                <br />
                Better <span className="accent-text">presentation.</span>
              </h2>
            </div>
            <p className="section-sidecopy">
              The same offers from your reference, rebuilt as real React
              components with cleaner spacing, stronger outlines, and a more
              premium visual system.
            </p>
          </div>

          <div
            className="service-showcase-shell"
            aria-label="BuiltIt service categories"
          >
            <div className="service-showcase-track" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="service-card-row">
              {serviceShowcaseCards.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-card-icon">
                    <Icon type={service.icon} size={34} />
                  </span>
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" data-reveal>
          <div className="section-heading">
            <p className="section-label">THE CALCULUS OF OWNERSHIP</p>
            <h2>Stop Renting Your Business</h2>
          </div>

          <div className="comparison-grid">
            {comparisonRows.map((card) => (
              <article
                key={card.title}
                className={`comparison-card ${card.theme === "positive" ? "is-positive" : "is-negative"}`}
              >
                <div className="comparison-header">
                  <span className={`comparison-icon ${card.theme}`}>
                    <Icon type={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                </div>

                <div className="comparison-body">
                  {card.items.map((item) => (
                    <div className="comparison-row" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="comparison-total">
                  <span>{card.totalLabel}</span>
                  <strong>
                    <CountUpStat value={card.total} suffix={card.suffix} />
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" data-reveal>
          <div className="section-heading">
            <p className="section-label">ENGINEERED FOR PERFORMANCE</p>
            <h2>
              Built for <span className="accent-text">Superiority.</span>
            </h2>
          </div>

          <div className="features-grid">
            {featureCards.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">
                  <Icon type={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="how-it-works" data-reveal>
          <div className="section-heading section-heading-centered">
            <p className="section-label">THE PROCESS</p>
            <h2>
              The Path to <span className="accent-text">Ownership.</span>
            </h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`process-card ${step.featured ? "is-featured" : ""}`}
              >
                <span className="process-watermark">{step.number}</span>
                <div className="process-content">
                  <span className="process-step">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="pricing" data-reveal>
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">FIXED PRICING</p>
              <h2>
                One Invoice.
                <br />
                <span className="accent-text">Unlimited Potential.</span>
              </h2>
            </div>
            <p className="section-sidecopy">
              No subscriptions. No lock-in. 1-day delivery. Full ownership at
              handover.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                className={`pricing-card ${plan.featured ? "is-featured" : ""}`}
                key={plan.name}
              >
                <div className="pricing-top">
                  {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">{plan.price}</div>
                  <p>{plan.description}</p>
                </div>

                <ul className="pricing-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="list-check">
                        <Icon type="check" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className={`button ${plan.featured ? "button-primary" : "button-secondary"} button-block`}
                  href="#cta"
                >
                  Select Plan
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="testimonials" data-reveal>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <span className="quote-mark">"</span>
                <p>{item.quote}</p>
                <div className="testimonial-person">
                  <span className="avatar">{item.initials}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" id="cta" data-reveal>
          <h2>
            Same-day setup.
            <br />
            Same-day sales.
          </h2>
          <p>
            Stop paying for permission to run your business. Join 200+ founders
            who own their digital future with BuiltIt.
          </p>
          <a className="button button-primary final-cta-button" href="https://wa.me/201284744633" target="_blank" rel="noopener noreferrer">
            Launch My Business
          </a>
        </section>
      </main>

      <footer className="site-footer" data-reveal>
        <div className="footer-top">
          <a className="logo" href="#top">
            <Logo />
          </a>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span className="secure-badge">VERIFIED SECURE</span>
        </div>

        <p className="footer-bottom">
          Copyright 2026 BuiltIt. All rights reserved. Built for founders who
          refuse platform lock-in.
        </p>
      </footer>
    </div>
    </>
  );
}

export default App;
