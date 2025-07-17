import React from 'react';
import styles from './InvoiceDetails.module.css';

const InvoiceDetails = () => {
    return (
        <div className={styles.invoiceDetailsContainer}>
            <div className={styles.header}>
                <div>
                    <span className={styles.breadcrumb}>Sales overview &gt; Invoices</span>
                    <h1 className={styles.title}>
                        New invoice <span className={styles.draftBadge}>Draft</span>
                    </h1>
                </div>
                <div className={styles.actions}>
                    <button className={styles.actionButton}>
                        <span className="material-icons">visibility</span>
                        <span>Preview</span>
                    </button>
                    <button className={styles.actionButton}>Save &amp; close</button>
                    <button className={styles.approveButton}>Approve &amp; email</button>
                    <button className={styles.iconButton}><span className="material-icons">more_vert</span></button>
                </div>
            </div>
            <div className={styles.paymentBanner}>
                <div>
                    <p className={styles.bannerTitle}>Hey John, set up new payment options</p>
                    <p className={styles.bannerText}>Credit cards, debit cards, Apple Pay, Google Pay, PayPal, automatic payments and more.</p>
                </div>
                <div className={styles.paymentLogos}>
                    <div className={styles.logoGroup}>
                        <img alt="Visa logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_nxaV0cmNxmGuvELE6tK6uh4aM1Afuirm3P254HyZgCKC2cZz5xYEMRVOu9bFu078w1XLy3XUr1yTqO0qYZQi9lCdmShHPBzdHnlQ8_eqV50LsY9QDn8dKwKA-peMekC9KRkQQQdcSrELS0INoD3WvQ2cPr_J4pWnK9WZSV8TcHRUSKLKnoRiU8QVXXuCDeAWxKmwMF8PgvbsDfCzI9S-3_G19chfR5frEvTYaVnA7Z47RpkYJBKsI0_h4S2oZ87uUVDhOHoS8M"/>
                        <img alt="Mastercard logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh8sFGr3Zvv7Hf-74nuD-sQzENcjf1aNrODysVP-l3JaEx_H9rWEU5FYaMF9Y3jFIRLqt3jez-667QxfyZHVk9PAdtSMAOtVI_ReyN5UjVB2UFFCds5HQEhW5Mi4KQ7oGaTDPMUUEEDRHPKcLX_w4N1OwRmpsYAOtdMwWcq3UZGlH6qa73xyViETjukjVZIaKE2GdrciuRPlKFySiTpaFyOQSumaIoX532XDqE8Y0_nbfF-93BmEHLIgNjHxdy4xF-XRKZvI4stl0"/>
                        <img alt="American Express logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrZqgRn4bs6hWFXZudG3cxdin78GWMxaQpptqsVX19yBOE40WnYtu34anB4M242trPrt52ZtJOZPGFAt0LW6AEAUfr5nrPnRpBexyJUesr3EH0ZrKSyOdxDqvEfi0Q-Cnx0cuDS_5ooIZknYDqPfgqsAnpHBqsuQLY-4ErxoFrOTtGApP8bWe112mCcCeyGp5ET23msUrz-LTw5jjM4TCsxJxskKLlPfS0-vIEuPB9O9YgKrAC6kALgltIX0GfsqwvglSn64oa6ok"/>
                    </div>
                    <button className={styles.addPaymentsButton}>Add online payments</button>
                    <button><span className="material-icons">more_vert</span></button>
                </div>
            </div>
            <div className={styles.templateBanner}>
                <p className={styles.templateText}>Set up invoice template</p>
                <div className={styles.templateActions}>
                    <button className={styles.skipButton}>Skip for now</button>
                    <button className={styles.addDetailsButton}>Add details</button>
                    <button className={styles.closeButton}><span className="material-icons">close</span></button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;
