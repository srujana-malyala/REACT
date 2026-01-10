
import "./footer.css"
import { footMenu, footSocial } from "./footerData";

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand + Subscribe */}
        <div className="footer-brand">
          <h2>Tech-Shop</h2>
          <p>
            Subscribe to our Email alerts to receive
            early discount offers, and new products info.
          </p>

          <input type="email" placeholder="Email Address*" />
          <button>Subscribe</button>
        </div>

        {/* Dynamic Footer Menus */}
        {footMenu.map((section) => (
          <div className="footer-links" key={section.id}>
            <h3>{section.title}</h3>
            <ul>
              {section.menu.map((item) => (
                <li key={item.id}>{item.link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>2025 | All Rights Reserved ©.</p>

        <div className="social-icons">
          {footSocial.map((social) => (
            <span key={social.id}>{social.icon}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};