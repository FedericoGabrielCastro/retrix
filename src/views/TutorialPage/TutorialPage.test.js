import React from "react";
import { screen, render } from "@testing-library/react"

import TutorialPage from './TutorialPage'

describe('TutorialPage', () => {
    
    it('must display a title', () => {
        render( <TutorialPage /> )
        expect(screen.getByText(/TutorialPage/i)).toBeInTheDocument()
    });
});