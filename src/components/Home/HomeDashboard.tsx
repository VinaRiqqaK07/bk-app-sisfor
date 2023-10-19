import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './HomeDashboard.css'

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
            <IonContent className="ion-padding">
                <IonItem lines='none'>
                    <h1>WELCOME TO BIKO APP</h1>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default HomeDashboard;