import { Component, EventEmitter, Output } from '@angular/core';
import { IMenu, sideBarMenu } from 'src/app/utils/IMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  openMenuFlag: boolean = false;
  selectedTabUp: {index: number, label: string} = {index:-1, label: ''};

  navBarActions: IMenu[] = sideBarMenu;
  actualSubBenu: IMenu[] = [];

  @Output() changeContentPanelEvent = new EventEmitter<string>();

  bottomSideButtonList: {label: string, path: string}[] = [
    {label:'Guida' , path:'../../../assets/svgs/guida.svg'},
    {label:'Impostazioni' , path:'../../../assets/svgs/impostazioni.svg'},
    {label:'Assistenza' , path:'../../../assets/svgs/assistenza.svg'},
    {label:'Privacy' , path:'../../../assets/svgs/privacy.svg'}
  ];

  menuAction(label: string, index: number) {
    if(this.navBarActions[index].subMenu.length == 0) {
      this.navigateTo(label);
      this.openMenuFlag = false;
      if(this.selectedTabUp.index == index) {
        label = '';
        index = -1;
      }
      this.selectedTabUp.index = index;
      this.selectedTabUp.label = label;
      return;
    }

    if(this.selectedTabUp.index == index || index > this.navBarActions.length) {
      label = '';
      index = -1;
      this.openMenuFlag = false;
    } else {
      if(this.openMenuFlag == false) this.openMenuFlag = true;
    }

    this.selectedTabUp.label = label;
    this.selectedTabUp.index = index;

    if(index != -1) {
      this.actualSubBenu = this.navBarActions[index].subMenu;
    }      
  }

  navigateTo(path: string){
    path = path.toLocaleLowerCase();
    path.replace(/ /g,"_");
    console.log(path);
    this.changeContentPanelEvent.emit(path);
    this.openMenuFlag = false;
    this.selectedTabUp.label = '';
    this.selectedTabUp.index = -1;
  }
}