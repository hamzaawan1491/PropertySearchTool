import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from 'components/Loading/Loading';

test('Loading Pass Case', () => {
    render(<Loading />);
});

test('Loading not Null case', () => {
    expect(<Loading flag={true} />).not.toBeNull();
});