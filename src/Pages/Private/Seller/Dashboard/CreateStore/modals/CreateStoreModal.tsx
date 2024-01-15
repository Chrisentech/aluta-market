import React, { useState, useEffect } from 'react';
import { closeModal } from "../../../../../../Features/modal/modalSlice";

import { useDispatch } from 'react-redux';
import { FormContainer, InputField, SubmitButton, CloseButton, Hint, TextArea, CheckBox } from './CreateStoreModal.style';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../../../../Shared/Constants';





const CreateStoreModal: React.FC<{ active: string }> = ({ active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [storeName, setStoreName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<any>('');
  const [storeDesc, setStoreDesc] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [isSameNumber, setIsSameNumber] = useState<boolean>(false)
  const [haveAddress, setHaveAddress] = useState<boolean>(false)
  const [haveReadTerms, setHaveReadTerms] = useState<boolean>(false)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  const handleCloseModal = () => {
    dispatch(closeModal(active))
    navigate(ROUTE.SELLER_DASHBOARD)
  }
  const handleSubmit = () => {
    // Handle form submission logic here
    // const formData = {
     
    // }
  };

  useEffect(() => {
    if (
      storeName !== 'null'
      && (phoneNumber !== 'null' || isSameNumber)
      && storeDesc !== 'null'
      && haveReadTerms
    ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [storeName, phoneNumber, storeDesc, haveReadTerms, isSameNumber])

  return (
    <FormContainer>
        <CloseButton onClick={handleCloseModal}><AiOutlineCloseCircle size={34} color="#292D32" /></CloseButton>
        <h2>Set delivery address</h2>
        <form onSubmit={handleSubmit}>
            <label>
              Name of Store<span className="required">*</span>
              <InputField
                  type="text"
                  value={storeName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStoreName(e.target.value)}
                  required
              />
              <Hint>Hint: You can create more stores under your dashboard</Hint>
            </label>
            <CheckBox small>
              <input
                type="checkbox"
                checked={isSameNumber}
                onChange={() => setIsSameNumber(!isSameNumber)}
              />
              <span className="custom"></span>
              Same as my phone number
            </CheckBox>
            {!isSameNumber && <label>
              Phone Number<span className="required">*</span>
              <InputField
                type="tel"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                required
              />
            </label>}
            <label>
              Store Description<span className="required">*</span>
              <TextArea
                  value={storeDesc}
                  placeholder='Type here'
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setStoreDesc(e.target.value)}
                  required
              />
            </label>
            <CheckBox>
              <input
                type="checkbox"
                checked={haveAddress}
                onChange={() => setHaveAddress(!haveAddress)}
              />
              <span className="custom"></span>
              I have a physical address
            </CheckBox>
            {!haveAddress && <label>
            Store Address:
            <InputField
                type="text"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                required
            />
            </label>}
            <CheckBox>
              <input
                type="checkbox"
                required
                checked={haveReadTerms}
                onChange={() => setHaveReadTerms(!haveReadTerms)}
              />
              <span className="custom"></span>
              I agree to the <Link to={ROUTE.TERMS} className="terms">Terms and conditions</Link>
            </CheckBox>
            
            <SubmitButton type="submit" onClick={handleSubmit} submit={canSubmit}>Register my Store</SubmitButton>
        </form>
    </FormContainer>
  );
};

export default CreateStoreModal;
