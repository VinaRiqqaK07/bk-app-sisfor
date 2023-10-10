
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent} from '@ionic/react';

const Setting: React.FC = () => {
  return (
   <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Setting</IonTitle>
        </IonToolbar>    
    </IonHeader> 
    <IonContent className='ion-padding'></IonContent>
   </IonPage>
  );
};

export default Setting;
