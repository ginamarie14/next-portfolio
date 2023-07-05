"use client"
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© Gina Marie Enriquez. All rights reserved.</div>
      <div>
        <Image src="/LI-In-Bug.png" width={15.875} height={13.5} alt=""/>
      </div>
    </div>
  )
}

export default Footer