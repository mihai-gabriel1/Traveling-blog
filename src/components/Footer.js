const Footer = () => {
  const githubLogo = (
    <a href="https://github.com/mihai-gabriel1" target="_blank">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="github.com logo"
        className="github-logo"
      />
    </a>
  );

  return (
    <div className="footer">
      <p>Copyright by Mihai Gabriel</p>
      {githubLogo}
    </div>
  );
};

export default Footer;
