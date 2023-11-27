import { IonAvatar, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import BKLogo from '../../assets/BK-logo.jpg';
import './SettingCon.css';
import { chevronForwardOutline, lockClosed, logInOutline, notificationsCircle, person, personCircleOutline } from 'ionicons/icons';

const SettingCon: React.FC = () => {
    const [activeButton, setActiveButton] = useState('account');
    const [toggleState, setToggleState] = useState(false);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-text-center'>Setting</IonTitle>
                </IonToolbar>    
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTitle className='ion-margin-top'>My Account</IonTitle>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd='5' sizeXl='4' sizeLg='6' sizeSm='12' className='ion-text-center'>
                            <IonList className='ion-text-center'>
                                <img src={BKLogo} alt='Profile picture' className='profile-pic'/>
                                <IonItem lines='none' className='ion-text-center'>
                                    <IonLabel>
                                        Loid Forger
                                    </IonLabel>
                                </IonItem>
                                <IonItem color={'light'} lines='full' button={true} onClick={() => handleButtonClick('account')} className={activeButton === 'account' ? 'selected' : ''}>
                                    <IonIcon size='small' icon={person} slot='start'></IonIcon>
                                    <IonLabel>Account</IonLabel>
                                    <IonIcon size='small' icon={chevronForwardOutline} slot='end'></IonIcon>
                                </IonItem>
                                <IonItem color={'light'} lines='full' button={true} onClick={() => handleButtonClick('password')} className={activeButton === 'password' ? 'selected' : ''}>
                                    <IonIcon size='small' icon={lockClosed} slot='start'></IonIcon>
                                    <IonLabel>Change Password</IonLabel>
                                    <IonIcon size='small' icon={chevronForwardOutline} slot='end'></IonIcon>
                                </IonItem>
                                <IonItem color={'light'} lines='full' button={true} onClick={() => handleButtonClick('notification')} className={activeButton === 'notification' ? 'selected' : ''}>
                                    <IonIcon size='small' icon={notificationsCircle} slot='start'></IonIcon>
                                    <IonLabel>Notifications</IonLabel>
                                    <IonIcon size='small' icon={chevronForwardOutline} slot='end'></IonIcon>
                                </IonItem>
                            </IonList>
                        </IonCol>
                        <IonCol sizeMd='7' sizeXl='8' sizeLg='6' sizeSm='12'>
                        {activeButton === 'account' && (
                            <IonList>
                                <IonItem lines='none' className='ion-margin-bottom'>
                                    <IonIcon size='large' icon={person} slot='start'></IonIcon>
                                    <IonLabel>Account</IonLabel>
                                </IonItem>
                                <IonItem lines='none' className='ion-margin-bottom'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>Username</IonLabel>
                                        <IonInput aria-label='text' disabled fill='outline' value="User ID Retrieve"></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>First Name</IonLabel>
                                        <IonInput aria-label='text' fill='outline' value="Loid"></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>Last Name</IonLabel>
                                        <IonInput aria-label='text' fill='outline' value="Forger"></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>E-mail Address</IonLabel>
                                        <IonInput aria-label='text' fill='outline' value="loidforger@gmail.com"></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >Update Account</IonButton>
                            {/* Add more items as needed */}
                            </IonList>
                        )}
                        {activeButton === 'password' && (
                            <IonList>
                            <IonItem lines='none' className='ion-margin-bottom'>
                                    <IonIcon icon={lockClosed} slot='start'></IonIcon>
                                    <IonLabel>Change Password</IonLabel>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>Current Password</IonLabel>
                                        <IonInput type='password' fill='outline' aria-label='password'></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>New Password</IonLabel>
                                        <IonInput type='password' fill='outline' aria-label='password'></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonItem className='ion-margin-bottom' lines='none'>
                                    <IonCol>
                                        <IonLabel className='ion-margin-bottom'>Confirm Password</IonLabel>
                                        <IonInput type='password' fill='outline' placeholder='Confirm Password' aria-label='password'></IonInput>
                                    </IonCol>
                                </IonItem>
                                <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >Update Password</IonButton>
                            {/* Add more items as needed */}
                            </IonList>
                        )}
                        {activeButton === 'notification' && (
                            <IonList>
                                <IonItem lines='none'>
                                    <IonIcon icon={notificationsCircle} slot='start'></IonIcon>
                                    <IonLabel>Notifications</IonLabel>
                                </IonItem>
                                <IonItem lines='none'>
                                    <IonToggle checked={toggleState} onIonChange={() => setToggleState(!toggleState)}>
                                        <IonLabel>Allow Notifications</IonLabel>
                                    </IonToggle>
                                </IonItem>
                                {toggleState && (
                                    <IonList>
                                        <IonItem lines='none' className='ion-margin-bottom'>
                                            <IonLabel>Select what email notification you want to receive</IonLabel>
                                        </IonItem>
                                        <IonItem className='ion-margin-bottom' lines='none'>
                                            <IonCol>
                                                <IonLabel style={{ fontWeight: 'bold' }} className='ion-margin-bottom'>News</IonLabel>
                                                <IonCheckbox labelPlacement='start'>There is a news posted</IonCheckbox>
                                                <IonCheckbox labelPlacement='start'>There is an announcement</IonCheckbox>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem className='ion-margin-bottom' lines='none'>
                                            <IonCol>
                                                <IonLabel style={{ fontWeight: 'bold' }} className='ion-margin-bottom'>Conseling</IonLabel>
                                                <IonCheckbox labelPlacement='start'>My schedule is approved</IonCheckbox>
                                                <IonCheckbox labelPlacement='start'>Someone includes me in a conseling schedule</IonCheckbox>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem className='ion-margin-bottom' lines='none'>
                                            <IonCol>
                                                <IonLabel style={{ fontWeight: 'bold' }} className='ion-margin-bottom'>Messages</IonLabel>
                                                <IonCheckbox labelPlacement='start'>Someone sends me a private message</IonCheckbox>
                                            </IonCol>
                                        </IonItem>
                                        <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >Update Notifications</IonButton>
                                    </IonList>
                                )}
                                
                            {/* Add more items as needed */}
                            </IonList>
                        )}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default SettingCon;