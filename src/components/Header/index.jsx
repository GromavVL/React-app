import userIcon from './logoUser.jpg'
import logo from './vite.svg'

function Header(props) {
    const {isLogin} = props;

    return (
        <div>
            <img src={logo} alt="logo" />
            {isLogin ? (
                <img src={userIcon} alt="user" />
            ) : (
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            )}
        </div>
    );
}

export default Header;