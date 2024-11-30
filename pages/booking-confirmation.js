import Image from "next/image";
import Structure from "../components/structure";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import styles from "./booking-confirmation.module.css";
import { useRouter } from "next/router";

const BookingConfirmation = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/slot");
  };

  const handleNavigationNext = () => {
    router.push("/confirmed");
  };

  return (
    <div className={styles.bookingConfirmation1}>
      <div
        className={styles.structure}
        onClick={handleNavigation}
        style={{ cursor: "pointer" }}
      >
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={26}
          height={23}
          alt=""
          src="/Frame 239.svg"
        />
      </div>
      <section className={styles.structure1}>
        <div className={styles.structure2}>
          <Structure />
          <div className={styles.userFormParent}>
            <div className={styles.userForm}>
              <div className={styles.userFields}>
                <div className={styles.nameField}>
                  <div className={styles.nameInputs}>
                    <div className={styles.nameEntry}>
                      <FrameComponent2 property1="Default" />
                      <FrameComponent3 property1="Default" />
                    </div>
                    <FrameComponent4 property1="Default" />
                    <div className={styles.contactDetails}>
                      <div className={styles.countryCode}>
                        <div className={styles.countryIcons}>
                          <Image
                            className={styles.twemojiflagIndiaIcon}
                            width={24}
                            height={24}
                            alt=""
                            src="/twemoji_flag-india.svg"
                          />
                          <Image
                            className={styles.mdichevronUpIcon}
                            width={24}
                            height={24}
                            alt=""
                            src="/mdi_chevron-up.svg"
                          />
                        </div>
                        <input
                          className={styles.blankSpace}
                          placeholder="+91 9876543210"
                          type="text"
                        />
                      </div>
                      <div className={styles.iYouWillContainer}>
                        <i className={styles.i}>i.</i>
                        <span className={styles.youWillReceive}>
                          {" "}
                          You will receive booking details on WhatsApp
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.referral}>
                    <div className={styles.haveYouBeen}>
                      Have you been referred by your employer ?
                    </div>
                    <div className={styles.companyDetails}>
                      <div className={styles.partnerInput}>
                        <input
                          type="checkbox"
                          className={styles.partnerInputChild}
                        />
                        <div className={styles.yesIAm}>
                          Yes, I am employed under a partnering company
                        </div>
                      </div>
                      <div className={styles.companyNameInput}>
                        <i className={styles.partneringCompanyName}>
                          "Partnering Company Name or Company ID"
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.bookButton} onClick={handleNavigationNext}>
                <div className={styles.bookSession}>Book session</div>
              </button>
            </div>
            <button className={styles.verification}>
              <div className={styles.verify}> Verify</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirmation;
