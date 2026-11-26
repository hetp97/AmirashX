import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeIndianRupee,
  Building2,
  ChevronRight,
  Cloud,
  GraduationCap,
  Headphones,
  HeartPulse,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

const services = [
  {
    title: "Business Email & Workspace",
    graphTitle: "Email & Workspace",
    short: "Microsoft 365 · Google Workspace",
    description:
      "Set up and manage professional business email, Microsoft 365, Google Workspace and Zoho Workplace.",
    icon: Layers3,
  },
  {
    title: "Cloud Servers, Hosting & Backup",
    graphTitle: "Cloud & Backup",
    short: "Azure · AWS · Tally on Cloud",
    description:
      "Move your business applications and infrastructure to the cloud with hosting, backup and cost management solutions.",
    icon: Cloud,
  },
  {
    title: "Network, Wi-Fi & Firewall",
    graphTitle: "Network & Wi-Fi",
    short: "Office & plant connectivity",
    description:
      "Build secure and reliable connectivity across your offices, plants, branches and remote teams.",
    icon: Network,
  },
  {
    title: "Cybersecurity & Data Protection",
    graphTitle: "Cybersecurity",
    short: "Endpoint · Email · Recovery",
    description:
      "Protect your business systems, information and users with practical security and data protection solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Managed IT Support & AMC",
    graphTitle: "IT Support & AMC",
    short: "Helpdesk · On-site · Monitoring",
    description:
      "Keep your technology running smoothly with ongoing IT support, monitoring, maintenance and annual maintenance contracts.",
    icon: Headphones,
  },
];

const ecosystemPaths = [
  { path: "M 250 210 C 200 175 130 40 200 45", x: 200, y: 45 },
  { path: "M 250 210 C 310 180 360 100 300 110", x: 300, y: 110 },
  { path: "M 250 210 C 200 220 140 228 200 228", x: 200, y: 228 },
  { path: "M 250 210 C 310 240 360 295 300 295", x: 300, y: 295 },
  { path: "M 250 210 C 250 265 250 310 250 344", x: 250, y: 344 },
];

const approaches = [
  {
    title: "One Point of Contact",
    description:
      "Coordinate your IT requirements through a single point of contact, from planning to ongoing support.",
    icon: Users,
  },
  {
    title: "Recommendations, Not Brand Pushes",
    description:
      "Technology recommendations based on your requirements, not vendor affiliations or sales targets.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear proposals and quotations in rupees, so you understand what you're investing in.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Support Beyond Setup",
    description:
      "Our involvement doesn't stop at implementation. We help you maintain and manage your technology as your business grows.",
    icon: Headphones,
  },
];

const industries = [
  { title: "Manufacturing & Engineering", icon: Building2 },
  { title: "Hospitals & Healthcare", icon: HeartPulse },
  { title: "Educational Institutions", icon: GraduationCap },
  { title: "CA Firms & Professional Offices", icon: Building2 },
  { title: "Trading & Distribution", icon: Network },
  { title: "Growing Offices (10–200 people)", icon: Users },
];

function ArrowLink({ children, href, light = false }) {
  return (
    <a className={`arrow-link${light ? " arrow-link-light" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About Us", "#about"],
    ["Blogs", "#approach"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="AmirashX home">
          <img src="/logo-full.png" alt="AmirashX — IT Solutions you can count on" />
        </a>
        <nav className={`main-nav${menuOpen ? " main-nav-open" : ""}`} aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Talk to Experts <ArrowUpRight size={14} />
          </a>
        </nav>
        <a className="header-cta" href="#contact">
          Talk to Experts <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={27} />}
        </button>
      </div>
    </header>
  );
}

function StackPreview() {
  const [active, setActive] = useState(0);

  return (
    <div className="stack-preview">
      <div className="stack-heading">
        <Eyebrow light>One connected business</Eyebrow>
        <h2>Five layers. One connected system.</h2>
      </div>
      <div className="ecosystem-canvas">
        <svg
          className="ecosystem-wires"
          viewBox="0 0 500 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <circle className="ecosystem-orbit orbit-outer" cx="250" cy="210" r="142" />
          <circle className="ecosystem-orbit orbit-inner" cx="250" cy="210" r="111" />
          <circle className="ecosystem-orbit orbit-core" cx="250" cy="210" r="75" />
          <g className="ecosystem-links">
            {ecosystemPaths.map(({ path }, index) => (
              <path className="ecosystem-wire" d={path} key={`wire-${index}`} />
            ))}
          </g>
          <g>
            {ecosystemPaths.map(({ path }, index) => (
              <path
                className={`ecosystem-flow${active === index ? " is-active" : ""}`}
                d={path}
                key={`flow-${index}`}
              />
            ))}
          </g>
          <g className="ecosystem-beacons">
            {ecosystemPaths.map(({ x, y }, index) => (
              <circle
                className={active === index ? "beacon is-active" : "beacon"}
                cx={x}
                cy={y}
                key={`beacon-${index}`}
                r="3"
              />
            ))}
          </g>
        </svg>
        <div className="ecosystem-core">
          <span className="core-orbit core-orbit-wide" />
          <span className="core-orbit core-orbit-close" />
          <span className="core-badge">
            <img src="/logo-icon.png" alt="" />
          </span>
          <span className="core-brand">AmirashX</span>
          <span className="core-caption">BUSINESS IT HUB</span>
        </div>
        {services.map(({ title, graphTitle, short, icon: Icon }, index) => (
          <button
            className={`ecosystem-node node-${index + 1}${active === index ? " active" : ""}`}
            key={title}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            aria-label={`Layer 0${index + 1}: ${title}. ${short}`}
          >
            <span className="ecosystem-icon"><Icon size={18} strokeWidth={1.7} /></span>
            <span className="ecosystem-copy">
              <small className="ecosystem-layer">LAYER 0{index + 1}</small>
              <strong>{graphTitle}</strong>
              <span>{short}</span>
            </span>
            <span className="ecosystem-check" aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </button>
        ))}
      </div>
      <p className="active-layer">
        <span /> Layer 0{active + 1} — {services[active].title}
      </p>
      <a className="stack-more" href="#services">
        Explore the full stack <ArrowRight size={13} />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <Eyebrow light>Business IT Solutions | Vadodara & Gujarat</Eyebrow>
          <h1>
            Technology that
            <span>keeps your business moving.</span>
          </h1>
          <p>
            From cloud infrastructure and business email to network security and ongoing IT
            support, AmirashX helps growing businesses build and manage reliable technology
            environments. One point of contact for the technology your business depends on.
          </p>
          <div className="hero-actions">
            <a className="button button-orange" href="#services">
              Explore Our Services <ArrowRight size={16} />
            </a>
            <a className="button button-outline" href="#contact">
              Talk to Experts <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <StackPreview />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-pale" id="services">
      <div className="section-wrap">
        <div className="section-intro services-intro">
          <div>
            <Eyebrow>The AmirashX Stack</Eyebrow>
            <h2>Five Layers. One Point of IT Contact for You!</h2>
          </div>
          <p>
            We plan, implement, secure and support the technology that keeps your business
            running. Our services work together as one connected IT environment, tailored to
            your business needs.
          </p>
        </div>
        <div className="service-list">
          {services.map(({ title, description, icon: Icon }, index) => (
            <a className="service-row" href="#contact" key={title}>
              <div className="service-index">
                <span>0{index + 1}</span>
                <span className="service-icon"><Icon size={19} strokeWidth={1.6} /></span>
              </div>
              <div className="service-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowUpRight className="service-arrow" size={17} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <div className="services-more">
          <a className="button button-subtle" href="#contact">
            Explore All Services <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section-white" id="approach">
      <div className="section-wrap">
        <div className="approach-intro">
          <Eyebrow>A Different Approach to IT</Eyebrow>
          <h2>
            Practical Advice. Clear Costs.
            <span>Accountability.</span>
          </h2>
          <p>
            Choosing the right technology shouldn't be complicated. We make the process
            straightforward with an approach built around your business.
          </p>
        </div>
        <div className="approach-grid">
          {approaches.map(({ title, description, icon: Icon }) => (
            <article className="approach-card" key={title}>
              <span className="approach-icon"><Icon size={17} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="section-wrap industries-inner">
        <div className="industries-copy">
          <Eyebrow light>Industries We Support</Eyebrow>
          <h2>Technology That Grows With Your Business.</h2>
          <p>
            We work with growing businesses and institutions across Vadodara and Gujarat,
            understanding the different technology requirements of each. From manufacturing and
            engineering companies to hospitals, educational institutions, professional offices
            and trading businesses, we help organisations build dependable IT environments.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map(({ title, icon: Icon }) => (
            <div className="industry-card" key={title}>
              <span><Icon size={17} strokeWidth={1.6} /></span>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-white" id="about">
      <div className="section-wrap about-inner">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=85"
            alt="Enterprise IT leadership strategy session"
          />
          <div className="experience-badge">
            <strong>8+ Years</strong>
            <span>Fortune 500 Experience</span>
          </div>
        </div>
        <div className="about-copy">
          <Eyebrow>The Experience Behind AmirashX</Eyebrow>
          <h2>Built on Enterprise Experience, Focused on Your Business!</h2>
          <p>
            AmirashX brings together hands-on business understanding and experience gained
            across leading organisations. Our founder brings over 8 years of experience with
            Fortune 500 companies, including managing a $50M distribution portfolio at Ingram
            Micro and working in B2B enterprise sales at American Express. That experience
            shapes how we approach technology: understand the business first, recommend
            thoughtfully and take responsibility for getting things right.
          </p>
          <ArrowLink href="#contact">Get to Know Us</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
      <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
      <div className="contact-content">
        <Eyebrow light>Let's Talk</Eyebrow>
        <h2>Let's Get Your Business IT Right!</h2>
        <p>
          Whether you're setting up a new IT environment, moving to the cloud, strengthening
          security or looking for dependable ongoing support, let's discuss what your business
          needs.
        </p>
        <a className="button button-orange" href="mailto:hello@amirashx.com">
          Talk to Experts <ArrowUpRight size={16} />
        </a>
      </div>
      <ArrowDownRight className="contact-mark" size={70} strokeWidth={0.75} aria-hidden="true" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#home">
              <img src="/logo-icon.png" alt="AmirashX shield logo" />
              <span><strong>AmirashX</strong><small>IT Solutions you can count on!</small></span>
            </a>
            <p>
              We plan, implement, secure and support the technology that keeps your business
              running — one point of contact for the technology your business depends on.
            </p>
          </div>
          <div className="footer-column">
            <h3>The AmirashX Stack</h3>
            <ul>
              {services.map(({ title }) => (
                <li key={title}><a href="#services">{title}<ChevronRight size={13} /></a></li>
              ))}
            </ul>
          </div>
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>
            <ul>
              <li><a href="mailto:hello@amirashx.com">hello@amirashx.com</a></li>
              <li><a href="tel:+917738856746">+91 77388 56746</a></li>
              <li><span>Vadodara, Gujarat, India</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 AmirashX. All rights reserved.</p>
          <p>Vadodara · Gujarat · India</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href="https://wa.me/917738856746"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2A12.6 12.6 0 0 0 5.2 22.3L3.5 28.7l6.6-1.7A12.6 12.6 0 1 0 16 3.2Z" />
        <path d="M12.1 10.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.5 4 6.1 5.4 3 .1 3.6-.5 4.2-1.1.5-.6.7-1.2.7-1.7s-.2-.6-.6-.8l-2.1-1c-.3-.1-.6-.2-.8.2s-.9 1.1-1.1 1.3c-.2.2-.4.3-.7.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-.9-2.1Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
