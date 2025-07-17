import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.checkboxText}>Send via Xero Network</span>
                </label>
            </div>
            <div className={styles.setupGuide}>
                <button className={styles.setupButton}>
                    <span className="material-icons">help_outline</span>
                    <span>Setup Guide</span>
                </button>
            </div>
        </>
    );
};

export default Footer;
