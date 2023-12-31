import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { userContext, UserStorage } from '../userContext';

const Header = () => {
    const { data, userLogout } = React.useContext(userContext);

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                {data ? (
                    <Link className={styles.login} to="conta">
                        {data.username}
                    </Link>
                ) : (
                    <Link className={styles.login} to="login">
                        Login / Criar
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
