import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { NavLink } from "react-router-dom";
import { AddImg, BackgroundImg, BottomPanel, Main, ProfileImg, TopPanel, Wrapper } from "./StoreSettings.style";
import { AiOutlinePlus, } from "react-icons/ai";
import { messageEdit } from "../../../../assets";
import { Button, Card } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, showModal } from "../../../../Features/modal/modalSlice";
import ModalContent from "./modals";

const Screen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="flex">
        <h2>Store settings</h2>
      </div>
      <Main>
        <TopPanel>
          <BackgroundImg>
            <ProfileImg>
              <AddImg><img src={messageEdit} /></AddImg>
            </ProfileImg>
          </BackgroundImg>
          <Button 
              className="button" 
              width={117} 
              border="1px solid #FA3434" 
              color="#FA3434">
                Report
            </Button>
        </TopPanel>
        <BottomPanel>
          <div className="menu">
            
          </div>
          <div className="cardbox">
            <Card
                width="354px"
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
            <Card
                width="354px"
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
        </BottomPanel>
      </Main>
    </Wrapper>
  );
};

const StoreSettings = () => {
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

export default StoreSettings;
