import React from 'react';
import CreateStoreModal from './CreateStoreModal';

const ModalContent: React.FC<{ active: string | null }> = ({ active }) => {
    console.log(active)
    return (
        <>
            {active &&
             (active === "createStore") ? <CreateStoreModal active={active}/> : <></>}
        </>
    )
}

export default ModalContent;