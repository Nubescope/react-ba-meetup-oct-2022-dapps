import { FC } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by{' '}
        <span className={styles.logo}>
          <Image src="/underscope.png" alt="Underscope Logo" height={22} width={22} />
        </span>
        Underscope
      </a>
    </footer>
  )
}

export default Footer
