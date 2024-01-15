import React, { useEffect, useState } from "react";
import Layout from "../../../../Layouts";
import { 
  AddImg, BackgroundImg, 
  BottomPanel, Cardbox, ContactDetails, InputField, Main, 
  ProfileImg, StoreDesc, TabOption, Tabs, TopPanel, 
  UploadImg, Wrapper 
} from "./StoreSettings.style";
import { messageEdit, uploadImg } from "../../../../assets";
import { Button, Card } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, showModal } from "../../../../Features/modal/modalSlice";
import ModalContent from "./modals";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import useStore from "../../../../Features/store/storeAction";

const Screen: React.FC = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState< 1 | 2 | 3 >(1)
  const { maintenanceMode, setMaintenanceMode } = useStore()
  
  useEffect(() => {
    console.log(maintenanceMode)
  }, [maintenanceMode])

  return (
    <Wrapper>
      <div className="flex">
        <h2>Store settings</h2>
      </div>
      <Main>
        <TopPanel>
          <BackgroundImg>
            <UploadImg><img src={uploadImg} /></UploadImg>
          </BackgroundImg>
          <div className="store-info">
              <ProfileImg>
                  <AddImg><img src={messageEdit} /></AddImg>
              </ProfileImg>
              <h2 className="store-name">Arike Collection</h2>
              <Button 
                className="button" 
                width={117} 
                border="1px solid #FA3434" 
                color="#FA3434">
                  Live view
              </Button>
          </div>
        </TopPanel>
        <BottomPanel>
          <Tabs>
            <TabOption 
              className="option" 
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Description
            </TabOption>
            <TabOption 
              className="option" 
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
              >
                Contact Detail
              </TabOption>
            <TabOption 
              className="option"
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            >
                Delete Store
              </TabOption>
          </Tabs>
          {(activeTab === 1) && 
            <StoreDesc>
              <label>Store description</label>
              <textarea
                className="desc-input"
              />
            </StoreDesc>
          }
          {(activeTab === 2) && 
            <ContactDetails>
                <div className="form">
                    <label>
                      Store Phone Number
                      <InputField
                          type="text"
                      />
                    </label>
                    <label>
                      Physical Address <span className="bracket">&#40;Optional&#41;</span>
                      <InputField
                          type="text"
                      />
                    </label>
                    <label>  
                      Business Email <span className="bracket">&#40;Optional&#41;</span>
                      <InputField
                          type="text"
                      />
                    </label>
                </div>
            </ContactDetails>  
          }
          {(activeTab === 3) && 
            <Cardbox>
                <Card
                    width="354px"
                    height={88}
                    background="#EFF2F4"
                    className='deactivate'
                >
                    <div className='top-card'>
                        <p className='top-text'>Maintenance Mode</p>
                        {maintenanceMode ? (
                          <MdToggleOn
                            size="55px"
                            color="rgb(255 21 18 / 91%)"
                            onClick={() => setMaintenanceMode(false)}
                          />
                        ) : (
                          <MdToggleOff
                            size="55px"
                            color="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
                            onClick={() => dispatch(showModal('maintenanceMode'))}
                          />
                        )}
                    </div>
                    <p>
                        Activate Maintenance mode to make your store temporarily unavailable
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
            </Cardbox>
          }
          <div className="buttons">
            <Button
              height={40}
              padding={20}
              gap={10}
              color="#FFF"
              background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
            >
              Save Changes
            </Button>
            <Button
              height={40}
              padding={20}
              gap={10}
              color="#FA3434"
              background="#FFF"
              border="#DEE2E7 solid 1px"
            >
              Cancel
            </Button>
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
          state={true} 
          showModal={activeModal}
          popUpContent={<ModalContent active={activeModal}/>}
      />
  )
};

export default StoreSettings;
