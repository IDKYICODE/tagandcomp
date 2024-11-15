import React from 'react'
import './Page.css'
export default function Page() {
  return (
    <section className="page-section">
      <div className="page-image">
        <img src="./graph1.png" alt="Financial Growth Chart" />
      </div>
      <div className="page-content">
        <h1>Providing the best Chartered Accountancy Services!</h1>
        <p>
          Welcome to TAG & Co. Chartered Accountants, your trusted partner in financial excellence. Since our establishment in 2017, we've been committed to providing top-tier accounting, financial, and advisory services to clients across Hyderabad and beyond.
        </p>
        <button className="page-button">Contact us now ➔</button>
      </div>
    </section>
  )
}

