export class IMenu {
    label: string;
    icon_path: string;
    subMenu: IMenu[];

    constructor(){
        this.subMenu = [];
        this.icon_path = '';
        this.label = '';
    }
}

export const sideBarMenu: IMenu[] = [
    {
        label: 'Dashboard',
        icon_path: '../../../assets/svgs/dashboard.svg',
        subMenu: [],
    },
    
    { 
        label: 'News',
        icon_path: '../../../assets/svgs/notifiche.svg',
        subMenu: [],
    },
    {
        label:'Associazione',
        icon_path: '../../../assets/svgs/associazione.svg',
        subMenu:[
            {
                label: 'Dati',
                icon_path: '',
                subMenu: [],
            },
            {
                label: 'Direttivo',
                icon_path: '',
                subMenu: [],
            },
            {
                label: 'Verbali',
                icon_path: '',
                subMenu: [],
            }
        ],
    },
    {
        label:'Segreteria',
        icon_path: '../../../assets/svgs/segreteria.svg',
        subMenu: [
            {
                label: 'Tesserati',
                icon_path: '',
                subMenu: [],
            },
            {
                label: 'Soci',
                icon_path: '',
                subMenu: [],
            },
            {
                label: 'Certificati Medici',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Moduli',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Abbonamenti',
                subMenu: [],
                icon_path: '',
            },
        ],
    },
    {
        label:'Amministrazione',
        icon_path: '../../../assets/svgs/amministrazione.svg',
        subMenu:[
            {
                label: 'Conti corrente',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Clienti',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Fornitori',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Entrate',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Uscite',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Fatturazione',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Ricevute',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Soggetti Compensi & Rimborsi',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Codici IVA',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Numeratori',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Centri di Costo',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Piano dei Conti',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Bilancio Preventivo',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Partitario',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Iva',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Gestione Cassa',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Giroconto',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Immobilizzazioni',
                subMenu: [],
                icon_path: '',
            },
        ],
    },
    { 
        label: 'Utiliy',
        icon_path: '../../../assets/svgs/impostazioni.svg',
        subMenu: []
    },
]