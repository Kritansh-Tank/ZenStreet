import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./location-language-container.module.css";

const LocationLanguageContainer = ({ className = "" }) => {
  return (
    <div className={[styles.locationLanguageContainer, className].join(" ")}>
      <div className={styles.maxMustermannParent}>
        <div className={styles.maxMustermann}>
          <div className={styles.iamFrom}>I am from</div>
          <div className={styles.region}>
            <Image
              className={styles.jobPoliceIcon}
              loading="lazy"
              width={48}
              height={48} 
              alt=""
              src="/Region.svg"
            />
          </div>
        </div>
        <div className={styles.chennaiIndia}>Chennai, India</div>
      </div>
      <div className={styles.playerListHeader}>
        <div className={styles.languages}>Languages</div>
        <div className={styles.englishHindi}>English, Hindi</div>
      </div>
    </div>
  );
};

LocationLanguageContainer.propTypes = {
  className: PropTypes.string,
};

export default LocationLanguageContainer;
