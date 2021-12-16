import React, {useEffect, useState} from 'react';
import {Progress} from 'antd';

const ProgressBar = ({title, widthProgress, percent}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < percent) {
            setTimeout(() => setCounter(() => counter + 1), 30);
        }
    }, [percent, counter]);

    return (
        <>
            <Progress
                strokeLinecap='square'
                type='circle'
                status={'normal'}
                percent={counter}
                strokeColor={'#08fdd8'}
                strokeWidth={10}
                width={widthProgress}
                trailColor={'#666'}
            />
            <p style={{color: '#fff'}}>{title}</p>
        </>
    );
};

export default ProgressBar;
