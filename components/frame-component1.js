import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";
import { useRouter } from "next/router";

const FrameComponent1 = ({
  className = "",
  vector,
  groupTherapy,
  frameDivGap,
  frameDivWidth,
  frameDivPadding,
  groupTherapyWidth,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
    };
  }, [frameDivWidth, frameDivPadding]);

  const groupTherapyStyle = useMemo(() => {
    return {
      width: groupTherapyWidth,
    };
  }, [groupTherapyWidth]);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/slot");
  };

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorWrapper}>
                <Image
                  className={styles.vectorIcon}
                  loading="lazy"
                  width={16}
                  height={26}
                  alt=""
                  src="/Vector5.svg"
                />
              </div>
              <b className={styles.b}>3,200</b>
            </div>
            <div className={styles.sessionWrapper}>
              <div className={styles.session}>/ session</div>
            </div>
          </div>
          <div className={styles.frameParent1} style={frameDiv5Style}>
            <div className={styles.minWrapper}>
              <div className={styles.min}>45 min</div>
            </div>
            <div className={styles.minContainer}>
              <div className={styles.min1}>60 min</div>
            </div>
            <div className={styles.minFrame}>
              <div className={styles.min2}>90 min</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent3}>
            <div className={styles.groupTherapyWrapper} style={frameDiv6Style}>
              <h3 className={styles.groupTherapy} style={groupTherapyStyle}>
                {groupTherapy}
              </h3>
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.sessionFeatures}>
          <div className={styles.featureList}>
            <div className={styles.jointEvaluation}>
              <ul className={styles.jointEvaluation1}>
                <li>Joint Evaluation</li>
              </ul>
            </div>
            <div className={styles.communicationExercises}>
              <ul className={styles.communicationExercises1}>
                <li>Communication Exercises</li>
              </ul>
            </div>
            <div className={styles.conflictResolution}>
              <ul className={styles.conflictResolution1}>
                <li>Conflict Resolution</li>
              </ul>
            </div>
            <div className={styles.goalSetting}>
              <ul className={styles.goalSetting1}>
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
      <div className={styles.sessionAction}>
        <button className={styles.buttonContainer} onClick={handleNavigation}>
          <div className={styles.proceed}>Proceed</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string.isRequired,
  groupTherapy: PropTypes.string,

  /** Style props */
  frameDivGap: PropTypes.string,
  frameDivWidth: PropTypes.string,
  frameDivPadding: PropTypes.string,
  groupTherapyWidth: PropTypes.string,
};

export default FrameComponent1;
