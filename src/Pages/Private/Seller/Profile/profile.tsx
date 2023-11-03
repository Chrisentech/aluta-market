import React, { ChangeEvent, useState } from 'react';
import { AddImage, Body, InputField, ProfileImage, Wrapper } from './Profile.style';
import Layout from '../../../../Layouts';
import { messageEdit } from '../../../../assets';
import { Button, Card } from '../../../../Shared/Components';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveModal, showModal } from '../../../../Features/modal/modalSlice';
import ModalContent from './modals';

const Screen: React.FC = () => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");

    const handleChangePassword = () => {

    }

    return (
        <Wrapper>
            <h1>My Profile</h1>
            <Body>
                <div className="top">
                    <div className='left'> 
                        <h3>Personal Details</h3>
                        <div className='form'>
                            <label>
                                Full Name
                                <InputField 
                                    type="text"
                                    value=""
                                    onChange={() => {}}
                                />
                            </label>
                            <label>
                                Email
                                <InputField 
                                    type="email"
                                    value=""
                                    onChange={() => {}}
                                />
                            </label>
                            <label>
                                Phone Number
                                <InputField 
                                    type="email"
                                    value={"+234" + phone}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {setPhone(e.target.value.substring(4))}}
                                />
                            </label>
                        </div>
                        <div className="gender-birthday">
                            <label className='gender'>
                                Gender
                                <select
                                    value=''
                                    onChange={() => {}}
                                >
                                    <option value="" disabled>Select option</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                            <label className='birthday'>
                                Birthday
                                <div>
                                    <input
                                        type="date"
                                        // value={}
                                        onChange={() => {}}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='password-panel'>
                            <h3>Password</h3>
                            <div className='change-password' onClick={handleChangePassword}>Change password</div>
                        </div>
                    </div>
                    <div className='right'>
                        <ProfileImage>
                            <AddImage><img src={messageEdit} /></AddImage>
                        </ProfileImage>
                        <Card
                            width="100%"
                            height={88}
                            background="#EFF2F4"
                            className='deactivate'
                        >
                            <div className='top-card'>
                                <p className='top-text'>Delete Account</p>
                                <Button 
                                    color="#FA3434"
                                    width={96}
                                    height={27}
                                    className='deactivate-button'
                                    onClick={() => dispatch(showModal('deleteAccount'))}
                                >
                                    Deactivate
                                </Button>
                            </div>
                            <p>
                                Heads up Comrade! Once you take this step no going back. Be very certain!
                            </p>
                        </Card>
                    </div>
                </div>
                <div className="foot">
                    <div className='buttons'>
                        <Button
                            background='#0D6EFD'
                            color="#fff"
                            gap={10}
                            padding={20}
                        >Save Changes</Button>
                        <Button
                            border="1px solid #DEE2E7"
                            color="#0D6EFD"
                            gap={10}
                            padding={20}
                        >Cancel</Button>
                    </div>
                </div>
            </Body>
        </Wrapper>
    )
}

const Profile = () => {
    const activeModal = useSelector(selectActiveModal);

    return (
        <Layout 
            layout={"dashboard"} 
            component={Screen} 
            state={false} 
            showModal={activeModal}
            popUpContent={<ModalContent active={activeModal}/>}
        />
    )
};

export default Profile;