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
                label: 'Fatturazione',
                subMenu: [
                    {
                        label: 'Fatture Elettroniche',
                        subMenu: [],
                        icon_path: '',
                    },
                    {
                        label: 'Note di credito',
                        subMenu: [],
                        icon_path: '',
                    },
                    {
                        label: 'Ricevute',
                        subMenu: [
                            {
                                label: 'Generiche',
                                subMenu: [],
                                icon_path: '',
                            },
                            {
                                label: 'Soci/Tesserati',
                                subMenu: [],
                                icon_path: '',
                            },
                        ],
                        icon_path: '',
                    },
                    {
                        label: 'Rubrica',
                        subMenu: [],
                        icon_path: '',
                    },
                    {
                        label: 'Iva',
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
                ],
                icon_path: '',
            },
        ],
    },
    {
        label:'Lavoro Sportivo',
        icon_path: '../../../assets/svgs/amministrazione.svg',
        subMenu:[
            {
                label: 'Indennità, Compensi e Premi',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Riepilogo INPS/IRPEF',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Contabilizzazione INPS',
                subMenu: [],
                icon_path: '',
            },
            {
                label: 'Ritenuta d\'acconto',
                subMenu: [],
                icon_path: '',
            },
        ],
    },
    { 
        label: 'Cassa',
        icon_path: '../../../assets/svgs/impostazioni.svg',
        subMenu: [
            { 
                label: 'Entrate',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Uscite',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Gestione cassa',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: [
                    { 
                        label: 'Cassa',
                        icon_path: '../../../assets/svgs/impostazioni.svg',
                        subMenu: []
                    },
                    { 
                        label: 'Conti Correnti',
                        icon_path: '../../../assets/svgs/impostazioni.svg',
                        subMenu: []
                    },
                    { 
                        label: 'Giroconto',
                        icon_path: '../../../assets/svgs/impostazioni.svg',
                        subMenu: []
                    }
                ]
            }
        ]
    },
    { 
        label: 'Immobilizzazioni',
        icon_path: '../../../assets/svgs/impostazioni.svg',
        subMenu: []
    },
    { 
        label: 'Documenti Fiscali',
        icon_path: '../../../assets/svgs/impostazioni.svg',
        subMenu: [
            { 
                label: 'Piano dei conti',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Prima nota',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Rendiconto',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Partitario',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Bilancio',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: [
                    { 
                        label: 'Preventivo',
                        icon_path: '../../../assets/svgs/impostazioni.svg',
                        subMenu: []
                    },
                    { 
                        label: 'Consuntivo',
                        icon_path: '../../../assets/svgs/impostazioni.svg',
                        subMenu: []
                    }
                ]
            },
            { 
                label: 'Libro soci',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            },
            { 
                label: 'Indennità, Compensi e Premi',
                icon_path: '../../../assets/svgs/impostazioni.svg',
                subMenu: []
            }
        ]
    },
    { 
        label: 'Utiliy',
        icon_path: '../../../assets/svgs/impostazioni.svg',
        subMenu: []
    },
]