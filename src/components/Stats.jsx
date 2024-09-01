import styles from './stats.module.css'

function Stats(props) {
    return(
        <div className={styles.stats}>
            <img src={props.img} alt="" />
            <h2>{props.text} +</h2>
            <p>{props.p}</p>
        </div>
    )
}
export default Stats