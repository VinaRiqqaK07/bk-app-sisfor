import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonInput, IonItem, IonMenuButton, IonModal, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useState } from 'react';
import './ListUser.css'

const ListContact: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleCancelForm = () => {
        setUserId('');
        setFullName('');
        setEmail('');
    }

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
                <IonButton onClick={handleOpenModal}>
                    Tambah User
                </IonButton>
                <IonModal isOpen={showModal} onDidDismiss={handleCloseModal} className='modal'>
                    <IonList className='list'>
                    <IonItem>
                            <h1 className='h1'>Masukkan Data Anda</h1>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">ID User</IonLabel>
                        <IonInput type="text" value={userId} onIonChange={e => setUserId(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Nama Lengkap</IonLabel>
                        <IonInput type="text" value={fullName} onIonChange={e => setFullName(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
                    </IonItem>
                    <IonButton onClick={handleCloseModal} className='confirm'>Confirm</IonButton>
                    <IonButton onClick={handleCancelForm} className='cancel'>Cancel</IonButton>
                </IonList>
                </IonModal>
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