import React from "react";
import { screen, render } from "@testing-library/react"

import ErrorPage from "./ErrorPage"

describe('Error page', () => {
    
    it('must display a title', () => {
        render( <ErrorPage /> )
        expect(screen.getByText(/errorpage/i)).toBeInTheDocument()
    });
});