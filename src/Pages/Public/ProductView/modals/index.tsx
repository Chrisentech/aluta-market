import React from 'react';
import DeliveryAddressFormModal from './ChangeAddress';

const ModalContent: React.FC<{ active: string | null }> = ({ active }) => {
    return (
        <>
            {active &&
             (active === "changeAddress") ? <DeliveryAddressFormModal active={active}/> : <></>}
        </>
    )
}

export default ModalContent;