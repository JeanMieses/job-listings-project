import ReactDom from 'react-dom';
import styles from './Header.module.css';

const Header = () => {
    return (<>
        {ReactDom.createPortal(<header className={styles.header}/>, document.getElementById('header'))}
    </>)
}

export default Header;