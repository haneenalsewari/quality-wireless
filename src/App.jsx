import { useEffect, useState } from "react";
import "./App.css";

const mainServices = [
  {
    title: "Computer Repair",
    text: "Repairs for laptops, desktops, and MacBooks.",
    image: "/images/computer-repair.jpg",
  },
  {
    title: "Cell Phone Repair",
    text: "Fast help for common phone repair issues.",
    image: "/images/phone-repair.jpg",
  },
  {
    title: "Custom PC Builds & Upgrades",
    text: "Custom builds, upgrades, and performance help.",
    image: "/images/custom-pc.jpg",
  },
];

const computerServices = [
  "Software updates",
  "Component upgrades",
  "Custom gaming PC builds",
  "Blue screen / black screen repair",
  "Laptop screen repair",
  "Windows PC repair",
  "MacBook repair",
  "Charging port repair",
  "Keyboard replacement",
  "Data transfer",
  "Password removal",
  "Computer unlocking",
];

const phoneServices = [
  "Screen replacement",
  "Charging port repair",
  "Water damage help",
  "Phone unlocking",
  "Jailbreaking",
  "FRP removal",
  "Password removal",
];

const highlights = [
  "Serving St. Louis since 2006",
  "Same-day repairs available",
  "Walk-ins welcome",
  "14-day component warranty",
];

const reviews = [
  {
    name: "Brennetta Acoff",
    date: "3 weeks ago",
    text: "Quick, easy and very responsive.",
  },
  {
    name: "B B",
    date: "3 months ago",
    text: "Just got my phone back. It looks perfect, like I never even broke the back glass. He had it fixed in about 4 hours at such a good price. I highly recommend Quality Wireless.",
  },
  {
    name: "Joy Acres",
    date: "3 months ago",
    text: "Best in Saint Louis! They are always super accommodating and have been reasonable and reliable for years.",
  },
  {
    name: "Cate",
    date: "3 months ago",
    text: "Fixed my cracked phone screen in less than 10 minutes! Looks brand new!",
  },
  {
    name: "Safeer",
    date: "Edited 3 months ago",
    text: "Absolutely amazing service! My phone was fixed professionally and incredibly fast, and my computer is running like new. Their prices are unbeatable for this level of quality.",
  },
  {
    name: "Charles Dunn",
    date: "a year ago",
    text: "Awesome business. Very professional and courteous. Competitive prices with exceptional service. You can’t go wrong doing business with this establishment.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery-phone-repair.jpg",
    alt: "Phone repair workbench",
  },
  {
    src: "/images/gallery-phone-display.jpg",
    alt: "Phones displayed inside Quality Wireless",
  },
  {
    src: "/images/gallery-macbook-repair.jpg",
    alt: "MacBook repair work",
  },
  {
    src: "/images/gallery-store-counter.jpg",
    alt: "Store counter inside Quality Wireless",
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.1A4.9 4.9 0 1 1 12 16.9a4.9 4.9 0 0 1 0-9.8Zm0 2A2.9 2.9 0 1 0 12 14.9a2.9 2.9 0 0 0 0-5.8Zm5.1-2.35a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.4 22v-8.7h2.9l.45-3.4H13.4V7.75c0-.98.27-1.65 1.68-1.65h1.8V3.05A24.4 24.4 0 0 0 14.25 2c-2.6 0-4.38 1.58-4.38 4.5v2.5H6.93v3.4h2.94V22h3.53Z" />
    </svg>
  );
}

function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(reviewTimer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[currentReview];

  return (
    <section className="reviews-section">
      <div className="reviews-heading reveal">
        <p className="eyebrow">5-star reviews</p>
        <h2>Trusted by local customers.</h2>
        <p>
          Real 5-star reviews from customers who visited Quality Wireless for
          phone, computer, and device repair.
        </p>
      </div>

      <div className="review-carousel reveal delay-one">
        <button
          className="review-arrow"
          type="button"
          onClick={previousReview}
          aria-label="Previous review"
        >
          ←
        </button>

        <article className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">“{review.text}”</p>

          <div className="review-footer">
            <strong>{review.name}</strong>
            <span>{review.date}</span>
          </div>
        </article>

        <button
          className="review-arrow"
          type="button"
          onClick={nextReview}
          aria-label="Next review"
        >
          →
        </button>
      </div>

      <div className="review-dots reveal">
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            className={index === currentReview ? "review-dot active" : "review-dot"}
            onClick={() => setCurrentReview(index)}
            aria-label={`Show review ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="privacy-section">
      <div className="privacy-card reveal">
        <div>
          <p className="eyebrow">Privacy Policy</p>
          <h2>How information is used.</h2>
          <p>
            This section explains how basic contact information may be used when
            visitors contact Quality Wireless or submit a website request.
          </p>
        </div>

        <button
          type="button"
          className="privacy-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Privacy Policy" : "View Privacy Policy"}
        </button>

        {isOpen && (
          <div className="privacy-content">
            <p>
              Quality Wireless may collect basic contact information when
              visitors call the shop, submit a form, or contact the business
              through the website. This may include your name, phone number,
              email address, business name, and message details.
            </p>

            <p>
              Information submitted through the website is used only to respond
              to questions, repair requests, quote requests, or website design
              inquiries. Quality Wireless does not sell personal information.
            </p>

            <p>
              This website may use third-party tools such as Formspree, Google
              Analytics, Google Search Console, or Google Ads to help manage form
              submissions, understand website traffic, and improve advertising.
              These services may collect basic usage data according to their own
              privacy policies.
            </p>

            <p>
              For repair questions, call Quality Wireless at{" "}
              <a href="tel:3142560719">(314) 256-0719</a>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function trackEvent(eventName, eventDetails = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...eventDetails,
      transport_type: "beacon",
    });
  }
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="logo">
          <img src="/favicon.png" alt="Quality Wireless logo" className="logo-image" />

          <div>
            <span className="logo-title">Quality Wireless</span>
            <span className="logo-subtitle">Phone • Computer • PC Repair</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#warranty">Warranty</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="tel:3142560719"
          className="nav-call"
          onClick={() =>
            trackEvent("call_click", {
              event_category: "lead",
              event_label: "Header Call Now",
            })
          }
        >
          Call Now
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content reveal">
          <p className="eyebrow">St. Louis phone, computer & PC repair</p>

          <h1>Phone repairs as fast as 15 minutes.</h1>

          <p className="hero-text">
            Quality Wireless offers same-day repairs for phones, computers,
            MacBooks, Windows PCs, charging ports, screens, locked devices, and
            custom PC systems.
          </p>

          <div className="hero-actions">
            <a
              href="tel:3142560719"
              className="btn primary"
              onClick={() =>
                trackEvent("call_click", {
                  event_category: "lead",
                  event_label: "Hero Call Button",
                })
              }
            >
              Call (314) 256-0719
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=442+Bates+St+St+Louis+MO+63111"
              className="btn btn-map"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("directions_click", {
                  event_category: "lead",
                  event_label: "Hero Get Directions",
                })
              }
            >
              Get Directions
            </a>
          </div>

          <div className="hero-details">
            <div>
              <strong>No appointment needed</strong>
              <span>Walk-ins welcome Monday through Saturday.</span>
            </div>

            <div>
              <strong>Local repair shop</strong>
              <span>Located on Bates St in St. Louis.</span>
            </div>
          </div>
        </div>

        <aside className="hero-photo-card reveal delay-one">
          <img
            src="/images/storefront-main.jpg"
            alt="Quality Wireless storefront"
          />

          <div className="hero-photo-overlay">
            <div className="panel-top">
              <span className="status-dot"></span>
              <span>
                Open Monday - Saturday
                <small>10 AM - 7 PM</small>
              </span>
            </div>

            <h2>Call or walk in.</h2>
            <p>
              Get repair help from a local St. Louis shop with years of
              experience.
            </p>
          </div>
        </aside>
      </section>

      <section className="highlight-bar reveal">
        {highlights.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>Repair services for phones, computers, and custom PCs.</h2>
          <p>
            The shop handles common device issues, system upgrades, unlocking,
            data transfer, and custom builds.
          </p>
        </div>

        <div className="main-service-grid">
          {mainServices.map((service) => (
            <article className="main-service-card reveal" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details-section">
        <div className="service-list-card reveal">
          <p className="eyebrow">Computer services</p>
          <h2>PC, laptop, and MacBook help.</h2>

          <div className="tag-grid">
            {computerServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        <div className="service-list-card dark-card reveal delay-one">
          <p className="eyebrow">Phone services</p>
          <h2>Repairs, unlocking, and password help.</h2>

          <div className="tag-grid">
            {phoneServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band reveal">
        <div>
          <p className="eyebrow">Repair quote</p>
          <h2>Need a price? Call the shop.</h2>
        </div>

        <p>
          Pricing depends on the device, issue, part availability, and repair
          type. Call or stop by for a quote before starting your repair.
        </p>

        <a
          href="tel:3142560719"
          className="btn btn-primary"
          onClick={() =>
            trackEvent("call_click", {
              event_category: "lead",
              event_label: "Repair Quote Call Button",
            })
          }
        >
          Call for a Quote
        </a>
      </section>

      <section className="split-section" id="why-us">
        <div className="split-content reveal">
          <p className="eyebrow">Why choose Quality Wireless</p>
          <h2>Experienced local service since 2006.</h2>
          <p>
            Quality Wireless gives customers a simple way to get device repairs
            handled locally without complicated booking or confusing service
            steps.
          </p>
        </div>

        <div className="reason-list reveal delay-one">
          <div>
            <strong>Same-day repair options</strong>
            <span>Many phone and device repairs can be handled the same day.</span>
          </div>

          <div>
            <strong>Fast phone repairs</strong>
            <span>
              Some phone repairs can be completed in as fast as 15 minutes.
            </span>
          </div>

          <div>
            <strong>Easy access</strong>
            <span>Call ahead or visit the shop during business hours.</span>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <section className="warranty-section" id="warranty">
        <div className="warranty-card reveal">
          <p className="eyebrow">Warranty</p>
          <h2>14-day component warranty.</h2>
          <p>
            Repairs include a 14-day warranty on the component that was repaired
            or replaced. The warranty is void if the device has physical damage,
            liquid damage, or customer-caused damage after the repair.
          </p>
        </div>

        <div className="warranty-image reveal delay-one">
          <img src="/images/phone-repair.jpg" alt="Phone repair workbench" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content reveal">
          <p className="eyebrow">About</p>
          <h2>Quality Wireless is a local St. Louis repair shop.</h2>
          <p>
            Located on Bates St, Quality Wireless helps customers repair damaged
            devices, unlock phones and computers, transfer data, upgrade
            systems, and build custom PC setups.
          </p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/qualitywirelessstl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Instagram"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "About Instagram",
                })
              }
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/Qualitywirelessllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Facebook"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "About Facebook",
                })
              }
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="about-image reveal delay-one">
          <img src="/images/store-interior.jpg" alt="Quality Wireless interior" />
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Inside the shop</p>
          <h2>Repair work and store photos.</h2>
          <p>
            A closer look at the repair bench, store interior, and device work
            handled in-store.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div className="gallery-item reveal" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-content reveal">
          <p className="eyebrow">Contact Quality Wireless</p>
          <h2>Call or visit the shop.</h2>
          <p>
            Contact the shop for repair questions, quotes, unlocking, upgrades,
            and computer issues.
          </p>
        </div>

        <div className="contact-card reveal delay-one">
          <div>
            <strong>Phone</strong>
            <a 
              href="tel:3142560719"
              onClick={() =>
                trackEvent("call_click", {
                  event_category: "lead",
                  event_label: "Contact Phone Number",
                })
              }
            >
              (314) 256-0719
            </a>
            <span>Call only, no texting</span>
          </div>

          <div>
            <strong>Address</strong>
            <span>442 Bates St, St. Louis, MO 63111</span>
          </div>

          <div>
            <strong>Hours</strong>
            <span>Monday - Saturday: 10 AM - 7 PM</span>
            <span>Sunday: Closed</span>
          </div>

          <div className="contact-socials">
            <strong>Socials</strong>
            <a
              href="https://www.instagram.com/qualitywirelessstl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Instagram"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "Instagram",
                })
              }
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/Qualitywirelessllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Facebook"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "Facebook",
                })
              }
            >
              <FacebookIcon />
            </a>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=442+Bates+St+St+Louis+MO+63111"
            className="btn btn-primary full-width"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("directions_click", {
                event_category: "lead",
                event_label: "Contact Open in Maps",
              })
            }
          >
            Open in Maps
          </a>
        </div>
      </section>

      <section className="web-design-section" id="web-design">
        <div className="web-design-content reveal">
          <p className="eyebrow">Website design</p>
          <h2>Need a website like this?</h2>
          <p>
            This section is for website design requests only. Requests submitted
            here go to the independent web developer, not Quality Wireless.
          </p>
        </div>

        <form
          className="website-form reveal delay-one"
          action="https://formspree.io/f/mojbovjb"
          method="POST"
          onSubmit={() =>
            trackEvent("website_form_submit", {
              event_category: "lead",
              event_label: "Website Design Form",
            })
          }
        >
          <input
            type="hidden"
            name="_subject"
            value="New website request from Quality Wireless website"
          />

          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Business Name
            <input
              type="text"
              name="businessName"
              placeholder="Your business name"
            />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="Your phone number" />
          </label>

          <label>
            What kind of website do you need?
            <textarea
              name="message"
              placeholder="Tell me what kind of website you need..."
              rows="5"
              required
            ></textarea>
          </label>

          <button type="submit" className="btn btn-primary full-width">
            Send Website Request
          </button>
        </form>
      </section>

      <PrivacyPolicy />

      <footer className="footer">
        <div>
          <strong>Quality Wireless</strong>
          <span>Phone, computer, and custom PC repair in St. Louis, MO</span>
          <span>Monday - Saturday: 10 AM - 7 PM</span>
          <span>Sunday: Closed</span>
        </div>

        <div className="footer-links">
          <a 
            href="tel:3142560719"
            onClick={() =>
              trackEvent("call_click", {
                event_category: "lead",
                event_label: "Footer Phone Number",
              })
            }
          >
            (314) 256-0719
          </a>
          <span>Call only, no texting</span>
          <span>442 Bates St, St. Louis, MO 63111</span>

          <div className="footer-social-row">
            <a
              href="https://www.instagram.com/qualitywirelessstl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Instagram"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "Instagram",
                })
              }
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/Qualitywirelessllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Wireless Facebook"
              onClick={() =>
                trackEvent("social_click", {
                  event_category: "engagement",
                  event_label: "Facebook",
                })
              }
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </footer>

      <a 
        href="tel:3142560719" 
        className="mobile-call"
        onClick={() =>
          trackEvent("call_click", {
            event_category: "lead",
            event_label: "Mobile Call Button",
          })
        }
      >
        Call Quality Wireless
      </a>
    </main>
  );
}

export default App;