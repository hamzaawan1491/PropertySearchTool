import React, { FC, useState } from 'react';
import './App.css';
import { LoadResult } from 'components/LoadResult/LoadResult';

interface IApp { }

const App: FC<IApp> = (props) => {

  const filterData: {id: number; name: string; value: string}[] = [
    { id: 1, name: 'All', value: "all" },
    { id: 2, name: 'Flat', value: "flat" },
    { id: 3, name: 'Terrace house', value: "terraced" },
    { id: 4, name: 'Semi-detached', value: "Semi-detached" },
    { id: 5, name: 'Detached', value: "detached" }
  ]
  const [filter, setFilter] = useState<string>("all");

  return (

    <div className='app display-column' id="app">

      <div className='app-banner'>
        <h2>Property Search Tool</h2>
        <div className="app-banner__img">
          <img alt="logo" loading="lazy" src={require('./resources/immo-logo.png')} width="100%" />
        </div>
      </div>

      <div className="display-row app-lower-container">
        <div className="row-1by5">
          <div style={{ fontWeight: 'bold' }}>Property Types</div>

          <div className="filter-list">
            {filterData?.map((item, index) => (
              <div className={item?.value === filter ? 'filter-items active-filter-items' : 'filter-items'}
                key={index} onClick={() => { setFilter(item?.value?.toLowerCase()) }}>
                {item?.name}
              </div>
            ))}
          </div>
        </div>


        {/*  Data Result */}
        <div className="row-4by5" style={{ padding: '0 25px', width: '100%' }}>
          <LoadResult filter={filter} />
        </div>

      </div>
    </div>

  );

}

export default App;
