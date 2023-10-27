const Footer = () => {

  const todayDate = new Date();
  return (
    <div className="footer">
      Crafted With ❤️ By 
      <a href="https://www.linkedin.com/in/mridul-shyam-sukha-001641234" target="_blank" title="Let's connect on LinkedIn">
          - Mridul Shyam Sukha
          </a>
          <i className="fa-solid fa-copyright"></i>
        {todayDate.getFullYear()}
        <strong>
          FoodyZ <span> All Rights Reserved </span>
        </strong>
    </div>
  );
};
  export default Footer;