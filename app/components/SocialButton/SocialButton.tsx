import styles from "./SocialButton.module.scss";

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  title: string;
}

export default function SocialButton({ icon, href, title }: SocialButtonProps) {
  return (
    <a className={styles.socialButton} href={href}>
      {icon}
      <span>{title}</span>
    </a>
  );
}
