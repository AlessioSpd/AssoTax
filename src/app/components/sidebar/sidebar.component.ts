import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  openMenuFlag: boolean = false;
  selectedTabUp: {index: number, label: string} = {index:-1, label: ''};

  navBarActions: {label:string, icon_path: string, sub_menu: string[]}[] = [
    { 
      label: 'Dashboard',
      icon_path: '../../../assets/svgs/dashboard.svg',
      sub_menu: []
    },
    { 
      label: 'News',
      icon_path: '../../../assets/svgs/notifiche.svg',
      sub_menu: []
    },
    {
      label:'Associazione',
      icon_path: '../../../assets/svgs/associazione.svg',
      sub_menu:['Dati', 'Direttivo', 'Verbali']
    },
    {
      label:'Segreteria',
      icon_path: '../../../assets/svgs/segreteria.svg',
      sub_menu:['Tesserati','Soci','Certificati Medici','Moduli','Abbonamenti']
    },
    {
      label:'Amministrazione',
      icon_path: '../../../assets/svgs/amministrazione.svg',
      sub_menu:[
        'C/C & Cassa', 'Clienti', 'Fornitori', 'Entrate', 'Uscite', 'Fatturazione', 'Ricevute',
        'Soggetti Compensi & Rimborsi', 'Codici IVA', 'Numeratori', 'Centri di Costo', 'Piano dei Conti',
        'Bilancio Preventivo', 'Partitario', 'Iva', 'Gestione Cassa', 'Giroconto', 'Immobilizzazioni'
      ]
    },
    { 
      label: 'Utiliy',
      icon_path: '../../../assets/svgs/impostazioni.svg',
      sub_menu: []
    },
    
  ];

  actualSubBenu = [''];

  bottomSideButtonList: {label: string, path: string}[] = [
    {label:'Guida' , path:'../../../assets/svgs/guida.svg'},
    {label:'Impostazioni' , path:'../../../assets/svgs/impostazioni.svg'},
    {label:'Assistenza' , path:'../../../assets/svgs/assistenza.svg'},
    {label:'Privacy' , path:'../../../assets/svgs/privacy.svg'}
  ];

  menuAction(label: string, index: number) {
    
    if(this.navBarActions[index].sub_menu.length == 0) {
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
      this.actualSubBenu = this.navBarActions[index].sub_menu;
    }
  }

  navigateTo(path: string){
    this.openMenuFlag = false;
    this.selectedTabUp.label = '';
    this.selectedTabUp.index = -1;
  }
}