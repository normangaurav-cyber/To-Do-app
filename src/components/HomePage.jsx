import { useState } from 'react'
import styles from './HomePage.module.css'

// ─── Asset URLs (from Figma) ──────────────────────────────────
const imgHeroBg  = 'https://www.figma.com/api/mcp/asset/71827ffa-1dad-46d7-9194-64b9b998fac3'
const imgHero1   = 'https://www.figma.com/api/mcp/asset/8bad0c8a-187a-468f-a875-2e30a7a964ef'
const imgHero2   = 'https://www.figma.com/api/mcp/asset/84305839-bdd4-4b66-a724-c69a845f5f96'
const imgHero3   = 'https://www.figma.com/api/mcp/asset/10b0b5cf-feca-45b5-bc68-72baad7bcd04'
const imgMockup  = 'https://www.figma.com/api/mcp/asset/32a2efd3-548d-48dd-bc70-e4bd46b8d510'
const imgStatIcon = 'https://www.figma.com/api/mcp/asset/303d032a-9cdc-44b5-a5a6-954aaac736c8'
const imgPlayIcon = 'https://www.figma.com/api/mcp/asset/a86f4b3f-0dfe-42df-a68f-917f06f1cf96'
const imgArrow   = 'https://www.figma.com/api/mcp/asset/461c45a0-781b-4e65-a4e5-fb3fb831b7a6'
const imgPlus    = 'https://www.figma.com/api/mcp/asset/40685082-0145-43c3-ab0a-1598a89993ce'
const imgPhone   = 'https://www.figma.com/api/mcp/asset/6efd3a0d-ec84-46fc-add7-bd75d985c04e'
const imgClock   = 'https://www.figma.com/api/mcp/asset/bea12f19-3e5c-4912-a2c7-aee69b17d662'
const imgWhy1    = 'https://www.figma.com/api/mcp/asset/1d24a3d1-e647-43fc-84a5-cd8665709f23'
const imgWhy2    = 'https://www.figma.com/api/mcp/asset/70394492-5335-4e34-901c-ca663e0e6a2b'
const imgWhy3    = 'https://www.figma.com/api/mcp/asset/ca5d1ac5-3968-4849-9768-19634dc84ec1'
const imgWhy4    = 'https://www.figma.com/api/mcp/asset/ec630cbd-a712-4ad8-9ac2-47f175e45565'

// ─── Inline SVGs ─────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="#3b3b3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'How do I get started?',
    a: 'Simply create an account on OnlineFlagger.com, select your training course, and begin at your own pace. You can train from any device with an internet connection.',
  },
  {
    q: 'How do I purchase a class or classes?',
    a: 'After creating your account, browse our course catalog and add courses to your cart. We accept all major credit cards and offer bulk pricing for organizations.',
  },
  {
    q: 'How long does it take to get my card?',
    a: 'Once you successfully complete the course and pass the exam, your digital certification card is available immediately. Physical cards are mailed within 5–7 business days.',
  },
  {
    q: 'How long does testing take?',
    a: 'The flagger certification course typically takes 2–4 hours to complete, including all modules, demonstrations, and the final exam.',
  },
  {
    q: 'What happens if I fail the class?',
    a: 'No worries — you can retake the exam at no additional cost. Our system allows unlimited retakes to ensure you fully master the material.',
  },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ''}`}>
      <button className={styles.faqButton} onClick={() => setOpen(o => !o)}>
        <p className={styles.faqQuestion}>{question}</p>
        <div className={styles.faqToggle}>
          <img src={imgPlus} alt="" />
        </div>
      </button>
      <div className={styles.faqAnswer}>
        <p className={styles.faqAnswerInner}>{answer}</p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────
export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── Navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <span className={styles.navLogo}>OnlineFlagger.com</span>

          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Add courses/Manage Account</a>
            <button className={styles.navLink}>
              More Information <ChevronDown />
            </button>
            <a href="#" className={styles.navLink}>Support</a>
            <a href="#" className={styles.navLink}>Contact Us</a>
          </div>

          <button className={styles.navLoginBtn}>Login</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img src={imgHeroBg} alt="" className={styles.heroBg} />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>
              Certified{' '}
              <span className={styles.heroHeadingGreen}>Flagger Training </span>
              <span className={styles.heroHeadingLight}>Online now</span>
            </h1>
            <p className={styles.heroSubtext}>
              Meet all DOT requirements for online flagger training courses. This is an approved version
              of the{' '}
              <span className={styles.heroSubtextGreen}>ATSSA flagger certification </span>
              curriculum. Our included student management system allows you to track student progress
              and certifications, assign multiple account manager and more.
            </p>
          </div>

          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary}>Start Training</button>
            <button className={styles.btnOutline}>Buy Training</button>
          </div>

          <div className={styles.heroImages}>
            <div className={styles.heroImageCard}>
              <img src={imgHero1} alt="Flagger team" />
            </div>
            <div className={styles.heroImageCard}>
              <img src={imgHero2} alt="Stop sign training" />
            </div>
            <div className={styles.heroImageCard}>
              <img src={imgHero3} alt="Certified flagger" />
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section className={styles.about}>
        <div className={styles.aboutGlow1} />
        <div className={styles.aboutGlow2} />

        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.sectionBadgeDot} />
              <span className={styles.sectionBadgeText}>Online Certification Platform</span>
            </div>
            <h2 className={styles.sectionHeadingDark}>
              About <span className={styles.sectionHeadingGreen}>Us</span>
            </h2>
            <p className={styles.sectionSubtext}>
              The first and most trusted online flagger certification course. Train anywhere, anytime
              with our ATSSA &amp; DOT approved program.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            {/* Stat cards */}
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardInner}>
                  <div className={styles.statIconWrap}>
                    <img src={imgStatIcon} alt="" />
                  </div>
                  <div className={styles.statInfo}>
                    <p className={styles.statNumber}>40+</p>
                    <p className={styles.statLabel}>Years Experience</p>
                    <p className={styles.statDesc}>Professional instructors with decades of traffic control expertise</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.statCard} ${styles.teal}`}>
                <div className={styles.statCardInner}>
                  <div className={`${styles.statIconWrap} ${styles.teal}`}>
                    <img src={imgStatIcon} alt="" />
                  </div>
                  <div className={styles.statInfo}>
                    <p className={`${styles.statNumber} ${styles.teal}`}>2006</p>
                    <p className={styles.statLabel}>Industry Pioneer</p>
                    <p className={styles.statDesc}>First to offer fully online ATSSA flagger certification</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.statCard} ${styles.mint}`}>
                <div className={styles.statCardInner}>
                  <div className={`${styles.statIconWrap} ${styles.mint}`}>
                    <img src={imgStatIcon} alt="" />
                  </div>
                  <div className={styles.statInfo}>
                    <p className={`${styles.statNumber} ${styles.mint}`}>100%</p>
                    <p className={styles.statLabel}>DOT Compliant</p>
                    <p className={styles.statDesc}>Meets all requirements with interactive position demonstrations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Mockup */}
            <div className={styles.browserMockupWrap}>
              <div className={styles.browserGlow} />
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    <div className={styles.browserDots}>
                      <div className={`${styles.browserDot} ${styles.red}`} />
                      <div className={`${styles.browserDot} ${styles.yellow}`} />
                      <div className={`${styles.browserDot} ${styles.green}`} />
                    </div>
                    <span className={styles.browserUrl} style={{ marginLeft: 16 }}>OnlineFlagger.com</span>
                  </div>
                  <div className={styles.browserProgress}>
                    <div className={styles.browserProgressBg} />
                    <div className={styles.browserProgressFill} />
                  </div>
                </div>
                <div className={styles.browserScreen}>
                  <img src={imgMockup} alt="Training module" className={styles.browserScreenImg} />
                  <div className={styles.browserOverlay} />
                  <div className={styles.browserCaption}>
                    <div className={styles.browserCaptionText}>
                      <h4>Module 2: Flagger Position Training</h4>
                      <p>Interactive demonstration • DOT approved</p>
                    </div>
                    <div className={styles.browserPlayBtn}>
                      <img src={imgPlayIcon} alt="Play" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.certifiedTag}>Certified Results</div>
            </div>
          </div>

          <div className={styles.aboutCta}>
            <button className={styles.btnGreenLarge}>
              Learn More About Us
              <img src={imgArrow} alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={styles.whyChoose}>
        <div className={styles.whyGlow1} />
        <div className={styles.whyGlow2} />

        <div className={styles.whyContainer}>
          <div className={styles.whyHeader}>
            <div className={styles.sectionBadge} style={{ background: 'rgba(48,192,75,0.1)', border: '1px solid rgba(48,192,75,0.2)' }}>
              <span className={styles.sectionBadgeDot} />
              <span className={styles.sectionBadgeText}>Our Advantages</span>
            </div>
            <h2 className={styles.sectionHeadingLight}>
              Why Choose <span className={styles.sectionHeadingGreen}>Us</span>
            </h2>
            <p className={styles.whySubtext}>
              OnlineFlagger.com offers easy, affordable, on-demand training for flaggers. Mostly used
              by business and government agencies that supply flaggers at road work sites, but
              individuals are welcome too.
            </p>
          </div>

          <div className={styles.whyFeatures}>
            {/* Feature 1: text left, image right */}
            <div className={styles.whyFeatureRow}>
              <div className={styles.whyDivider} />
              <div className={styles.whyFeatureContent}>
                <div className={styles.whyFeatureLabel}>
                  <p className={styles.whyFeatureLabelText}>
                    The leader in online testing for{' '}
                    <span className={styles.whyFeatureLabelBold}>10+</span>{' '}
                    years
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className={styles.whyFeatureImage}>
                    <img src={imgWhy1} alt="Leader in online testing" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: image left, text right */}
            <div className={styles.whyFeatureRow}>
              <div className={styles.whyDivider} />
              <div className={styles.whyFeatureContent}>
                <div className={styles.whyFeatureImage}>
                  <img src={imgWhy2} alt="Unbeatable support staff" />
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className={styles.whyFeatureLabel}>
                    <p className={styles.whyFeatureLabelText}>
                      Unbeatable{' '}
                      <span className={styles.whyFeatureLabelBold}>support</span>{' '}
                      staff
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: text left, image right */}
            <div className={styles.whyFeatureRow}>
              <div className={styles.whyDivider} />
              <div className={styles.whyFeatureContent}>
                <div className={styles.whyFeatureLabel}>
                  <p className={styles.whyFeatureLabelText}>
                    <span className={styles.whyFeatureLabelBold}>Easiest testing</span>
                    {' '}process available
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className={styles.whyFeatureImage}>
                    <img src={imgWhy3} alt="Easiest testing process" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: image left, text right */}
            <div className={styles.whyFeatureRow}>
              <div className={styles.whyDivider} />
              <div className={styles.whyFeatureContent}>
                <div className={styles.whyFeatureImage}>
                  <img src={imgWhy4} alt="ATSSA & DOT approved" />
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className={styles.whyFeatureLabel}>
                    <p className={styles.whyFeatureLabelText}>
                      <span className={styles.whyFeatureLabelBold}>ATSSA &amp; DOT</span>
                      {' '}approved testing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.whyDivider} />
          </div>

          <div className={styles.whyCta}>
            <button className={styles.btnGreenLarge}>
              Get Started Today
              <img src={imgArrow} alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faqGlowBar} />
        <div className={styles.faqContainer}>
          <h2 className={styles.faqHeading}>
            FA<span className={styles.faqHeadingGreen}>Q</span>s
          </h2>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerGlow} />
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <p className={styles.footerBrandName}>OnlineFlagger.com</p>
              <p className={styles.footerBrandDesc}>
                The first and most trusted online flagger certification course since 2006.
              </p>
              <div className={styles.footerBadges}>
                <span className={styles.footerBadge}>ATSSA Approved</span>
                <span className={styles.footerBadge}>DOT Compliant</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerCol}>
              <h3>Quick Links</h3>
              <ul className={styles.footerList}>
                <li><a href="#">Start Training</a></li>
                <li><a href="#">Buy Training</a></li>
                <li><a href="#">Manage Account</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.footerCol}>
              <h3>Resources</h3>
              <ul className={styles.footerList}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.footerCol}>
              <h3>Contact Us</h3>
              <div className={styles.footerContactItems}>
                <div className={styles.footerContactItem}>
                  <div className={styles.footerContactIcon}>
                    <img src={imgPhone} alt="" />
                  </div>
                  <div>
                    <span className={styles.footerContactLabel}>Call us</span>
                    <span className={styles.footerContactValue}>720-962-8815</span>
                  </div>
                </div>
                <div className={styles.footerContactItem}>
                  <div className={styles.footerContactIcon}>
                    <img src={imgClock} alt="" />
                  </div>
                  <div>
                    <span className={styles.footerContactLabel}>Hours</span>
                    <span className={styles.footerContactValue}>Mon-Fri: 7am - 5pm Mountain Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>© 2026 OnlineFlagger.com. All rights reserved.</p>
            <div className={styles.footerLegalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
