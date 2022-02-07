import React, { FC } from 'react';

// React Icon
import { FiLoader } from 'react-icons/fi';

// Import Style
import 'styles/LoadResult.css';

// interface declaration
import { ILoading } from 'shared/interfaces';

// React function
export const Loading:FC<ILoading> = ({ flag }) => {
    if(flag)
        return(
            <FiLoader className="loader" />
        );
    else return null;
};