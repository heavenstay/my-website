import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h2>
        I'm Even Soulard.
      </h2>
      <h2>
        I'm a Full Stack Developer based in Nantes.
      </h2>
      <p>
        I'm working at Eviden, an IT services company where <strong>I develop cross-platform applications</strong> for Veolia. 
      </p>
      <p>
        <strong>I'm the founder of <a href="https://driing.cocktail.app">Cocktail By Driing</a></strong>, a mobile application that's helps you create delicious cocktail from home. 
      </p>
      <p>
        <strong>I'm freelancing on <a href="https://www.upwork.com/freelancers/~016128f4344640e4c8">Upwork</a></strong>, on nights and weekends. My main stacks are the following:
      </p>
      <ul>
        <li><strong>Flutter</strong> for mobile development</li>
        <li><strong>Angular/Ionic/Capacitor</strong> for cross-platform development </li>
        <li><strong>Java Spring and Node.Js</strong> for backend and API</li>
        <li><strong>PostgreSQL</strong> for database</li>
        <li><strong>PostGIS</strong> for geospatial</li>
        <li><strong>AWS and Vercel</strong> for deployment</li>
      </ul>
      <p>
        <strong>I also write a weekly newsletter on <a href="https://onleveling.substack.com/">Substack</a></strong> about what's in my head as I try to level up in this world. 
      </p>
      <p>
        I've worked on multiple projects <strong>from startups to big companies</strong>, on solo or with a team that reached 20 people. I like to work on Agile methodology but I'm opened to work differently if it makes sense. 
      </p>
      <p>
        <strong>I have a lot of experience on map implementation and cross-platform apps.</strong> I've optimized a lot of applications and continue to do it on daily basis. You can see how much I code on <strong><a href="https://wakatime.com/@heaven_stay">Wakatime</a></strong>.
      </p>
      <p>
        <strong>I have the project to move to Montreal in May 2025</strong> and <strong>to work in the finance field</strong>. 
      </p>
      <p>
        If you'd like to get in touch, <strong>say hi at <a href="mailto:even.soulard.pro@icloud.com">even.soulard.pro@icloud.com.</a></strong>
      </p>
    </div>
  );
}
