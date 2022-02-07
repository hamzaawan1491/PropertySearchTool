import React from 'react';
import { render } from '@testing-library/react';
import { LoadResult } from '../LoadResult';

import "@testing-library/jest-dom/extend-expect";

test('LoadResult component render', () => {
    render(
            <LoadResult />
    );
});