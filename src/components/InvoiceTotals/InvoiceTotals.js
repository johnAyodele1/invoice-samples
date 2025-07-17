import React from 'react';
import styles from './InvoiceTotals.module.css';

const InvoiceTotals = () => {
    return (
        <div className={styles.totalsContainer}>
            <div className={styles.totalsWrapper}>
                <div className={styles.row}>
                    <span>Subtotal</span>
                    <span>0.00</span>
                </div>
                <div className={styles.row}>
                    <span>Total tax</span>
                    <span>0.00</span>
                </div>
                <div className={`${styles.row} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span>0.00</span>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTotals;
