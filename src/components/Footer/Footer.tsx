import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/JRSprog/Jeffrey-Salabao",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/jeffrey.romero.salabao",
    icon: "fab fa-facebook-f",
    label: "Facebook",
  },
  {
    href: "mailto:salabaojeffrey024@gmail.com",
    icon: "fab fa-google",
    label: "Email",
  },
  {
    href: "tel:+639304314347",
    icon: "fas fa-mobile-alt",
    label: "Phone",
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4">Jeffrey</h4>
            <p>
              Inspiring Full Stack Web Developer specializing in PHP
              (Laravel), JavaScript, MySQL, and modern CSS frameworks.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="mb-4">Connect With Me</h4>
            <div className="d-flex">
              {SOCIAL_LINKS.map((link) => (
                <a
                  href={link.href}
                  className={`${styles.socialLink} me-3`}
                  key={link.label}
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 bg-light" />
        <div className="text-center">
          <p>&copy; Jeffrey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
