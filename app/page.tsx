import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Image from "next/image";
import SocialList from "./components/SocialList/SocialList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <main>
        <Header/>
        
        <div className={styles.content}>
          <div className={styles.about}>
            <AboutMe />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/me.jpeg"
              width={350}
              height={350}
              alt="Picture of the author"
              layout="responsive"
            />
          </div>

          <div className={styles.social}>
            <SocialList />
          </div>
        </div>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Even Soulard. All rights reserved.</span>
      </footer>
    </div>
  );
}
