import React, { FC } from 'react';

// Import Style
import 'styles/LoadResult.css'

// interface declaration
import { IError } from 'shared/interfaces';

// React function
export const Error:FC<IError> = (props) => {

    const { error } = props;

    return(

        <div className="data-error">
            {error?.message}
        </div>

    );
};