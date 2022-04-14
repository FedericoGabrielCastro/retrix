import React from "react";
import { screen, render } from "@testing-library/react"

import LazyLoadingSpinner from './LazyLoadingSpinner'

describe('LazyLoadingSpinner', () => {
    
    it('must display a title', () => {
        render( <LazyLoadingSpinner /> )
        expect(screen.getByText(/LazyLoadingSpinner/i)).toBeInTheDocument()
    });
});