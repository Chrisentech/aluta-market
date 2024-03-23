import React from 'react';
import DeleteAccountModal from './DeleteAccountModal'

const ModalContent: React.FC<{ active: string | null }> = ({ active }) => {
    return (
        <>
            {active &&
             (active === "deleteAccount") ? <DeleteAccountModal active={active}/> : <></>}
        </>
    )
}

export default ModalContent;