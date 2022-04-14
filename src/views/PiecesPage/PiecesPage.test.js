import React from "react";
import { screen, render } from "@testing-library/react"

import PiecesPage from './PiecesPage'

describe('PiecesPage', () => {
    
    it('must display a title', () => {
        render( <PiecesPage /> )
        expect(screen.getByText(/PiecesPage/i)).toBeInTheDocument()
    });
});