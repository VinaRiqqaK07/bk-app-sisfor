import { IonAvatar, IonButton, IonButtons, IonChip, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonTextarea, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React from 'react';
import './profileuser.css'
import BKlogo from '../../assets/BK-logo.jpg';
import { homeOutline, settingsOutline, personCircleSharp, chevronForwardOutline, mailOutline, notificationsCircleOutline, phonePortraitOutline, schoolOutline, personCircleOutline, keyOutline} from 'ionicons/icons';


const ProfileUser: React.FC = ()=> {
 return (
    <><IonHeader translucent no-border className='head'>
         <IonToolbar className='tool'color={'primary'}>
          <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
        <IonTitle color="aqua" className='title'>Profile
        </IonTitle>
         <IonButton slot='end' className='button'>
            <IonIcon icon={settingsOutline}>
            </IonIcon>
            </IonButton >
         </IonToolbar>
     </IonHeader>
         <IonContent color="light">
         <div className='pic-header'>
                        <img className='cover-pic' src='https://ionicframework.com/docs/img/demos/card-media.png' alt='Cover Picture'/>
                    </div>
         <div className="card"> 
             <div className="header">
                     <img src={BKlogo} alt=''/>
            <div className='hm'>
                Loid Forger
            </div>
                <h1 className='univ'>Imperial Star University</h1>
             </div>
         </div>
        <IonList inset={true} className='datadiri'>
            <div>
          <IonItem>
            <IonIcon icon={personCircleOutline} slot='start'></IonIcon>
            <IonLabel>Student ID : {}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={mailOutline} slot='start'></IonIcon>
            <IonLabel> Email : {}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={phonePortraitOutline} slot='start'></IonIcon>
            <IonLabel> Telephone : {}</IonLabel>
          </IonItem>
            <IonItem>
              <IonIcon icon={schoolOutline} slot='start'></IonIcon>
            <IonLabel > Department : {} </IonLabel>
          </IonItem>
            </div>
        </IonList>
        <IonList inset={true} className='datadiri'>
            <div>
          <IonItem button>
            <IonIcon icon={keyOutline} slot='start'></IonIcon>
            <IonLabel> Change Password</IonLabel>
            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
          </IonItem>
          <IonItem button>
            <IonIcon icon={mailOutline} slot='start'></IonIcon>
            <IonLabel> Change Email</IonLabel>
            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
          </IonItem>
            <IonItem button>
            <IonIcon icon={notificationsCircleOutline} slot='start'></IonIcon>
            <IonLabel> Notification Setting</IonLabel>
            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
          </IonItem>
          <IonItem>
            <IonToggle>
              <IonLabel>Allow Notifications</IonLabel>
              <IonNote color="medium">Unsubscribe at any time</IonNote>
            </IonToggle>
          </IonItem>
            </div>
        </IonList>

        <IonNote color="medium" class="ion-margin-horizontal">
          Safe Your Mentality And Growth with our products.
        </IonNote>
      </IonContent>
         </>
 )
};

export default ProfileUser;