import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h2>I'm Even Soulard.</h2>
      <h2>I'm a software developer based in Montreal.</h2>

      <p>Over the past few years, <strong>I've built a solid foundation through multiple paths:</strong></p>
      <ul>
        <li><strong>5 years of practical learning</strong> that led me to earn a <strong><a href="...">Master's degree in Computer Science</a></strong></li>
        <li><strong>4 years at <a href="https://atos.net/en/">Atos</a></strong> – working on high-impact applications for <strong><a href="https://www.veolia.com/en">Veolia</a></strong>, where I gained deep experience in enterprise-grade software.</li>
        <li><strong>Freelance work</strong> – Led small teams, delivered mobile apps, and deployed scalable, production-ready products for startups.</li>
        <li><strong>Startup internships</strong> – Built and shipped a Shopify-like platform MVP in under two months.</li>
      </ul>

      <p><strong>I'm the founder of:</strong></p>
      <ul>
        <li><strong><a href="https://driing.cocktail.app">Cocktail By Driing</a></strong> – a mobile app that helps people craft great cocktails at home.</li>
        <li><strong><a href="https://smartfolio.com">SmartFolio</a></strong> – an AI-powered tool to visualize and track portfolio movements.</li>
        <li><strong><a href="https://onleveling.substack.com">OnLeveling</a></strong> – a weekly newsletter about what's in my head as I try to level up in this world.</li>
      </ul>

      <p>
        <strong>Hiring in Montreal? Building something ambitious?</strong> Let’s connect: <strong><a href="mailto:even.soulard.pro@icloud.com">even.soulard.pro@icloud.com</a></strong>
      </p>
    </div>
  );
}
