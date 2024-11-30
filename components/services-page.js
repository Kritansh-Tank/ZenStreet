import Image from "next/image";
import SessionsContainer from "./sessions-container";
import PropTypes from "prop-types";
import styles from "./services-page.module.css";
import { useRouter } from "next/router";

const ServicesPage = ({ className = "", property1 = "Default" }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };

  return (
    <main
      className={[styles.sessions, className].join(" ")}
      data-property1={property1}
    >
      <header className={styles.content}>
        <div className={styles.page}>
          <div
            className={styles.container}
            onClick={handleNavigation}
            style={{ cursor: "pointer" }}
          >
            <Image
              className={styles.topDividerIcon}
              loading="lazy"
              width={26}
              height={23}
              alt=""
              src="/Frame 239.svg"
            />
          </div>
          <div className={styles.availability}>
            <a className={styles.availableSessions}>Available sessions</a>
          </div>
        </div>
        <div className={styles.pricing}>
          <button className={styles.pricingInfo}>
            <Image
              className={styles.riinformationLineIcon}
              width={24}
              height={24}
              alt=""
              src="/ri_information-line.svg"
            />
            <div className={styles.pricingDetails}>
              <div className={styles.clickOnTheDurationToSeeT}>
                Click on the duration to see the pricing details
              </div>
            </div>
            <div className={styles.bottomDivider}>
              <Image
                className={styles.sessionsOptionsIcon}
                width={13}
                height={12}
                alt=""
                src="/Vector4.svg"
              />
            </div>
          </button>
        </div>
      </header>
      <SessionsContainer />
    </main>
  );
};

ServicesPage.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default ServicesPage;
