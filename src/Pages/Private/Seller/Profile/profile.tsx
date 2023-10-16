import React from 'react';
import { AddImage, Body, InputField, ProfileImage, Wrapper } from './Profile.style';
import Layout from '../../../../Layouts';
import { messageEdit } from '../../../../assets';
import { Button, Card } from '../../../../Shared/Components';

const Screen: React.FC = () => {
    return (
        <Wrapper>
            <h1>My Profile</h1>
            <Body>
                <div className="top">
                    <div className='left'> 
                        <h3>Personal Details</h3>
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
                                value=""
                                onChange={() => {}}
                            />
                        </label>
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
                                <input
                                    type="date"
                                    // value={}
                                    onChange={() => {}}
                                />
                            </label>
                        </div>
                        <div>
                            <h3>Password</h3>
                            <div>Change password</div>
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
                                <p>Delete Account</p>
                                <Button>
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
    return <Layout layout={"dashboard"} component={Screen} state={false} />;
};

export default Profile;