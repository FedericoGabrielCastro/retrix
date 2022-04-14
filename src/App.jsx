import React from 'react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import { CustomRoutes } from './routes/customRoutes'

/**
 * @returns {JSX.Element} Returns all provider and routes afeter initialize the app. 
 */
const App = () => {
    
    return (
        <Provider store={store} data-testid="appRender">
            <I18nextProvider i18n={i18next}>
                <CustomRoutes />
            </I18nextProvider>
        </Provider>
    )
}

export default App;
