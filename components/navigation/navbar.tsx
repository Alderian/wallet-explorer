import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href='https://alchemy.com/?a=create-web3-dapp' target={'_blank'} rel='noreferrer'>
        <Image
          alt=''
          className={styles.alchemy_logo}
          width='128'
          height='40'
          src='/alchemy_logo.svg'
        />
      </a>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
