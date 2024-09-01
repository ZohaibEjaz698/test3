import styles from './card.module.css'

function Card(props){
    return(
        <div className={styles.card}>
            <div className="pic">
                <img src={props.imgSrc} alt="" className={styles.logo}/>
                <h3 className={styles.h1}>{props.text}</h3>
                <p className={styles.p}>{props.p}</p> 
                <a href="#" className={styles.read}>Read More<i class='bx bx-right-arrow-alt'></i></a>
            </div>
        </div>
    )
}
export default Card