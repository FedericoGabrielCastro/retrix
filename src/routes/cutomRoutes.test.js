import React from "react";
import { screen, render } from "@testing-library/react"

import { manageRoutes } from "./customRoutes";

import { CustomRoutes } from "./customRoutes";

describe('CustomRoutes', () => {

    it('must render CustomPage', () => {
        render( <CustomRoutes/> )

        const element = screen.queryByTestId('browserRouter')

        expect(element).toBeDefined()
    });

    it('ManageRoutes check data route', () => {
        expect(manageRoutes).toEqual(
            expect.arrayContaining([
                expect.objectContaining({path: "/"}),
                expect.objectContaining({path: "/game"}),
                expect.objectContaining({path: "/options"}),
                expect.objectContaining({path: "/pieces"}),
                expect.objectContaining({path: "/records"}),
                expect.objectContaining({path: "/tutorial"})
            ])
        )
    })
});
