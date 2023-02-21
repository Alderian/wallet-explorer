import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import InstructionsComponent from '../components/InstructionsComponent';

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
};

export default Home;
