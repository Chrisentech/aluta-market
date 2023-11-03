import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../Shared/Components';
import { CloseButton, FormContainer, FormImage, Info } from './DeleteAccountStyle';
import { closeModal } from '../../../../../Features/modal/modalSlice';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { caution } from '../../../../../assets';

const DeleteAccountModal: React.FC<{ active: string }> = ({ active }) => {
  const [deleteAccount, setDeleteAccount] = useState(false)
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {
    if (!deleteAccount) {
      setDeleteAccount(true)
      console.log(deleteAccount)
    } else {
      //delete store
    }
  } 


  return (
    <FormContainer deleteAccount={deleteAccount}>
      <FormImage>
          <img src={caution}/>
      </FormImage>
      <CloseButton onClick={() => dispatch(closeModal(active))}><AiOutlineCloseCircle size={34} color="#292D32" /></CloseButton>
      { deleteAccount ? 
        <>
          <h2>Delete Account?</h2>
          <Info>This action cannot be undone!</Info> 
          <form>
            <label>
              Tell us why
              <select>

              </select>
            </label>
            <label>
              Input Password
              <input type="password" />
            </label>
          </form>
        </>:
        <>
          <h2>Are you sure?</h2>
          <Info>Once this account is deleted, all the information will be cleared!</Info>
        </>
      }
      <Button
        width={400}
        height={56}
        background='#FA3434'
        color="#fff"
        className='button'
        borderRadius={10}
        onClick={handleDeleteAccount}
      >Delete Account</Button>
    </FormContainer>
  );
};

export default DeleteAccountModal;
