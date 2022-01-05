import React, {memo, useMemo, useState} from 'react';
import {Progress} from 'antd';

const ProgressBar = memo(({title, widthProgress, percent}) => {
    const [counter, setCounter] = useState(0);

    useMemo(() => {
        if (counter >= percent) return
        setTimeout(() => setCounter(() => counter + 1), 30);

    }, [percent, counter])

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
});

export default ProgressBar;
