import React from 'react';

const Title = ({children}) => {
    return (
        <div className='px-4 py-3 text-center'>
            <h2 className='text-3xl font-semibold'>{children}</h2>
        </div>
    );
};

export default Title;