import { NavLink } from 'react-router-dom';

const Landing = () => {

    return(
        <div>
            <div>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <NavLink to="/home">Enter</NavLink>
            </div>
        </div>
    )
}

export default Landing;