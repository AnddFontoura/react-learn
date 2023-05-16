import styles from '../page.module.css'

export default function MyCard(props)
{
    return (
        <a
            href={props.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2>
                {props.title} <span>-&gt;</span>
            </h2>
            <p>{props.description}</p>
        </a>
    );
}