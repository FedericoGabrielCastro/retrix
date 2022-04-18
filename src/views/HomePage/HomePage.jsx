import React from 'react'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import styles from '../../styles/views/HomePageStyle.module.css'
// @ts-ignore
import titleApp from '../../assets/images/titleapp.png'

import OptionsPage from '../../components/optionsHome/OptionsHome'

/**
 * @returns {JSX.Element} Returns home page
 */
const HomePage = () => {
    
    const [t] = useTranslation("homePage")
    
    /**
     * Manage all options data in the HomePage
     * @type {Array<Object>} 
     */
    const optPage = [
        { title: t(`translations.opt-title-game`), path: "/game"},
        { title: t(`translations.opt-title-record`), path: "/records"},
        { title: t(`translations.opt-title-pieces`), path: "/pieces"},
        { title: t(`translations.opt-title-options`), path: "/options"},
        { title: "Tutorial", path: "/tutorial"}
    ]
    
    return (
        <main className={styles.content} data-testid="homePageRender">
            <section className={styles.titleApp}>
                <img src={titleApp} className={styles.titleAppImg} alt="titleApp"/>   
            </section>
            <aside className={styles.optionsGame}>
                {
                    optPage.map((item, index) => {
                        return (
                            <OptionsPage key={index}
                                // @ts-ignore
                                path={item.path}
                                // @ts-ignore
                                title={item.title}
                            />
                        )
                    })
                }
            </aside>
        </main>
    )
}

export default HomePage