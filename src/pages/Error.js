import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error" />
        <h3>Ohh! page not found</h3>
        <p>We can't find the page you are looking for</p>
        <Link to="/">go back</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
