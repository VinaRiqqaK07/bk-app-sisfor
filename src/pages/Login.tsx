import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import BKlogo from '../assets/BK-logo.jpg';
import Intro from '../components/Intro';
const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(false);

    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    };

    const finishIntro = async() => {
        console.log('FIN');
        setIntroSeen(true);
    };

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro}/>
        ) : (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>
                        Bimbingan Konseling
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={true}>
                <div className='ion-text-center ion-padding'>
                    <img src={BKlogo} alt='BK logo' width={'50%'} height={'80%'} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill='outline' labelPlacement='floating' label="ID Account" type='text' placeholder='D1212110XX'></IonInput>
                            <IonInput fill='outline' labelPlacement='floating' label='Password' type='password' className='ion-margin-top'></IonInput>
                            <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >
                                Login
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                            </IonButton>
                            <IonButton routerLink='/register' type='button' color={'tertiary'} expand='block' className='ion-margin-top' >
                                Create Account
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                            </IonButton> 
                        </form>
                    </IonCardContent> 
                </IonCard> 
            </IonContent>
            <IonFooter>
                
            </IonFooter>
        </IonPage>
        )}
        </>
    );
};

export default Login;

