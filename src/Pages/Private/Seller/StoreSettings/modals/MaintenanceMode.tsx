import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../Shared/Components';
import { CloseButton, FormContainer, FormImage, Info } from './MaintenanceMode.style';
import { closeModal } from '../../../../../Features/modal/modalSlice';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { setting } from '../../../../../assets';
import useStore from '../../../../../Features/store/storeAction';

const MaintenanceMode: React.FC<{ active: string }> = ({ active }) => {
  const dispatch = useDispatch();
  const { setMaintenanceMode } = useStore()

  const handleMaintenanceMode = () => {
    setMaintenanceMode(true)
    dispatch(closeModal(active))
  } 


  return (
    <FormContainer>
      <FormImage>
          <img src={setting}/>
      </FormImage>
      <CloseButton onClick={() => dispatch(closeModal(active))}><AiOutlineCloseCircle size={34} color="#292D32" /></CloseButton>
      <h2>Maintenanance Mode</h2>
      <Info>your store will no longer be visible to the buyers!</Info> 

      <div className='buttons'>
        <Button
          width={400}
          height={56}
          background='#FA3434'
          color="#fff"
          className='button'
          borderRadius={10}
          onClick={() => handleMaintenanceMode()}
        >Activate Mode</Button>
        <Button
          width={400}
          height={56}
          background='#F7FAFC'
          color="#FA3434"
          className='button'
          borderRadius={10}
          onClick={() => dispatch(closeModal(active))}
        >Cancel</Button>
      </div>
    </FormContainer>
  );
};

export default MaintenanceMode;
