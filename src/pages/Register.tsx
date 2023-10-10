import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter ();
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    }; 
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref='/'/>
                   </IonButtons>
                <IonTitle>
                    Create Account
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent scrollY={true}>
            <IonCard>
                <IonCardContent>
                    <form onSubmit={doRegister}>
                        <IonInput fill='outline' labelPlacement='floating' label="ID Account" type='text' placeholder='D1212110XX'></IonInput>
                        <IonInput fill='outline' labelPlacement='floating' label='Password' type='password' className='ion-margin-top'></IonInput>
                        <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >
                            Create My Account
                            <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
                        </IonButton>
                    </form>
                </IonCardContent> 
            </IonCard> 
        </IonContent>
        <IonFooter>
            
        </IonFooter>
    </IonPage>
    );
};

export default Register;