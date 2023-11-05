import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline, logOutOutline, settingsOutline } from 'ionicons/icons';
import Home from '../../pages/Home';
import Setting from '../../pages/Setting';
import Details from '../../pages/Details';
import NewsComponent from '../News/News';
import './Menu.css'

const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/app/home', icon: homeOutline },
    { name: 'Setting', url: '/app/setting', icon: settingsOutline },
    { name: 'News', url: '/app/news', icon: newspaperOutline}
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
                <IonItem detail={true} routerLink={item.url} routerDirection='none'>
                  <IonIcon icon={item.icon} slot='start'/>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false}>
              <IonButton
                routerLink='/'
                routerDirection='root'
                expand='full'
                color={'secondary'}>
                <IonIcon icon={logOutOutline} slot='start'></IonIcon>
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id='main'>
            <Route exact path='/app/home' component={Home} />
            <Route path='/app/setting' component={Setting} />
            <Route path='/app/news' component={NewsComponent} />
            <Route path='/app/home/details' component={Details} />
            <Route exact path='/app'>
              <Redirect to='/app/home' />
            </Route>
        </IonRouterOutlet>
        </IonSplitPane>
      </IonPage>
  );
};

export default Menu;