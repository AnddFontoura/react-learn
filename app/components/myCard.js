import styles from '../page.module.css'

export default function MyCard(props)
{
    return (
        <a
            href="/cities"
            className={styles.card}
            >
            <h2>
                {props.title} <span>-&gt;</span>
            </h2>
            <p>{props.description}</p>
        </a>
    );
}