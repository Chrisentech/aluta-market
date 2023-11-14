import React from 'react';
import MaintenanceMode from './MaintenanceMode';

const ModalContent: React.FC<{ active: string | null }> = ({ active }) => {
    return (
        <>
            {active &&
             (active === "maintenanceMode") ? <MaintenanceMode active={active}/> : <></>}
        </>
    )
}

export default ModalContent;