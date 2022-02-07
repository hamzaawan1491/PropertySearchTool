import React from 'react';
import { render } from '@testing-library/react';
import { TableRow } from 'components/TableRow/TableRow';
import { IList, IObjectItem } from 'shared/interfaces';

test('Table Row Case', () => {
    const list: IList = { id: 1, name: 'John', status: 'Single', gender: 'Male' };
    const rowValues: IObjectItem[] = [{ name: list.name, value: list.name }];

    const tableRow = document.createElement('tr');
    const { container } = render(<TableRow list={list} rowValues={rowValues}>Hello</TableRow>, {
        container: document.body.appendChild(tableRow)
    });

    expect(container).toBeTruthy();
});

test('Table Row Case with empty array', () => {
    const list: IList = { id: 1, name: 'John', status: 'Single', gender: 'Male' };
    const rowValues: IObjectItem[] = [];

    expect(render(<TableRow list={list} rowValues={rowValues}>Hello</TableRow>)).not.toBeNull();
});