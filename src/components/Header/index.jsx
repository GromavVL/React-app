import userIcon from './logoUser.jpg'
import logo from './vite.svg'
import styles from './Header.module.css'


function Header(props) {
    const {isLogin} = props;

    return (
        <header className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            {isLogin ? (
                <img className={styles.userImg} src={userIcon} alt="user" />
            ) : (
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            )}
        </header>
    );
}

export default Header;