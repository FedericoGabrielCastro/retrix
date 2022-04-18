import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from '../../styles/components/OptionsHomeStyle.module.css'

/**
 * @returns {JSX.Element} Display all options in home page.
 */
const OptionsHome = ({ title, path }) => {
    return (
        <div className={styles.content}>
            <Link to={path} className={styles.completeButton} data-testid="path">
                <h1 className={styles.titleBtn} data-testid="title"> {title} </h1>
                <span className={styles.decoreBtn}/>
            </Link>
        </div>
    )
}

export default OptionsHome