import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
// import "../assets/css/landing.scss";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Sed lorem nisl, tincidunt dapibus tellus vel, feugiat posuere justo.
            Praesent quis auctor enim, et bibendum nisi. Pellentesque eget metus
            lacinia, mollis massa non, egestas ligula.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
