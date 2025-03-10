import { InputChangeEventDetail, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import BKlogo from '../../assets/BK-logo.jpg';
import Intro from '../Intro/Intro';
import { Preferences } from '@capacitor/preferences';
import './LoginForm.css'

const INTRO_KEY = 'intro-seen';
const USER_KEY = 'user-type';

const LoginForm: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();
    const [userID, setUser] = useState('');
    const [password, setPass] = useState('');
    

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY });
            const usertype = await Preferences.get({ key: USER_KEY });
            console.log('~file: LoginForm.tsx ~ checkStorage ~ seen:', seen);
            console.log('~file: LoginForm.tsx ~ checkStorage ~ user type:', usertype);
            setIntroSeen(seen.value === 'true');
            if(usertype.value==='admin'){
                setUser('admin');
            }else if(usertype.value==='dosen'){
                setUser('dosen');
            }else if(usertype.value==='mahasiswa'){
                setUser('mahasiswa');
            }else{
                setUser('admin');
            }
        }
        checkStorage();
    }, []);

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    };

    const finishIntro = async() => {
        console.log('FIN');
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true'});
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
    };

    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        console.log("Handle Input is working..");
        const inputElement = event.target as HTMLInputElement;
        const setInputChange = async () => {
            if (event.target) {
                const user = inputElement.value;
                console.log("Handle input change, user : ", user);
                setUser(inputElement.value);
                if(user==='admin'){
                    await Preferences.set({ key: USER_KEY, value: 'admin'});
                }else if(user==='dosen'){
                    await Preferences.set({ key: USER_KEY, value: 'dosen'});
                }else if(user==='mahasiswa'){
                    await Preferences.set({ key: USER_KEY, value: 'mahasiswa'});
                }else{
                    await Preferences.set({ key: USER_KEY, value: 'admin'});
                }
            }else{
                console.log('null value');
            }
        }
        setInputChange();
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
            <IonContent scrollY={true} className='ion-padding'>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='6'>
                            <div className='ion-text-center ion-padding'>
                                <img src={BKlogo} alt='BK logo' width={'50%'} height={'80%'} />
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <div className='ion-text-center ion-margin-vertical ion-padding-bottom'>
                                        <IonText color={'dark'}>
                                            <h1>Welcome</h1>
                                        </IonText>
                                    </div>
                                    <form onSubmit={doLogin}>
                                        <IonInput onIonChange={handleInputChange} value={userID} fill='outline' labelPlacement='floating' label="User ID" type='text' placeholder='NIM/NIP' className='ion-margin-top'></IonInput>
                                        <IonInput value={password} fill='outline' labelPlacement='floating' label='Password' type='password' className='ion-margin-vertical'></IonInput>
                                        <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top' >
                                            Login
                                            <IonIcon icon={logInOutline} slot='end'></IonIcon>
                                        </IonButton>
                                        <IonButton routerLink='/register' type='button' color={'tertiary'} expand='block' className='ion-margin-top' >
                                            Create Account
                                            <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                                        </IonButton>
                                        <IonButton onClick={seeIntroAgain} size='small' type='button' fill='clear' color={'medium'} expand='block' >
                                            Watch intro again
                                        </IonButton> 
                                    </form>
                                </IonCardContent> 
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid> 
            </IonContent>
            <IonFooter>
            </IonFooter>
        </IonPage>
        )}
        </>
    );
};

export default LoginForm;