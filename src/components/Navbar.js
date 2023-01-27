import styles from './Navbar.module.css';
function Navbar(){
    return(
        <nav>
            <div className={styles.titleDiv}>
                <strong>Weather App</strong>
            </div>
            <div className={styles.elements}>
                <ol>Forecast</ol>
                <ol>Add Cities</ol>
                <ol>Notification</ol>
            </div>
        </nav>
    )
}

export default Navbar;
