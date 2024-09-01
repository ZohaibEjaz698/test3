import styles from './blog.module.css'

function Blog(props){
    return(
        <div className={styles.blog}>
            <img src={props.img} alt="" />
            <h3>{props.text}</h3>
            <p className="date">December 21st,2023</p>
            <p>{props.p}</p>
            <a href="#">Read More<i class='bx bx-right-arrow-alt'></i></a>
        </div>
    )
}
export default Blog