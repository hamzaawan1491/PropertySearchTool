import React, { FC } from 'react';
import 'styles/ListItem.css';

// interface declaration
import { ITableRow, IObjectItem } from 'shared/interfaces';

// React function
export const TableRow:FC<ITableRow | any> = (props) => {

    const { rowValues, list } = props;

    if(rowValues?.length)
        return(

            rowValues.map((entity: IObjectItem, index: number) => (
                <td
                    style={{ width: `${100 / 3}%`, textAlign: "left" }}
                    key={index}
                >
                    {list[entity?.value]}
                </td>
            ))

        );
    else return null;
};