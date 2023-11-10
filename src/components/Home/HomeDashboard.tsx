import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './HomeDashboard.css'
import { eyeOutline } from 'ionicons/icons';

const HomeDashboard: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-text-center'>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" color={'light'}>
                <h1 className='dashboard-title'>Dashboard</h1>
                <IonItem lines='none' className='ion-margin-top'>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                            <IonLabel className='ion-margin-top'>
                                <h1>Welcome to Our App!</h1>
                                <p>We've prepared some links to get you started.</p>
                            </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-margin-top'>
                            <IonCol>
                                <IonLabel>
                                    <h2>Get Started</h2>
                                </IonLabel>
                                <IonButton size='small' type='button' color={'primary'}>
                                    Customize Your Theme
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonLabel>
                                    <h2>Next Steps</h2>
                                </IonLabel>
                                <IonList>
                                    <IonRow>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                        <IonLabel className='ion-margin-start'>
                                            <p>See your profile</p>
                                        </IonLabel>
                                    </IonRow>
                                    <IonRow>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                        <IonLabel className='ion-margin-start'>
                                            <p>Pake ion nav untuk navigasi</p>
                                        </IonLabel>
                                    </IonRow>
                                    <IonRow>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                        <IonLabel className='ion-margin-start'>
                                            <p>dibungkus ion-item bede baru href='#'</p>
                                        </IonLabel>
                                    </IonRow>
                                </IonList>
                                
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                    
                </IonItem>

                <IonGrid>
                   <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem >
                                <IonLabel>
                                    <h2>At a Glance</h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines='none'>
                            <IonRow>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                        <IonLabel className='ion-margin-start'>
                                            <p>See your profile</p>
                                        </IonLabel>
                                    </IonRow>
                            </IonItem>
                        </IonList>
                        <IonList className='ion-margin-top'>
                        <IonItem >
                                <IonLabel>
                                    <h2>At a Glance</h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines='none'>
                            <IonRow>
                                        <IonLabel className='ion-margin-start' class='ion-text-wrap'>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                            <p>kotak di atas ubah jadi grid dulu, item di dalam</p>
                                        </IonLabel>
                                    </IonRow>
                            </IonItem>
                        </IonList>                    
                    </IonCol>
                    <IonCol>
                    <IonList>
                    <IonItem>
                                <IonLabel>
                                    <h2>Quick Scheduling</h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem className='ion-margin-top' lines='none'>
                            <IonRow>
                            <IonInput fill='outline' placeholder='Title'></IonInput>
                                        <IonIcon icon={eyeOutline} size='small'></IonIcon>
                                        <IonLabel className='ion-margin-start'>
                                            <p>See your profile</p>
                                        </IonLabel>
                                    </IonRow>
                            </IonItem>
                    </IonList>
                    </IonCol>
                   </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default HomeDashboard;