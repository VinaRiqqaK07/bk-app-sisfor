import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline, logOutOutline } from 'ionicons/icons';
import Home from './Home';
import Setting from './Setting';
import './Menu.css'

const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/app/Home', icon: homeOutline },
    { name: 'Setting', url: '/app/Setting', icon: newspaperOutline }
  ];

  return (
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle autoHide={false} key={index}>
                <IonItem routerLink={item.url} routerDirection='none'>
                  <IonIcon icon={item.icon} slot='start'></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonButton
              routerLink='/'
              routerDirection='back'
              expand='full'>
              <IonIcon icon={logOutOutline} slot='start'></IonIcon>
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id='main'>
          <Switch>
            <Route exact path='/app/Home/Details' component={Home} />
            <Route exact path='/app/Setting' component={Setting} />
            <Route exact path='/app/Home' component={Home} />
            <Route exact path='/app'>
              <Redirect to='/app/Home' />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;