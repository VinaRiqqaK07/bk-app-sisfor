import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './ListUser.css'


const ListContact: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
            <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-text-center'>User List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonButton>Tambah User</IonButton>
            <IonSegment value="user">
                <IonSegmentButton value="Dosen">
                    <IonLabel>Dosen</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Mahasiswa">
                    <IonLabel>Mahasiswa</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Admin">
                    <IonLabel>Admin</IonLabel>
                </IonSegmentButton>
            </IonSegment>
                <IonGrid>
                    <IonRow>
                        <IonCol className='header-table'>User ID</IonCol>
                        <IonCol className='header-table'>Nama Lengkap</IonCol>
                        <IonCol className='header-table'>Email</IonCol>
                        <IonCol className='header-table'>Action</IonCol>

                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ListContact;