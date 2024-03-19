import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  contentOpened: string = "soci";

  topBarButton: {label:string, path: string}[] = [
    {label:"Notifiche", path:'../../../assets/svgs/notifiche_dark.svg'},
    {label:"Anno 2024", path:'../../../assets/svgs/anno_dark.svg'},
    {label:"ASD NOME", path:'../../../assets/svgs/nome_dark.svg'},
  ]

  openNotifyFlag: boolean = false;

  notificationStatic: string[] = ['Nuovo sconto per la frutta', 'Mango ha vinto Sanremo']

  topBarClick(index: number) {
    if(index == 0) {
      this.openNotifyFlag = !this.openNotifyFlag;
    }
  }

  changeContentPanel(path: string) {
    this.contentOpened = path;
  }

}
