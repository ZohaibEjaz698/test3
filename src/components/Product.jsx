import styles from './service.module.css'

function Product(props){
    return(
       <div className={styles.image}>
         <img src={props.img} alt="" className={styles.img} />
         <div className={styles.content}>
            <h1>{props.text}</h1>
            <p>{props.p}</p>
         </div>
       </div>
    )
}
export default Product