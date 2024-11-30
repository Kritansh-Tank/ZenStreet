import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./testimonial-content1.module.css";

const TestimonialContent1 = ({
  className = "",
  group20,
  theGuidanceIReceivedHelped,
  theGuidanceIWidth,
}) => {
  const theGuidanceIStyle = useMemo(() => {
    return {
      width: theGuidanceIWidth,
    };
  }, [theGuidanceIWidth]);

  return (
    <div className={[styles.testimonialContent, className].join(" ")}>
      <div className={styles.testimonialDetails}>
        <div className={styles.frameParent}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={66}
            height={44}
            alt=""
            src="/Group 20.svg"
          />
          <div className={styles.theGuidanceIReceivedHelpedWrapper}>
            <blockquote
              className={styles.theGuidanceI}
              style={theGuidanceIStyle}
            >
              {theGuidanceIReceivedHelped}
            </blockquote>
          </div>
        </div>
        <div className={styles.testimonialAuthor}>
          <div className={styles.anonymous}>Anonymous</div>
        </div>
      </div>
    </div>
  );
};

TestimonialContent1.propTypes = {
  className: PropTypes.string,
  group20: PropTypes.string.isRequired,
  theGuidanceIReceivedHelped: PropTypes.string,

  /** Style props */
  theGuidanceIWidth: PropTypes.string,
};

export default TestimonialContent1;
