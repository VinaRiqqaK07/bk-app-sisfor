import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonDatetime,
  IonButton,
  IonDatetimeButton,
  IonModal,
  IonButtons,
  IonMenuButton,
  IonTextarea 


} from '@ionic/react';
import './ScheduleForm.css';

const ScheduleForm: React.FC = () => {
  const [daftarPeserta, setDaftarPeserta] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [nim, setNim] = useState<string>('');
  const [jurusan, setJurusan] = useState<string>('');
  const [dosen, setDosen] = useState<string>('');
  const [topikBimbingan, setTopikBimbingan] = useState<string>('');
  const [tanggal, setTanggal] = useState<string>('');

  const submit = () => {
    console.log('Form submitted');
  };

  return (
    <>
      <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-text-center'>Schedule</IonTitle>
                </IonToolbar>
            </IonHeader>

      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Daftar Peserta</IonLabel>
            <IonSelect value={daftarPeserta} onIonChange={(e) => setDaftarPeserta(e.detail.value)}>
              <IonSelectOption value="individu">Individu</IonSelectOption>
              <IonSelectOption value="kelompok">Kelompok</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput type="text" value={nama} onIonChange={(e) => setNama(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">NIM</IonLabel>
            <IonInput type="text" value={nim} onIonChange={(e) => setNim(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Jurusan</IonLabel>
            <IonSelect value={jurusan} onIonChange={(e) => setJurusan(e.detail.value)}>
              <IonSelectOption value="sipil">Teknik Sipil</IonSelectOption>
              <IonSelectOption value="mesin">Teknik Mesin</IonSelectOption>
              <IonSelectOption value="perkapalan">Teknik Perkapalan</IonSelectOption>
              <IonSelectOption value="elektro">Teknik Elektro</IonSelectOption>
              <IonSelectOption value="arsitektur">Teknik Arsitektur</IonSelectOption>
              <IonSelectOption value="geologi">Teknik Geologi</IonSelectOption>
              <IonSelectOption value="industri">Teknik Industri</IonSelectOption>
              <IonSelectOption value="kelautan">Teknik Kelautan</IonSelectOption>
              <IonSelectOption value="SistemPerkapalan">Teknik Sistem Perkapalan</IonSelectOption>
              <IonSelectOption value="pwk">Teknik Penataan Wilayah dan Kota</IonSelectOption>
              <IonSelectOption value="tambang">Teknik Pertambangan</IonSelectOption>
              <IonSelectOption value="informatika">Teknik Informatika</IonSelectOption>
              <IonSelectOption value="lingkungan">Teknik Lingkungan</IonSelectOption>
              <IonSelectOption value="metalurgi">Teknik Metalurgi dan Material</IonSelectOption>
              
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Pilih Dosen</IonLabel>
            <IonSelect value={dosen} onIonChange={(e) => setDosen(e.detail.value)}>
              <IonSelectOption value="dosen1">Dosen 1</IonSelectOption>
              <IonSelectOption value="dosen2">Dosen 2</IonSelectOption>
              <IonSelectOption value="dosen3">Dosen 3</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Topik Bimbingan</IonLabel>
            <IonSelect value={topikBimbingan} onIonChange={(e) => setTopikBimbingan(e.detail.value)}>
              <IonSelectOption value="akademik">Akademik</IonSelectOption>
              <IonSelectOption value="beasiswa">Beasiswa</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Tanggal</IonLabel>
            <IonDatetimeButton datetime='datetime'></IonDatetimeButton>
                            <IonModal keepContentsMounted={true}>
                                <IonDatetime id='datetime'></IonDatetime>
                            </IonModal>
          </IonItem>
          <IonLabel>Ceritakan Singkat Masalahmu</IonLabel>
          <IonTextarea placeholder='Ceritakan Singkat Masalahmu' rows={5} fill='outline' ></IonTextarea>
        </IonList>
        <IonButton expand="full" onClick={submit}>
          Submit
        </IonButton>
      </IonContent>
    </>
  );
};

export default ScheduleForm;
