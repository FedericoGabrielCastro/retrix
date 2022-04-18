import React from 'react'
import { I18nextProvider } from "react-i18next"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import i18next from './i18n/i18nProvider'
import { store } from './redux/store'
import { CustomRoutes } from './routes/customRoutes'

import CustomBackground from './components/customBackground/customBackground'

/**
 * @returns {JSX.Element} Returns all provider and routes afeter initialize the app. 
 */
const App = () => {
    
    return (
        <Provider store={store} data-testid="appRender">
            <BrowserRouter>
                <CustomBackground />
                <I18nextProvider i18n={i18next}>
                    <CustomRoutes />
                </I18nextProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
