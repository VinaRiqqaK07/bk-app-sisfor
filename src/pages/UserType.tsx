import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './UserType.css'
import StudentIcon from '../assets/woman-student-2.svg';
import TeacherIcon from '../assets/woman-teacher-light-skin-tone.svg'

const UserType: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>User Type Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCol class='ion-justify-content-center'>
                    <div className='ion-text-center'>
                        <h1>You are signing in as...</h1>
                    </div>
                    <IonRow class='ion-justify-content-center ion-align-items-center ion-padding'>
                        <IonButton routerLink='/register' className='user-type-button' color={'light'}>
                            <IonCol>
                                <img src={TeacherIcon}/>
                                <IonText>
                                    <h3>Dosen</h3>
                                </IonText>
                            </IonCol>
                        </IonButton>
                        <IonButton routerLink='/register' className='user-type-button' color={'light'}>
                            <IonCol>
                                <img src={StudentIcon}/>
                                <IonText>
                                    <h3>Mahasiswa</h3>
                                </IonText>
                            </IonCol>
                        </IonButton>
                    </IonRow>
                </IonCol>
            </IonContent>
        </IonPage>
    );
};

export default UserType;