import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline, logOutOutline, settingsOutline, personCircleOutline, contractOutline, personCircle, listCircleOutline, calendar } from 'ionicons/icons';
import Home from '../../pages/Home';
import Setting from '../../pages/Setting';
import Details from '../../pages/Details';
import NewsComponent from '../News/News';
import Profile from '../../pages/Profile';
import News from '../../pages/News';
import ListUser from '../../pages/ListUser';
import './Menu.css'
import Schedule from '../../pages/Schedule';


const Menu: React.FC = () => {
  
  const paths = [
    { name: 'Home', url: '/app/home', icon: homeOutline },
    { name: 'Profile', url: '/app/profile', icon: personCircleOutline},
    { name: 'User List', url: '/app/UserList',icon:listCircleOutline},
    { name: 'Schedule', url: '/app/schedule', icon: calendar}, 
    { name: 'News', url: '/app/news', icon: newspaperOutline}
   
  ];
  
  return (
    <>
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
                  <IonIcon size='large' icon={item.icon} slot='start'/>
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
            <Route path='/app/profile' component={Profile} />
            <Route path='/app/schedule' component={Schedule} />
            <Route path='/app/news' component={News} />
            <Route path='/app/home/details' component={Details} />
            <Route path='/app/UserList' component={ListUser}/>
            <Route exact path='/app'>
              <Redirect to='/app/home' />
            </Route>
        </IonRouterOutlet>
      </>
  );
};

export default Menu;
