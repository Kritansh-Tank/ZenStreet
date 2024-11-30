import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./about-me-component.module.css";

const AboutMeComponent = ({ className = "", property1 = "Frame 296" }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  return (
    <div
      className={[styles.aboutMeComponent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.helloImSwetha}>
        Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals
        through life's challenges with empathy and expertise. With over 10 years
        of experience, I specialize in helping clients manage anxiety,
        depression, and relationship issues through personalized, evidence-based
        practices.
      </div>

      <div className={styles.readMore} onClick={togglePopup}>
        Read more
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.helloImSwethaMore}>
              Hello, I'm Swetha, a licensed therapist dedicated to guiding
              individuals through life's challenges with empathy and expertise.
              With over 10 years of experience, I specialize in helping clients
              manage anxiety, depression, and relationship issues through
              personalized, evidence-based practices.
              <br />
              <br />
              My commitment to continuous learning keeps me updated with the
              latest therapeutic techniques, allowing me to provide the best
              possible care. Whether you seek stress management strategies or
              personal growth, I am here to empower you on your journey towards
              emotional well-being. I offer convenient online consultation
              bookings, making it easier for you to take the first step towards
              a healthier, happier life.
            </div>
            <div className={styles.showLess} onClick={togglePopup}>
              Show less
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

AboutMeComponent.propTypes = {
  className: PropTypes.string,
  /** Variant props */
  property1: PropTypes.string,
};

export default AboutMeComponent;
