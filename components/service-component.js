import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./service-component.module.css";
import { useRouter } from "next/router";

const ServiceComponent = ({ className = "", property1 = "Default" }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/slot");
  };
  
  return (
    <div
      className={[styles.therapyContainerParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.therapyContainer}>
        <div className={styles.therapyContent}>
          <div className={styles.therapyDetails}>
            <div className={styles.therapyHeader}>
              <div className={styles.therapyTitle}>
                <Image
                  className={styles.therapyIcon}
                  loading="lazy"
                  width={16}
                  height={26}
                  alt=""
                  src="/Vector5.svg"
                />
              </div>
              <b className={styles.individualSessions}>3,200</b>
            </div>
            <div className={styles.individualSessionLabel}>
              <div className={styles.session}>/ session</div>
            </div>
          </div>
          <div className={styles.individualSessionOptions}>
            <div className={styles.individualSessionDurations}>
              <div className={styles.min}>45 min</div>
            </div>
            <div className={styles.individualSessionDurations1}>
              <div className={styles.min1}>60 min</div>
            </div>
            <div className={styles.individualSessionDurations2}>
              <div className={styles.min2}>90 min</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.individualInfo}>
        <div className={styles.therapyDescription}>
          <div className={styles.descriptionContainer}>
            <h3 className={styles.individualTherapy}>Individual Therapy</h3>
            <div className={styles.descriptionDivider}>
              <div className={styles.descriptionDividerChild} />
            </div>
          </div>
        </div>
        <div className={styles.jointOptions}>
          <div className={styles.jointFeaturesContainer}>
            <div className={styles.jointEvaluation1}>
              <ul className={styles.jointEvaluation}>
                <li>Joint Evaluation</li>
              </ul>
            </div>
            <div className={styles.communicationExercises1}>
              <ul className={styles.communicationExercises}>
                <li>Communication Exercises</li>
              </ul>
            </div>
            <div className={styles.conflictResolution1}>
              <ul className={styles.conflictResolution}>
                <li>Conflict Resolution</li>
              </ul>
            </div>
            <div className={styles.goalSetting1}>
              <ul className={styles.goalSetting}>
                <li>Goal Setting</li>
              </ul>
            </div>
            <div className={styles.followUpPlanContainer}>
              <ul className={styles.followUpPlan}>
                <li>Follow up plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.booking}>
        <button className={styles.bookButtonContainer} onClick={handleNavigation}>
          <div className={styles.bookSession}>Proceed</div>
        </button>
      </div>
    </div>
  );
};

ServiceComponent.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default ServiceComponent;
