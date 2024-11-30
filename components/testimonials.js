import Image from "next/image";
import TestimonialContent from "./testimonial-content1";
import Component1 from "./component1";
import PropTypes from "prop-types";
import styles from "./testimonials.module.css";

const Testimonials = ({ className = "", property1 = "Frame 433" }) => {
  return (
    <div
      className={[styles.testimonials, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.testimonialHeader}>
        <div className={styles.clientTestimonials}>Client Testimonials</div>
        <div className={styles.showMoreButton}>
          <a className={styles.showMore}>Show more</a>
          <Image
            className={styles.mdichevronUpIcon}
            width={26}
            height={26}
            alt=""
            src="/mdi_chevron-up.svg"
          />
        </div>
      </div>
      <div className={styles.component43}>
        <div className={styles.testimonialItem}>
          <TestimonialContent
            group20=""
            theGuidanceIReceivedHelped={`"The guidance I received helped me manage my stress and live a more balanced life."`}
          />
          <TestimonialContent
            group20=""
            theGuidanceIReceivedHelped={`"Therapy helped me build self-esteem and confidence that I never thought possible."`}
            theGuidanceIWidth="16.063rem"
          />
        </div>
        <div className={styles.testimonialItem1}>
          <Component1 property1="Frame 334" />
          <Component1 property1="Frame 334" />
        </div>
        <div className={styles.testimonialItem2}>
          <Component1 property1="Frame 334" />
          <Component1 property1="Frame 334" />
        </div>
        <div className={styles.testimonialItem3}>
          <Component1 property1="Frame 334" />
          <Component1 property1="Frame 334" />
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Testimonials;
