import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { alertCircleOutline, callOutline, chatbubblesOutline, chevronForwardOutline, helpCircleOutline, lockClosedOutline, logOutOutline, mailOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import './Settings.css'

const Settings: React.FC = () => {

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
        <IonContent>
            <IonCard className='ion-margin-vertical'>
                <IonCardContent>
                    <IonList>
                    <IonItem button={true}>
                        <IonIcon icon={personCircleOutline} slot='start'></IonIcon>
                        <IonLabel>Username</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon icon={callOutline} slot='start'></IonIcon>
                        <IonLabel>Telephone Number</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon icon={mailOutline} slot='start'></IonIcon>
                        <IonLabel>Email</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button={true} lines='none'>
                        <IonIcon icon={lockClosedOutline} slot='start'></IonIcon>
                        <IonLabel>Password</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonCard className='ion-margin-vertical'>
                <IonCardContent>
                    <IonList>
                    <IonItem button={true}>
                        <IonIcon icon={chatbubblesOutline} slot='start'></IonIcon>
                        <IonLabel>Feedback</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button={true}>
                        <IonIcon icon={alertCircleOutline} slot='start'></IonIcon>
                        <IonLabel>Report</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button={true} lines='none'>
                        <IonIcon icon={helpCircleOutline} slot='start'></IonIcon>
                        <IonLabel>About Us</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonCard className='ion-margin-vertical'>
                <IonCardContent>
                    <IonList>
                    <IonItem button={true} lines='none' routerLink='/'
                routerDirection='root' id='logout-alert'>
                        <IonIcon icon={logOutOutline} slot='start'></IonIcon>
                        <IonLabel>Logout</IonLabel>
                        <IonIcon icon={chevronForwardOutline} slot='end'></IonIcon>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Settings;