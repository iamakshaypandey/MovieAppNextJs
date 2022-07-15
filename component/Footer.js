import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className={`position-sticky bottom-0 ${styles.footer}`}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Footertext}
        >
          Powered by Akshay Pandey{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Footer