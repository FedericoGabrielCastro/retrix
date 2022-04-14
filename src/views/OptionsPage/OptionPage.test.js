import React from "react";
import { screen, render } from "@testing-library/react"

import OptionsPage from './OptionsPage'

describe('OptionsPage', () => {
    
    it('must display a title', () => {
        render( <OptionsPage /> )
        expect(screen.getByText(/OptionsPage/i)).toBeInTheDocument()
    });
});