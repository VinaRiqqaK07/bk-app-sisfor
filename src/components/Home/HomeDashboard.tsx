import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './HomeDashboard.css'
import { calendarOutline, eyeOutline, listCircleOutline } from 'ionicons/icons';

const HomeDashboard: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton autoHide={false}/>
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
                                <IonButton size='small' type='button' color={'primary'} routerLink='profile'>
                                    See Profile
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonLabel>
                                    <h2>Next Steps</h2>
                                </IonLabel>
                                    <IonRow>
                                        <IonItem lines='none' href='app/schedule'>
                                            <IonIcon icon={calendarOutline} size='small'></IonIcon>
                                            <IonLabel className='ion-margin-start'>
                                                <p>Make conseling schedule now</p>
                                            </IonLabel>
                                        </IonItem>         
                                    </IonRow>
                                    <IonRow>
                                        <IonItem lines='none' href='app/UserList'>
                                            <IonIcon icon={listCircleOutline} size='small'></IonIcon>
                                            <IonLabel className='ion-margin-start'>
                                                <p>See user list</p>
                                            </IonLabel>
                                        </IonItem>    
                                    </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonItem>

                <IonGrid>
                   <IonRow>
                    <IonCol>
                        <IonList >
                        <IonItem lines='full'>
                                <IonLabel>
                                    <h2>What's New?</h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem button={true}>       
                                <IonLabel class='ion-text-wrap'>
                                    <h2>News Title</h2>
                                    <p>Here's a small text description for the news content. Nothing more, nothing less.</p>
                                    </IonLabel>     
                            </IonItem>
                            <IonItem button={true} lines='none' className='ion-margin-top' href='app/news'>
                                See all
                            </IonItem>
                        </IonList>                    
                    </IonCol>
                    <IonCol>
                    <IonList>
                        <IonItem lines='full'>
                            <IonLabel>
                                <h2>Quick Scheduling</h2>
                            </IonLabel>
                        </IonItem>
                        <IonItem className='ion-margin-top' >
                            <IonInput label='Nama' placeholder='Enter text' type='text'></IonInput>
                        </IonItem>
                        <IonItem className='ion-margin-top' >
                            <IonInput label='User ID' placeholder='NIM' type='text'></IonInput>
                        </IonItem>
                        <IonItem className='ion-margin-top' >
                        <IonSelect label="Jenis Konsultasi">
                            <IonSelectOption value="individu">Individu</IonSelectOption>
                            <IonSelectOption value="kelompok">Kelompok</IonSelectOption>
                            <IonSelectOption value="minat">Minat & Bakat</IonSelectOption>
                            <IonSelectOption value="karir">Karir</IonSelectOption>
                        </IonSelect>
                        </IonItem>
                        <IonItem className='ion-margin-top' >
                        <IonSelect label="Pilih Konsultan">
                            <IonSelectOption value="A">Dosen A</IonSelectOption>
                            <IonSelectOption value="B">Dosen B</IonSelectOption>
                        </IonSelect>
                        </IonItem>
                        <IonItem className='ion-margin-top' lines='none'>
                            <IonLabel>Jadwal Konsultasi</IonLabel>
                        </IonItem>
                        <IonItem lines='inset'>
                            <IonDatetimeButton datetime='datetime'></IonDatetimeButton>
                            <IonModal keepContentsMounted={true}>
                                <IonDatetime id='datetime'></IonDatetime>
                            </IonModal>
                        </IonItem>
                        <IonItem className='ion-margin-top' lines='none'>
                            <IonLabel>Ceritakan Singkat Masalahmu</IonLabel>
                        </IonItem>
                        <IonItem className='ion-margin-bottom' lines='none'>
                            <IonTextarea placeholder='Ceritakan Singkat Masalahmu' rows={5} fill='outline' ></IonTextarea>
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