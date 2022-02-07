import React, { useState, FC } from 'react';
import 'styles/Table.css';

// components imports
import { TableRow } from 'components/TableRow/TableRow';

// interface declaration
import { IList, ITable } from 'shared/interfaces';

export const Table: FC<ITable> = (props) => {

    const { headers, rows, maxRecordsPerView, rowValues, getSelectedRows, checkbox } = props;

    const [bracket, setBracket] = useState<{ lower: number; heigher: number; }>({
        lower: 0,
        heigher: maxRecordsPerView
    });

    const [arr, setArr] = useState<any>([]);

    const handleSelectedRows = (row: any) => {
        let temp = arr;
        const isIncludedItem = arr?.filter((item: any) => item?.id === row?.id)?.length > 0;

        if (isIncludedItem) {
            temp = arr?.filter((item: any) => item?.id !== row?.id);
        } else {
            temp?.push(row);
        }

        setArr([...temp]);
        getSelectedRows(temp);
    }

    return (
        <div style={{ width: "100%", paddingRight: 4 }}>

            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        {props?.checkbox &&
                            <th style={{ width: '100px', textAlign: "center", color: 'white' }}>
                                {''}
                            </th>
                        }
                        {headers?.map((header: string, index: number) => (
                            <th
                                style={{ width: `${100 / headers.length}%`, textAlign: "center", color: 'white' }}
                                key={index}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody id="table-body" className='table-body'>
                    {rows?.length ? rows.map((row: IList, rowIndex: number) => (
                        <tr className='tr-row' key={rowIndex} onClick={() => handleSelectedRows(row)}>
                            {checkbox &&
                                <td style={{ width: '100px', textAlign: "center", color: 'white' }}>
                                    <input
                                        checked={arr?.filter((item: any) => item?.id === row?.id)?.length > 0}
                                        type={"checkbox"}
                                        onClick={() => handleSelectedRows(row)} />
                                </td>
                            }
                            {(rowIndex >= bracket.lower && rowIndex < bracket.heigher) &&
                                <TableRow list={row} rowValues={rowValues} />
                            }
                        </tr>
                    )) : null
                    }
                </tbody>
            </table >

        </div>
    )
};