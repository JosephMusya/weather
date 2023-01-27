import styles from './Homepage.module.css'
function Homepage(){
    return(
        <main>
            <div className={styles.topDiv}>
                <div className={styles.temperature}>
                    <div>
                        <h2>Temperature</h2>
                    </div>                    
                    <hr />
                    <p>23.6</p>                                        
                </div>
                <div className={styles.humidity}>
                    <div>
                        <h2>Humidity</h2>
                    </div> 
                    <hr />
                    <p>56</p>
                </div>
            </div>                       
        </main>     
    )
}

export default Homepage;
