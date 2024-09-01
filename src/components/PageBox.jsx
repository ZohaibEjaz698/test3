import styles from './page.module.css'

function Page(props){
    return(
        <div className={styles.box}>
        <h1>{props.text}</h1>
        <p><a href="#">Home</a> <span><i class='bx bx-chevron-right'></i></span> {props.p}</p>
        </div>
    )
}
export default Page