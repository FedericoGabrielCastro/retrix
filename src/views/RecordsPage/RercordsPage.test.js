import React from "react";
import { screen, render } from "@testing-library/react"

import RecordsPage from './RecordsPage'

describe('RecordsPage', () => {
    
    it('must display a title', () => {
        render( <RecordsPage /> )
        expect(screen.getByText(/RecordsPage/i)).toBeInTheDocument()
    });
});