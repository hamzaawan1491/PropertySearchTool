import React, { useEffect, FC, useState, useMemo } from 'react';
import 'styles/LoadResult.css';

// custom components imports
import { Loading } from 'components/Loading/Loading';
import { Error } from 'components/Error/Error';
import { Table } from 'components/Table/Table';

// interface declaration
import { ILoadResult, IList, IObjectItem } from 'shared/interfaces';
import { sampleProperties } from "../../services/api";

// render function
export const LoadResult: FC<ILoadResult> = (props: any) => {

    const [dataList, setDataList] = useState<any>([]);
    const [rowData, setRowData] = useState<IObjectItem[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [filteredSelectedRows, setFilteredSelectedRows] = useState<any>([]);
    const [filteredDataList, setFilteredDataList] = useState<any>([]);
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const headers: string[] = ["Address", "Postcode", "NumberOfRooms", "FloorArea", "PropertyType"];
    let error: boolean = false;

    useEffect(()=> {
        setTimeout(()=> {
            const data = [
                {
                    name: 'Address',
                    value: "address"
                },
                {
                    name: 'Postcode',
                    value: "postcode"
                },
                {
                    name: 'NumberOfRooms',
                    value: "numberOfRooms"
                },
                {
                    name: 'FloorArea',
                    value: "floorArea"
                },
                {
                    name: 'PropertyType',
                    value: "propertyType"
                }
            ];
            setRowData(data);
            setLoading(false);
        },500)
    },[])


    const searchedAddress = () => {
        if (searchValue === "") {
            setFilteredSelectedRows(selectedRows)
        }
        else {
            const filteredArr = selectedRows.filter((row: any) => { return (row.address.toLowerCase().includes(searchValue.toLowerCase())) })
            setFilteredSelectedRows([...filteredArr])
        }
    }

    useMemo(() => {
        if (props?.filter === "all") {
            setFilteredDataList(dataList)
        }
        else {
            const filteredArr = dataList.filter((row: any) => { return (row.propertyType.toLowerCase() === props?.filter?.toLowerCase()) })
            setFilteredDataList(filteredArr)
        }
    }, [props?.filter, dataList]);

    useMemo(() => {
        searchedAddress();
    }, [selectedRows]);

    useEffect(() => {
        setDataList(sampleProperties);
        setFilteredDataList(sampleProperties)
    }, [sampleProperties]);

    if (loading) { return <Loading flag={loading} />; }
    if (error) { return <Error error={error} />; }

    return (

        <div>
            {/* Search bar */}
            <div className="display-row search-bar-container">
                <input className="row-4by5" type="search" 
                       value={searchValue}
                       onChange={(e) => { setSearchValue(e.target.value) }}
                       id="search" placeholder="Search..." />
                <button onClick={()=> {searchedAddress();}}>Search</button>
            </div>
            <div>
                <h4>Selected properties</h4>
                <div className='load-result '>
                    <Table
                        headers={headers}
                        checkbox={false}
                        getSelectedRows={(selectedRows: any) => console.log('selectedRows', selectedRows)}
                        rows={filteredSelectedRows}
                        maxRecordsPerView={10}
                        rowValues={rowData}
                    />
                </div>

                <h4>Selected results</h4>
                <div className='load-result'>
                    <Table
                        headers={headers}
                        checkbox={true}
                        getSelectedRows={(selectedRows: any) => { setSelectedRows(selectedRows) }}
                        rows={filteredDataList}
                        maxRecordsPerView={10}
                        rowValues={rowData}
                    />
                </div>
            </div>
        </div>
    );

}