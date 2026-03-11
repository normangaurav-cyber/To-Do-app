import styles from './GeneralInstruction.module.css'

// SVG icons as inline components for crisp rendering
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8C9.93 8 11.5 6.43 11.5 4.5S9.93 1 8 1 4.5 2.57 4.5 4.5 6.07 8 8 8zm0 1.5c-2.67 0-8 1.34-8 4v1.5h16V13.5c0-2.66-5.33-4-8-4z" fill="#3b3b3b"/>
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6l4 4 4-4" stroke="#3b3b3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.833 3.333H16.667V9.167" stroke="#3b3b3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.667 3.333L9.167 10.833" stroke="#3b3b3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.333 5H4.167C3.25 5 2.5 5.75 2.5 6.667v10C2.5 17.583 3.25 18.333 4.167 18.333h10c.917 0 1.667-.75 1.667-1.666V12.5" stroke="#3b3b3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="#009966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.333 3.667l3 3" stroke="#009966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function GeneralInstruction() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>OnlineFlagger.com</div>
        <div className={styles.headerActions}>
          <button className={styles.accountBtn}>
            <UserIcon />
            <span>Account</span>
            <ChevronDownIcon />
          </button>
          <button className={styles.externalLinkBtn} aria-label="Open link">
            <ExternalLinkIcon />
          </button>
        </div>
      </header>

      {/* Divider */}
      <div className={styles.headerDivider} />

      {/* Page Title Row */}
      <div className={styles.titleRow}>
        <h1 className={styles.pageTitle}>My Profile</h1>
        <button className={styles.editProfileBtn}>
          <EditIcon />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Main Card */}
      <main className={styles.card}>
        <h2 className={styles.cardHeading}>General Instructions</h2>

        {/* Instructions Box */}
        <div className={styles.instructionsBox}>

          {/* Warning row — top */}
          <div className={styles.warningRow}>
            <p className={styles.warningText}>
              If you are not Norman Gaurav <strong>DO NOT PROCEED</strong>
            </p>
            <button className={styles.logoutBtn}>Logout</button>
          </div>

          {/* Please read section */}
          <p className={styles.sectionHeading}>Please read these instructions</p>
          <ul className={styles.bulletList}>
            <li>
              If you are <strong>Norman Gaurav</strong>, Great verify and or correct your information below.
            </li>
            <li>What you provide is how your information will appear on your flagger card.</li>
            <li>All marked fields are required.</li>
          </ul>

          {/* Important section */}
          <p className={styles.sectionHeading}>Important</p>
          <ul className={styles.bulletList}>
            <li>
              You can correct spelling issues of your name like:
              <ul className={styles.nestedList}>
                <li>Mickey Mouse to Miki Mouse or</li>
                <li>Bill Smith in place of William Smith</li>
              </ul>
            </li>
            <li>If that is what you want on your card.</li>
            <li>
              Correct or add any missing information as it applies to you the student, then click the submit
              button at the bottom of the page.
            </li>
          </ul>

          {/* Do Not Change section */}
          <p className={styles.doNotChangeText}>DO NOT CHANGE THE ACTUAL PERSON</p>
          <ul className={styles.bulletList}>
            <li>So do not change Mickey Mouse to Snow White</li>
          </ul>

          {/* Warning row — bottom */}
          <div className={styles.warningRow}>
            <p className={styles.warningText}>
              Last chance if you are not Norman Gaurav <strong>DO NOT PROCEED</strong>
            </p>
            <button className={styles.logoutBtn}>Logout</button>
          </div>
        </div>

        {/* Proceed Button */}
        <div className={styles.proceedRow}>
          <button className={styles.proceedBtn}>
            <span>Proceed</span>
            <ArrowRightIcon />
          </button>
        </div>
      </main>
    </div>
  )
}
