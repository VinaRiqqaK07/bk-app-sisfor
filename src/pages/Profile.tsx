import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ProfileUser from '../components/Profile/profileuser';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <ProfileUser />
        </IonPage>
    );
};

export default Profile;