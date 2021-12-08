import React from 'react';
import styles from './styles.module.scss'
import {FullscreenControl, GeolocationControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";


const MapContact = () => {

    return (
        <YMaps>
            <div className={styles.map}>
                <div style={{width: "100%", height: "600px"}}>
                    <Map width={'100%'} height={'100%'} defaultState={{
                        center: [53.889052, 27.614799], zoom: 15, controls: [],
                    }}>
                        <FullscreenControl/>
                        <GeolocationControl options={{float: 'left'}}/>
                        <ZoomControl options={{float: 'right'}}/>
                        <Placemark geometry={[53.889052, 27.614799]}/>
                    </Map>
                </div>
            </div>
        </YMaps>
    );
};

export default MapContact;
