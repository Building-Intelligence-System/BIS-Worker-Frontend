import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {QrScannerComponent} from "./components/qr-scanner/qr-scanner.component";
import {MainComponent} from "./components/main/main.component";
import {InfoComponent} from "./components/main/components/info/info.component";
import {NotificationComponent} from "./components/main/components/notification/notification.component";
import {ChatComponent} from "./components/main/components/chat/chat.component";
import {MapComponent} from "./components/main/components/map/map.component";
import {TaskComponent} from "./components/main/components/task/task.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'qrcode',
    component: QrScannerComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'notification',
        component: NotificationComponent,
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
