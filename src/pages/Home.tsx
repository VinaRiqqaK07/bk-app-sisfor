import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='warning'>
          <IonTitle>Blink</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        helloworld
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
