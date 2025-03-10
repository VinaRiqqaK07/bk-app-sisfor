import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react'
import ScheduleForm from '../components/Schedule/ScheduleForm';

const Schedule: React.FC = () => {
    return (
        <IonPage>
             <ScheduleForm/>
        </IonPage>
    );
};

export default Schedule;