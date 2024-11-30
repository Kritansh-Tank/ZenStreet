import FrameComponent1 from "./frame-component1";
import ServiceComponent from "./service-component";
import PropTypes from "prop-types";
import styles from "./sessions-container.module.css";

const SessionsContainer = ({ className = "" }) => {
  return (
    <section className={[styles.sessionsContainer, className].join(" ")}>
      <div className={styles.sessionsGrid}>
        <FrameComponent1 vector="/vector-21.svg" groupTherapy="Group Therapy" />
        <ServiceComponent property1="Default" />
        <FrameComponent1
          vector="/vector-4.svg"
          groupTherapy="Couple Therapy"
          frameDivGap="8.5px"
          frameDivWidth="10.25rem"
          frameDivPadding="0rem 0rem 0rem var(--padding-5xs)"
          groupTherapyWidth="9.813rem"
        />
      </div>
    </section>
  );
};

SessionsContainer.propTypes = {
  className: PropTypes.string,
};

export default SessionsContainer;
