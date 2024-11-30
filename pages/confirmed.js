import styles from "./confirmed.module.css";
import { useRouter } from "next/router";

const Confirmed = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };
  
  return (
    <div className={styles.confirmed}>
      <div className={styles.frameParent}>
        <div className={styles.bookingConfirmedWrapper}>
          <h1 className={styles.bookingConfirmed}>Booking Confirmed!</h1>
        </div>
        <div className={styles.congratulationsYourTherapy}>
          Congratulations! Your therapy session has been successfully scheduled.
          We're looking forward to helping you on your journey to better mental
          health.
        </div>
      </div>
      <div className={styles.emailInstructionsWrapper}>
        <div className={styles.emailInstructions}>
          <div className={styles.firstSession}>
            <i className={styles.iInstructions}>i. Instructions</i>
            <div className={styles.emailDetails}>
              <div className={styles.aConfirmationEmailContainer}>
                <ul className={styles.aConfirmationEmailWithAll}>
                  <li>
                    <span
                      className={styles.aConfirmationEmail}
                    >{`A confirmation email with all the session details has been sent to `}</span>
                    <i className={styles.amal123gmailcom}>amal123@gmail.com</i>
                  </li>
                </ul>
              </div>
              <div className={styles.ifThisIsContainer}>
                <ul className={styles.ifThisIsYourFirstSession}>
                  <li>
                    If this is your first session, consider jotting down any key
                    points or questions you want to discuss.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.homeButtonContainerWrapper}>
            <button className={styles.homeButtonContainer} onClick={handleNavigation}>
              <div className={styles.backToHome}>Back to home</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
