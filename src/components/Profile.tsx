import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Alexandrodasilva.png" alt="Alexandro silva" />
            <div>
                <strong>Alexandro silva</strong>
                <p>
                    level 1
                </p>
            </div>
        </div>
    )
}