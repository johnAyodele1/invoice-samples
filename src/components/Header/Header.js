import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.trialBanner}>
                You have 30 days left in your trial, which includes all features. <a href="#" className={styles.trialLink}>Choose a plan to buy</a>
            </div>
            <header className={styles.appHeader}>
                <div className={styles.container}>
                    <div className={styles.headerContent}>
                        <div className={styles.leftSection}>
                            <div className={styles.logo}>
                                <span className={styles.logoText}>pet haven</span>
                                <span className="material-icons">expand_more</span>
                            </div>
                            <nav className={styles.navigation}>
                                <a href="#" className={styles.navLink}>Dashboard</a>
                                <a href="#" className={styles.navLink}>Business</a>
                                <a href="#" className={styles.navLink}>Accounting</a>
                                <a href="#" className={styles.navLink}>Projects</a>
                                <a href="#" className={styles.navLink}>Contacts</a>
                            </nav>
                        </div>
                        <div className={styles.rightSection}>
                            <button className={styles.iconButton}><span className="material-icons">add</span></button>
                            <button className={styles.iconButton}><span className="material-icons">search</span></button>
                            <button className={styles.iconButton}><span className="material-icons">notifications</span></button>
                            <div className={styles.userAvatar}>
                                JA
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
