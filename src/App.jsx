import React, { useState } from "react";

const img = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

const services = [
  {
    id: "01",
    title: "RF Front-End Design",
    text: "Signal-chain architecture, gain and noise budgeting, mixer and LNA selection, filter planning, limiter strategy, IF design, and practical trade studies for real hardware.",
  },
  {
    id: "02",
    title: "Controlled-Impedance PCB Design",
    text: "RF PCB layout support with attention to stackup planning, grounding strategy, power integrity, bias sequencing, manufacturability, and bring-up realities.",
  },
  {
    id: "03",
    title: "Radar Support Electronics",
    text: "Embedded control boards, trigger and gate logic, ADC monitoring, Ethernet-connected support hardware, and practical board-level systems around radar platforms.",
  },
  {
    id: "04",
    title: "Antenna & Array Development",
    text: "Patch antennas, phased-array concepts, ADAR1000-based beamforming, EM simulation support, beamsteering validation, and coupling review for directional RF systems.",
  },
];

const experience = [
  {
    label: "2024 — Present",
    title: "Radar Engineer",
    organization: "EWR Radar Systems",
    image: img("amp-interface.jpg"),
    bullets: [
      "Completely designed, tested, and implemented an amplifier control/interface board now used in production radar systems, providing transmit/standby RF pass-through control between the signal processor and radar amplifier.",
      "Integrated gigabit Ethernet communication, 4-channel ADC monitoring, controlled-impedance routing, trigger/gate control, and production-minded board documentation into a consolidated radar support PCB.",
      "Reduced the previous multi-board amplifier-control approach into a smaller integrated solution, consolidating three boards into one and achieving an estimated 40% size reduction with lower system complexity.",
      "Designed and tested C-band and X-band active downconverter modules using IQ mixer architecture, limiter/LNA front ends, custom GaAs bias sequencing, and Rogers-based RF PCB implementation.",
      "Developed RF signal chains targeting low system noise and high survivability, including approximately 1.67 dB system noise figure, +33 dBm CW input survivability, and roughly 40 dB gain across active RF/IF downconverter work.",
      "Assisted with radar setup, field support, and customer training on radar operation and maintenance.",
    ],
  },
  {
    label: "2026 — Present",
    title: "Student Research Assistant",
    organization: "Microwave Research Group",
    image: img("drone-swarm.jpg"),
    bullets: [
      "Designed a custom STM32H742-based flight controller and developed the supporting embedded software and control algorithms for autonomous stabilization and waypoint-oriented flight behavior.",
      "Developed flight-control algorithms using embedded C and Simulink-based control design, including PID-style stabilization logic, sensor integration, and real-time control-loop implementation.",
      "Worked on drone swarm coordination for synchronized operation of up to 15 autonomous quadcopters using distributed communication concepts, collision-avoidance logic, telemetry links, and coordinated mission behavior.",
      "Designed phased-array patch antennas and used ADAR1000 beamformer hardware for electronic beamforming experiments, including beamsteering simulation, phase-control implementation, and successful beamsteering test work.",
      "Designed, tested, and developed a high-power delivery board for 4S–12S battery packs with 250A+ current capability, per-line voltage/current/temperature sensing, built-in fault detection, rail-level safeguards, and battery ORing for redundant operation.",
    ],
  },
];

const work = [
  {
    label: "RADAR HARDWARE",
    title: "C-Band / X-Band Active Downconverter Modules",
    description:
      "Designed and tested active downconverter modules using IQ mixer architecture, limiter/LNA front ends, custom GaAs bias sequencing, and Rogers-based RF hardware. The work focused on low-noise receiver performance, high-input survivability, controlled RF/IF gain, and measured system-level validation.",
    result: "~1.67 dB system NF / +33 dBm CW survivability / ~40 dB active RF-IF gain",
    image: img("downconverter.jpg"),
  },
  {
    label: "PRODUCTION RADAR ELECTRONICS",
    title: "Amplifier Control & Monitoring Board",
    description:
      "Completely designed, tested, and implemented a production radar amplifier-control board that manages transmit/standby RF pass-through, trigger/gate behavior, amplifier monitoring, and Ethernet-connected system communication.",
    result: "Now used in production radars / gigabit Ethernet / 4-channel ADC / 40% size reduction",
    image: img("amp-interface.jpg"),
  },
  {
    label: "HIGH-POWER EMBEDDED SYSTEMS",
    title: "4S–12S High-Power Battery Delivery Board",
    description:
      "Designed a high-current battery power delivery and protection board for multi-pack operation, with sensing and protection built around high-reliability autonomous platform requirements.",
    result: "250A+ current capability / voltage-current-temp sensing / fault detection / battery ORing",
    image: img("power-delivery.jpg"),
  },
  {
    label: "RESEARCH SYSTEMS",
    title: "Drone Swarm RF & Flight-Control Platform",
    description:
      "Worked on embedded control, communications, telemetry, and coordination logic for autonomous multirotor platforms operating in synchronized swarm configurations, including distributed communication and collision-avoidance concepts.",
    result: "Up to 15 coordinated drones / distributed comms / autonomous control algorithms",
    image: img("drone-swarm.jpg"),
  },
  {
    label: "PHASED ARRAY DEVELOPMENT",
    title: "ADAR1000 Beamforming & Beamsteering Work",
    description:
      "Designed phased-array patch antenna concepts and used ADAR1000 beamformer hardware for electronic beamforming experiments, including simulation, phase-control implementation, and beamsteering validation.",
    result: "ADAR1000 beamforming / simulated and tested beamsteering / patch-array development",
    image: img("phased-array.jpg"),
  },
  {
    label: "INDEPENDENT PROJECT",
    title: "Autonomous Rocket Flight Computer",
    description:
      "Designed a custom STM32-based flight computer integrating sensor data, telemetry, and control-oriented logic for autonomous rocket guidance concepts.",
    result: "9-DOF sensing / RF telemetry / embedded C firmware",
    image: img("rocket-flight-computer.jpg"),
  },
];

const process = [
  {
    step: "01",
    title: "Review",
    text: "Start with requirements, constraints, block diagrams, and available hardware so the project is grounded before design decisions are made.",
  },
  {
    step: "02",
    title: "Architecture",
    text: "Build a practical design direction around gain, noise, control, layout, manufacturability, and test considerations.",
  },
  {
    step: "03",
    title: "Development",
    text: "Move through schematic planning, PCB implementation, simulation support, and subsystem refinement with real prototype behavior in mind.",
  },
  {
    step: "04",
    title: "Bring-Up",
    text: "Support measurement, debugging, iteration, and revision planning as the hardware becomes something that can be tested and improved.",
  },
];

const capabilities = [
  "RF gain, noise figure, linearity, and survivability analysis",
  "Signal-chain architecture and component selection",
  "Controlled-impedance PCB layout and stackup planning",
  "CST Studio Suite / Ansys HFSS support",
  "ADAR1000 beamforming, phased-array simulation, and beamsteering validation",
  "Oscilloscope, VNA, power meter, and spectrum analyzer workflows",
  "STM32 firmware, SPI, I2C, UART, Ethernet, Linux, Python, and MATLAB",
  "High-current DC power distribution, battery ORing, sensing, and fault detection",
  "Prototype review, bring-up support, and design-risk identification",
  "Radar setup support, customer training assistance, and technical communication",
];

function SectionKicker({ children }) {
  return (
    <div className="section-kicker">
      <span className="section-kicker__rule" />
      <span>{children}</span>
    </div>
  );
}

function ArrowButton({ href, children, primary = false }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`button ${primary ? "button--primary" : "button--secondary"}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function ImageSlot({ src, alt, label, tall = false }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`image-slot ${tall ? "image-slot--tall" : ""}`}>
        <div className="image-slot__placeholder">
          <div className="image-slot__label">{label}</div>
          <div className="image-slot__hint">Add image: {src || "image file"}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-slot ${tall ? "image-slot--tall" : ""}`}>
      <img src={src} alt={alt} onError={() => setHasError(true)} />
      {label ? <div className="image-slot__caption">{label}</div> : null}
    </div>
  );
}

function RadarIllustration() {
  return (
    <svg
      viewBox="0 0 700 520"
      className="radar-illustration"
      role="img"
      aria-label="Technical radar-style illustration"
    >
      <rect x="1" y="1" width="698" height="518" fill="none" stroke="var(--line)" />
      <rect x="28" y="28" width="644" height="464" fill="none" stroke="var(--line)" />

      <text x="46" y="54" className="svg-label">
        TECHNICAL OVERVIEW
      </text>
      <text x="548" y="54" className="svg-label">
        RF / RADAR
      </text>

      <rect x="46" y="86" width="230" height="88" fill="none" stroke="var(--line)" />
      <text x="62" y="112" className="svg-small">
        SYSTEM LOG
      </text>
      <text x="62" y="136" className="svg-small"># FRONT END... ONLINE</text>
      <text x="62" y="154" className="svg-small"># IF CHAIN... STABLE</text>
      <text x="62" y="172" className="svg-small"># EMBEDDED CTRL... READY</text>

      <rect x="540" y="86" width="114" height="88" fill="none" stroke="var(--line)" />
      <text x="556" y="112" className="svg-small">
        CURRENT FREQ
      </text>
      <text x="556" y="148" className="svg-big">
        5.7
      </text>
      <text x="608" y="148" className="svg-small">
        GHz
      </text>

      <circle cx="360" cy="280" r="150" fill="none" stroke="var(--navy)" strokeDasharray="4 6" />
      <circle cx="360" cy="280" r="110" fill="none" stroke="var(--ink-soft)" strokeDasharray="4 6" />
      <circle cx="360" cy="280" r="70" fill="none" stroke="var(--sky)" strokeDasharray="4 6" />
      <circle cx="360" cy="280" r="4" fill="var(--navy)" />
      <line x1="360" y1="206" x2="360" y2="354" stroke="var(--line)" />
      <line x1="286" y1="280" x2="434" y2="280" stroke="var(--line)" />

      <path
        d="M360 280 L460 170"
        fill="none"
        stroke="var(--accent-red)"
        strokeWidth="2"
      />
      <circle cx="460" cy="170" r="4" fill="var(--accent-red)" />

      <rect x="92" y="374" width="176" height="62" fill="none" stroke="var(--line)" />
      <text x="110" y="400" className="svg-small">
        NOISE FIGURE
      </text>
      <text x="110" y="425" className="svg-medium">
        1.67 dB
      </text>

      <rect x="292" y="374" width="176" height="62" fill="none" stroke="var(--line)" />
      <text x="310" y="400" className="svg-small">
        SURVIVABILITY
      </text>
      <text x="310" y="425" className="svg-medium">
        +33 dBm
      </text>

      <rect x="492" y="374" width="120" height="62" fill="none" stroke="var(--line)" />
      <text x="510" y="400" className="svg-small">
        TESTED
      </text>
      <text x="510" y="425" className="svg-medium">
        RF
      </text>

      <text x="46" y="476" className="svg-label">
        PRACTICAL RF DEVELOPMENT / SIGNAL-CHAIN DISCIPLINE / PROTOTYPE SUPPORT
      </text>
    </svg>
  );
}

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="brand">
            <div className="brand__mark" aria-hidden="true">
              <span />
            </div>
            <div>
              <div className="brand__name">Caleb Murray</div>
              <div className="brand__sub">RF Systems / Radar Hardware</div>
            </div>
          </div>

          <nav className="site-nav" aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <SectionKicker>Independent RF Design Support</SectionKicker>

              <h1 className="hero__title">
                RF hardware and radar systems development,
                <span> built with practical engineering discipline.</span>
              </h1>

              <p className="hero__text">
                I support the design and development of RF hardware, radar
                subsystems, controlled-impedance PCBs, and embedded support
                electronics. The emphasis is on useful engineering work —
                structured, testable, and grounded in real hardware.
              </p>

              <div className="hero__actions">
                <ArrowButton href="#contact" primary>
                  Contact Caleb
                </ArrowButton>
                <ArrowButton href="https://github.com/CalebJM04">
                  View GitHub
                </ArrowButton>
              </div>

              <div className="hero__meta">
                <div>
                  <div className="meta-label">Focus</div>
                  <div className="meta-value">RF Front Ends</div>
                </div>
                <div>
                  <div className="meta-label">Background</div>
                  <div className="meta-value">Radar & Embedded Systems</div>
                </div>
                <div>
                  <div className="meta-label">Tools</div>
                  <div className="meta-value">KiCad / CST / HFSS</div>
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <div className="panel">
                <RadarIllustration />
              </div>
            </div>
          </div>
        </section>

        <section className="image-band">
          <div className="container image-band__grid">
            <ImageSlot
              src={img("hero-board.jpg")}
              alt="RF hardware or board photo"
              label="Program imagery / hardware"
            />
            <div className="image-band__text panel">
              <SectionKicker>Approach</SectionKicker>
              <h2 className="section-title section-title--small">
                A straightforward engineering practice for teams that need RF work done carefully.
              </h2>
              <p>
                This site is intended as a technical portfolio and a clean summary
                of the work I do best: RF front-end development, radar support
                electronics, PCB implementation, and prototype design support.
              </p>
              <p>
                The focus is not on hype. It is on clear requirements, practical
                design decisions, and hardware that can be reviewed, tested, and improved.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionKicker>Experience</SectionKicker>
                <h2 className="section-title">Current roles and technical background.</h2>
              </div>
              <p className="section-copy">
                Experience across radar hardware, RF front ends, support electronics,
                autonomous systems, embedded control, and customer-facing technical work.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-card" key={`${item.organization}-${item.title}`}>
                  <div className="experience-card__media">
                    <ImageSlot src={item.image} alt={item.title} label={item.organization} tall />
                  </div>

                  <div className="experience-card__content">
                    <div className="experience-card__meta">{item.label}</div>
                    <h3>{item.title}</h3>
                    <div className="experience-card__org">{item.organization}</div>

                    <ul className="bullet-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section section--tint">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionKicker>Services</SectionKicker>
                <h2 className="section-title">Design support centered on practical RF development.</h2>
              </div>
              <p className="section-copy">
                Best suited for research groups, prototype teams, small defense-adjacent
                programs, and organizations that need disciplined RF work without unnecessary noise.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.id}>
                  <div className="service-card__id">Service {service.id}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionKicker>Selected Work</SectionKicker>
                <h2 className="section-title">Programs, boards, and RF chains.</h2>
              </div>
              <p className="section-copy">
                A selection of work spanning production radar electronics, RF downconverters,
                phased-array development, high-power embedded systems, and autonomous platforms.
              </p>
            </div>

            <div className="work-list">
              {work.map((item) => (
                <article className="work-card" key={item.title}>
                  <div className="work-card__media">
                    <ImageSlot src={item.image} alt={item.title} label={item.label} tall />
                  </div>

                  <div className="work-card__content">
                    <div className="work-card__label">{item.label}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="work-card__result">
                    <div className="work-card__result-label">Result / Context</div>
                    <div className="work-card__result-text">{item.result}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section--tint">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionKicker>Process</SectionKicker>
                <h2 className="section-title">A clear path from review to bring-up.</h2>
              </div>
              <p className="section-copy">
                A simple working structure that keeps projects grounded and useful.
              </p>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <article className="process-card" key={item.step}>
                  <div className="process-card__step">Step {item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="container capability-layout">
            <div>
              <SectionKicker>Capabilities</SectionKicker>
              <h2 className="section-title">Technical areas I work in regularly.</h2>
            </div>

            <div className="panel capability-panel">
              {capabilities.map((item) => (
                <div className="capability-row" key={item}>
                  <span className="capability-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="container contact-grid">
            <div>
              <SectionKicker>Contact</SectionKicker>
              <h2 className="section-title">
                Open to selected RF and radar development work.
              </h2>
              <p className="section-copy section-copy--wide">
                If you have a block diagram, RF chain, PCB concept, subsystem,
                or prototype issue you would like reviewed, feel free to reach out.
                I’m especially interested in practical hardware work where careful design
                and technical clarity matter.
              </p>
            </div>

            <aside className="panel contact-panel">
              <div className="contact-panel__label">Inquiry</div>
              <div className="contact-panel__actions">
                <ArrowButton href="mailto:flvol04@gmail.com" primary>
                  Email Caleb
                </ArrowButton>
                <ArrowButton href="tel:+18656221963">
                  Call / Text
                </ArrowButton>
                <ArrowButton href="https://github.com/CalebJM04">
                  GitHub
                </ArrowButton>
              </div>

              <div className="contact-details" aria-label="Contact details">
                <div>
                  <span>Email</span>
                  <a href="mailto:flvol04@gmail.com">flvol04@gmail.com</a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+18656221963">(865) 622-1963</a>
                </div>
              </div>

              <div className="contact-panel__note">
                Knoxville, Tennessee
                <br />
                Available for technical discussions and selected project-based support.
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© 2026 Caleb Murray</span>
          <span>RF Systems / Radar Hardware / Embedded Development</span>
          <span>Public portfolio — no proprietary or export-controlled details shown</span>
        </div>
      </footer>
    </div>
  );
}
