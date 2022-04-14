import React from "react";
import { screen, render } from "@testing-library/react"

import GamePage from './GamePage'

describe('GamePage', () => {
    
    it('must display a title', () => {
        render( <GamePage /> )
        expect(screen.getByText(/gamepage/i)).toBeInTheDocument()
    });
});