import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.jpmorgan.com/global" target="_blank" rel="noopener noreferrer">
          J.P. Morgan
        </a>
        <span className="ms-1">&copy; 2023 Shield.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.jpmorgan.com/global" target="_blank" rel="noopener noreferrer">
          J.P. Morgan Chase &amp; Co.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
