import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import InvoiceDetails from './components/InvoiceDetails/InvoiceDetails';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import InvoiceTable from './components/InvoiceTable/InvoiceTable';
import InvoiceTotals from './components/InvoiceTotals/InvoiceTotals';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <InvoiceDetails />
        <InvoiceForm />
        <InvoiceTable />
        <InvoiceTotals />
        <Footer />
      </main>
    </div>
  );
}

export default App;
