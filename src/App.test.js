import React from "react";
import { screen, render } from "@testing-library/react"

import App from "./App"


describe('App Render', () => {

    it('must render the App', () => {
        render( <App /> )

        const element = screen.queryByTestId('appRender')

        expect(element).toBeDefined()
    });
})