import React, { useState } from 'react';
import { 
    ModalWrapper, FormContainer, 
    InputField, SubmitButton, 
    CloseButton, FormImage 
} from './ChangeAddress.style';
import { location } from '../../../../../assets';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface DeliveryAddressFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeliveryAddressFormModal: React.FC<DeliveryAddressFormModalProps> = ({ isOpen, onClose }) => {
  const [receiverName, setReceiverName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');

  const handleSubmit = () => {
    // Handle form submission logic here
    const formData = {
      receiverName,
      phoneNumber,
      address,
      additionalInfo,
    };

    console.log('Address submitted:', formData);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <FormContainer>
            <FormImage>
                <img src={location} />
            </FormImage>
            <CloseButton onClick={onClose}><AiOutlineCloseCircle size={34} color="#292D32" /></CloseButton>
            <h2>Set delivery address</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Receiver's Name:
                <InputField
                  type="text"
                  value={receiverName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReceiverName(e.target.value)}
                  required
                />
              </label>
              <label>
                Phone Number:
                <InputField
                  type="tel"
                  value={phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                Address:
                <InputField
                  type="text"
                  value={address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                  required
                />
              </label>
              <label>
                Additional Information:
                <InputField
                  type="text"
                  value={additionalInfo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdditionalInfo(e.target.value)}
                />
              </label>
              <SubmitButton type="submit">Set Address</SubmitButton>
            </form>
          </FormContainer>
        </ModalWrapper>
      )}
    </>
  );
};

export default DeliveryAddressFormModal;
