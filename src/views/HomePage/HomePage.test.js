import React from "react";
import { screen, render } from "@testing-library/react"

import HomePage from './HomePage'

describe('HomePage', () => {
    
    it('must display a title', () => {
        render( <HomePage /> )
        expect(screen.getByText(/homePage/i)).toBeInTheDocument()
    });
});