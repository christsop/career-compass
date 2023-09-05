import classNames from 'classnames';

const Footer = ({ className }) => (
  <footer className={classNames('footer', className)}>
    <div className="content has-text-centered">
      <p>
        WE'RE HERE TO HELP YOU NAVIGATE YOUR CAREER JOURNEY. <br />
        IF YOU HAVE ANY QUESTIONS, FEEL FREE TO REACH OUT TO US:
      </p>
      <div className="contact">
        <span>
          Email:{' '}
          <a href="mailto:support@careercompassapp.com">
            support@careercompassapp.com
          </a>
        </span>
        <span className="dot" />
        <span>Phone: +1 (555) 123-4567</span>
        <span className="dot" />
        <span>Address: 123 Career Way, City, State 12345</span>
      </div>
      <div className="copyright">
        <p>
          Your privacy is important to us. Please read our{' '}
          <a href="link-to-privacy-policy">Privacy Policy</a> to understand how
          we collect, use, and protect your personal information.
        </p>
        <p>
          By using Career Compass, you agree to our{' '}
          <a href="link-to-terms-of-service">Terms of Service</a>. Please review
          them carefully before using our app.
        </p>
        <p>
          Career Compass is dedicated to helping you discover your professional
          path and achieve your career goals. Learn more about us{' '}
          <a href="link-to-about-us">here</a>.
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()} Career Compass. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
