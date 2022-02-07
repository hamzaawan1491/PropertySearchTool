import React from 'react';
import { render } from '@testing-library/react';
import { Error } from 'components/Error/Error';

describe('Error component test -->>', () => {

    // pass test case with react testing library
    test('Error Pass Case', () => {
        render(<Error error={{ message: 'Display Error' }} />);
    });
 
});