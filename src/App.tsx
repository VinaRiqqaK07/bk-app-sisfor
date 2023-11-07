import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu/Menu';
import Setting from './pages/Setting';
import Profile  from './components/Profile/profileuser';
import TestProfile from './components/tesnewprofile/testprofile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Details from './pages/Details';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route component={Register} path="/register" exact />
        <Route component={Menu} path="/app" />
        <Route component={TestProfile} path="/testprofile" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
