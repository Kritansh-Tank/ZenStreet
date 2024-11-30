import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const FrameComponent = ({
  className = "",
  frame7,
  frameDivPadding,
  frameDivMinWidth,
  frameDivAlignSelf,
  frameDivPadding1,
  frameDivWidth,
  frameDivFlex,
  frameDivWidth1,
  frameDivJustifyContent,
  frameDivPadding2,
  frameDivAlignSelf1,
  frameDivJustifyContent1,
  frameDivPadding3,
  profileImageMarginLeft,
  detailsContainerMinWidth,
  detailsContainerFlex,
  eXTRAOPTIONSAlignSelf,
  ellipseDivWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivPadding, frameDivMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      padding: frameDivPadding1,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivPadding1, frameDivWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      width: frameDivWidth1,
    };
  }, [frameDivFlex, frameDivWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
      padding: frameDivPadding2,
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivJustifyContent, frameDivPadding2, frameDivAlignSelf1]);

  const frameDiv4Style = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent1,
      padding: frameDivPadding3,
    };
  }, [frameDivJustifyContent1, frameDivPadding3]);

  const profileImageStyle = useMemo(() => {
    return {
      marginLeft: profileImageMarginLeft,
    };
  }, [profileImageMarginLeft]);

  const detailsContainerStyle = useMemo(() => {
    return {
      minWidth: detailsContainerMinWidth,
      flex: detailsContainerFlex,
    };
  }, [detailsContainerMinWidth, detailsContainerFlex]);

  const eXTRAOPTIONSStyle = useMemo(() => {
    return {
      alignSelf: eXTRAOPTIONSAlignSelf,
    };
  }, [eXTRAOPTIONSAlignSelf]);

  const ellipseDivStyle = useMemo(() => {
    return {
      width: ellipseDivWidth,
    };
  }, [ellipseDivWidth]);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/sessions");
  };

  const handleNavigation1 = () => {
    router.push("/");
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  const [isLinkVisible, setIsLinkVisible] = useState(false);

  const handleCopyButtonClick = () => {
    setIsLinkVisible(true);
  };

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <div className={styles.frameGroup} style={frameDiv2Style}>
          <div className={styles.frameContainer} style={frameDiv3Style}>
            <div className={styles.frameDiv}>
              <div className={styles.kickWrapper}>
                <Image
                  className={styles.kickIcon}
                  onClick={handleNavigation1}
                  loading="lazy"
                  width={23}
                  height={20}
                  alt=""
                  src="/Frame 239.svg"
                />
              </div>
              <div className={styles.backWrapper}>
                <a className={styles.back}>Back</a>
              </div>
            </div>
          </div>
          <div className={styles.profileImageParent} style={frameDiv4Style}>
            <div className={styles.profileImage} style={profileImageStyle} />
            <div
              className={styles.detailsContainer}
              style={detailsContainerStyle}
            >
              <div className={styles.bioContainer}>
                <div className={styles.experienceContainer}>
                  <div className={styles.yearsIcon} />
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.frameParent4}>
                          <div className={styles.frameParent5}>
                            <Image
                              className={styles.frameChild}
                              loading="lazy"
                              width={238}
                              height={238}
                              alt=""
                              src="/Frame 7.svg"
                            />
                            <div
                              className={
                                styles.materialSymbolsshareOutlineParent
                              }
                            >
                              <Image
                                className={
                                  styles.materialSymbolsshareOutlineIcon
                                }
                                loading="lazy"
                                width={24}
                                height={24}
                                alt=""
                                src="/material-symbols_share-outline.svg"
                              />
                              <div className={styles.swethaVarma}>
                                Swetha Varma
                              </div>
                              <Image
                                className={styles.mdiverifiedIcon}
                                loading="lazy"
                                width={24}
                                height={24}
                                alt=""
                                src="/mdi_verified.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.consultantClinicalPsychologi}>
                            Consultant Clinical Psychologist
                          </div>
                        </div>
                        <div className={styles.yearsOfExperience}>
                          10+ Years of experience
                        </div>
                      </div>
                      <div className={styles.sessionPriceContainer}>
                        <div className={styles.startsAt}>Starts at</div>
                        <div className={styles.frameParent6}>
                          <div className={styles.priceWrapper}>
                            <div className={styles.price}>1,200</div>
                          </div>
                          <div className={styles.session}>/ Session</div>
                        </div>
                      </div>
                      <div className={styles.locationContainer}>
                        <Image
                          className={styles.carbonlocationIcon}
                          loading="lazy"
                          width={24}
                          height={24}
                          alt=""
                          src="/carbon_location.svg"
                        />
                        <div className={styles.blockA2Delhi}>
                          Block A2, Delhi
                        </div>
                      </div>
                    </div>
                    <Image
                      className={styles.frameItem}
                      onClick={togglePopup}
                      loading="lazy"
                      width={59}
                      height={59}
                      alt=""
                      src="/Frame 238.svg"
                    />
                  </div>
                </div>
                <button
                  className={styles.extraOptions}
                  style={eXTRAOPTIONSStyle}
                  onClick={handleNavigation}
                >
                  <div className={styles.bookSession}>Book session</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.shareContainer}>
              <div className={styles.shareHeader}>
                <span className={styles.shareShare}>Share</span>
                {isLinkVisible && (
                  <button
                    className={styles.linkBtn}
                    id="linkBtn"
                    style={{ display: "block" }}
                  >
                    Link copied!
                  </button>
                )}
                <button className={styles.closeBtn} onClick={togglePopup}>✕</button>
              </div>
              <div className={styles.shareOptions}>
                <div className={styles.option}>
                  <Image
                    loading="lazy"
                    width={35}
                    height={35}
                    alt="Facebook"
                    src="/la_facebook.svg"
                  />
                  <span className={styles.shareFacebook}>Facebook</span>
                </div>
                <div className={styles.option}>
                  <Image
                    loading="lazy"
                    width={32}
                    height={32}
                    alt="WhatsApp"
                    src="/ic_baseline-whatsapp.svg"
                  />
                  <span className={styles.shareWhatsApp}>WhatsApp</span>
                </div>
                <div className={styles.option}>
                  <Image
                    loading="lazy"
                    width={32}
                    height={32}
                    alt="Twitter"
                    src="/akar-icons_x-fill.svg"
                  />
                  <span className={styles.shareTwitter}>Twitter</span>
                </div>
                <div className={styles.option}>
                  <Image
                    loading="lazy"
                    width={32}
                    height={32}
                    alt="Email"
                    src="/ic_outline-email.svg"
                  />
                  <span className={styles.shareEmail}>Mail</span>
                </div>
              </div>

              <div className={styles.pageLink}>
                <span className={styles.sharePage}>Page Link</span>
                <div className={styles.linkContainer}>
                  <input
                    type="text"
                    readOnly
                    value="http://www.therapist-swetha.com/profile/view"
                  />
                  <button
                    className={styles.copyBtn}
                    id="copyBtn"
                    onClick={handleCopyButtonClick}
                  >
                    Copy link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.frameInner} style={ellipseDivStyle} />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame7: PropTypes.string.isRequired,

  /** Style props */
  frameDivPadding: PropTypes.string,
  frameDivMinWidth: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  frameDivPadding1: PropTypes.string,
  frameDivWidth: PropTypes.string,
  frameDivFlex: PropTypes.string,
  frameDivWidth1: PropTypes.string,
  frameDivJustifyContent: PropTypes.string,
  frameDivPadding2: PropTypes.string,
  frameDivAlignSelf1: PropTypes.string,
  frameDivJustifyContent1: PropTypes.string,
  frameDivPadding3: PropTypes.string,
  profileImageMarginLeft: PropTypes.string,
  detailsContainerMinWidth: PropTypes.string,
  detailsContainerFlex: PropTypes.string,
  eXTRAOPTIONSAlignSelf: PropTypes.string,
  ellipseDivWidth: PropTypes.string,
};

export default FrameComponent;
