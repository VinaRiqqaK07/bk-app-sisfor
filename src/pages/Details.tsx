import { 
    IonBackButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar } from '@ionic/react';

const Details: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/app/Home' />
                    </IonButtons >
                    <IonTitle>My Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'></IonContent>
        </IonPage>
    )
}  
 export default Details