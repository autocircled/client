import { Link } from "react-router-dom";
import img from '../assets/images/not-found.svg';
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found" />
                <h3>Ohh! Not Found</h3>
                <p>What you are looking for not found!</p>
                <Link to='/'>Go back</Link>
            </div>
        </Wrapper>
    )
}
export default Error
