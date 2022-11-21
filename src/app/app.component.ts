import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public cutList: any[];
  public styleList: any[];
  public hochsteckfrisurenList: any[];
  public colorList1: any[];
  public colorList2: any[];
  public kosmetikList: any[];
  public specialsList: any[];

  public damenPreisList1: any[];
  public damenPreisList2: any[];
  public damenPreisList3: any[];
  public makeUpPreisList: any[];
  public farbePreisList: any[];
  public starhnenPreisList: any[];
  public kosmeticPreisList: any[];
  public treatmentPreisList: any[];
  public haarVerlangerungPreisList: any[];
  public pMMBAugen: any[];
  public pMMBAugenBrauen: any[];
  public pMMBLippen: any[];

  constructor(private httpClient: HttpClient) {

    this.cutList = [
      {
        serviceNamen: 'Trockenschnitt',
        preisListe: [
          'Kurz: ab 25€',
          'Mittel: ab 29€',
          'Lang: ab 33€',
          'Schüler/Stundenten: ab 18€',
          'Kinder bis 8 Jahren: ab 19€'
        ]
      },
      {
        serviceNamen: 'Waschen & Schneiden',
        preisListe: [
          'Kurz: ab 28€',
          'Mittel: ab 33€',
          'Lang: ab 35€'
        ]
      },
      {
        serviceNamen: 'Waschen, Schneiden & Föhnen',
        preisListe: [
          'Kurz: ab 37€'
          , 'Mittel: ab 42€'
          , 'Lang: ab 48€'
        ]
      },
      {
        serviceNamen: 'Konturen',
        preisListe: [
          'ab 13€',
        ]
      }
    ];

    this.styleList = [
      {
        serviceNamen: 'Waschen & Föhnen',
        preisListe: [
          'Kurz: ab 26€',
          'Lang: ab 34€'
        ]
      },
      {
        serviceNamen: 'Waschen & Einlegen',
        preisListe: [
          'Kurz: ab 29€',
          'Lang: ab 45€'
        ]
      },
      {
        serviceNamen: 'Waschen & Locken mit Lockenstab',
        preisListe: [
          'ab 42€'
        ]
      }
    ];

    this.hochsteckfrisurenList = [
      {
        serviceNamen: 'Flechtfrisuren',
        preisListe: [
          'ab 24€'
        ]
      },
      {
        serviceNamen: 'Abendfrisur',
        preisListe: [
          'ab 60€'
        ]
      },
      {
        serviceNamen: 'Brautfrisur',
        preisListe: [
          'ab 150€'
        ]
      },
    ];

    this.colorList1 = [
      {
        serviceNamen: 'Ansatzfarbe',
        preisListe: [
          'ab 41€'
        ]
      },
      {
        serviceNamen: 'Komplettfarbe',
        preisListe: [
          'Kurz: ab 50€',
          'Mittel: ab 60€',
          'Lang: ab 73€'
        ]
      },
      {
        serviceNamen: 'Intensivtönung',
        preisListe: [
          'Kurz: ab 50€',
          'Mittel: ab 60€',
          'Lang: ab 73€'
        ]
      },
      // {
      //   serviceNamen: 'Pflegetönung',
      //   preisListe: [
      //     'Kurz: ab 35€',
      //     'Mittel: ab 45€',
      //     'Lang: ab 55€'
      //   ]
      // },
      {
        serviceNamen: 'Abmattierung',
        preisListe: [
          'Kurz: ab 37€',
          'Mittel: ab 43€',
          'Lang: ab 49€'
        ]
      },
    ];

    this.colorList2 = [
      {
        serviceNamen: 'Foliensträhnen (Oberkopf)',
        preisListe: [
          'ab 79€'
        ]
      },
      {
        serviceNamen: 'Foliensträhnen (Komplett Neu)',
        preisListe: [
          'Kurz: ab 66€',
          'Mittel: ab 84€',
          'Lang: ab 102€'
        ]
      },
      {
        serviceNamen: 'Painting',
        preisListe: [
          'Kurz: ab 66€',
          'Mittel: ab 84€',
          'Lang: ab 102€'
        ]
      },
      {
        serviceNamen: 'Balayage',
        preisListe: [
          'ab 200€'
        ]
      },
    ];

    this.kosmetikList = [
      {
        serviceNamen: 'Augenbrauen Zupfen',
        preisListe: [
          'ab 8€'
        ]
      },
      {
        serviceNamen: 'Augenbrauen Färben',
        preisListe: [
          'ab 8€'
        ]
      },
      {
        serviceNamen: 'Wimpern Färben',
        preisListe: [
          'ab 10€'
        ]
      },
      // {
      //   serviceNamen: 'Tages Make-Up',
      //   preisListe: [
      //     'ab 54€'
      //   ]
      // },
      // {
      //   serviceNamen: 'Abend Make-Up',
      //   preisListe: [
      //     'ab 66€'
      //   ]
      // },
      // {
      //   serviceNamen: 'Braut Make-Up',
      //   preisListe: [
      //     'ab 90€'
      //   ]
      // }
    ];

    this.specialsList = [
      {
        serviceNamen: 'Splissschnitt',
        preisListe: [
          'ab 35€'
        ]
      },
      {
        serviceNamen: 'Olaplex Treatment',
        preisListe: [
          'ab 55€'
        ]
      },
      {
        serviceNamen: 'Dauerwelle',
        preisListe: [
          'Kurz: ab 54€',
          'Mittel: ab 66€',
          'Lang: ab 78€'
        ]
      },
      {
        serviceNamen: 'Haarkur',
        preisListe: [
          'ab 8€'
        ]
      },
      {
        serviceNamen: 'Keratinglättung',
        preisListe: [
          'ab 150€'
        ]
      },
    ];

    // this.damenPreisList1 = [
    //   {
    //     serviceNamen: 'Waschen & Schneiden',
    //     preisListe: [
    //       'Kurz: ab 22€',
    //       'Mittel: ab 24€',
    //       'Lang: ab 26€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Waschen, Schneiden, Föhnen & Styling',
    //     preisListe: [
    //       'Kurz: ab 35€'
    //       , 'Mittel: ab 40€'
    //       , 'Lang: ab 45€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Waschen & Föhnen',
    //     preisListe: [
    //       'Kurz: ab 18€',
    //       'Lang: ab 24€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Waschen & Einlegen',
    //     preisListe: [
    //       'Kurz: ab 22€',
    //       'Mittel: ab 27€',
    //       'Lang: ab 32€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Waschen & Locken mit Lockenstab',
    //     preisListe: [
    //       'ab 35€'
    //     ]
    //   }
    // ];

    // this.damenPreisList3 = [
    //   {
    //     serviceNamen: 'Brautstyling Kompelett ',
    //     preisListe: [
    //       'ab 250€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Konturen',
    //     preisListe: [
    //       'ab 10€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Kinder ( bis 8 jahre )',
    //     preisListe: [
    //       'ab 15€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Splissschnitt',
    //     preisListe: [
    //       'ab 28€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Wasserwelle',
    //     preisListe: [
    //       'Ab 40€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Keratinglättung',
    //     preisListe: [
    //       'ab 150€'
    //     ]
    //   }
    // ];

    // this.damenPreisList2 = [
    //   {
    //     serviceNamen: 'Brautfrisur',
    //     preisListe: [
    //       'ab 150€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Hennafrisur',
    //     preisListe: [
    //       'ab 90€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Abendfrisur',
    //     preisListe: [
    //       'ab 60€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Flechtfrisuren',
    //     preisListe: [
    //       'ab 15€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Lokenfrisur',
    //     preisListe: [
    //       'Ab 30€'
    //     ]
    //   }
    // ];

    // this.pMMBAugen = [
    //   {
    //     serviceNamen: 'Lidstrich Oberlied',
    //     preisListe: [
    //       'ab 200€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Lidstrich Ober-unterlied',
    //     preisListe: [
    //       'ab 400€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Wimperkranzverdichtung (Oberlied)',
    //     preisListe: [
    //       'ab 180€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Wimperkranzverdichtung (Ober-unterlied)',
    //     preisListe: [
    //       'ab 320€'
    //     ]
    //   }
    // ];

    // this.pMMBAugenBrauen = [
    //   {
    //     serviceNamen: 'Haarzeichnung (Fein)',
    //     preisListe: [
    //       'ab 380€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Haarzeichnung (Korektur)',
    //     preisListe: [
    //       'ab 120€'
    //     ]
    //   }
    // ];

    // this.pMMBLippen = [
    //   {
    //     serviceNamen: 'Lippenschattierung',
    //     preisListe: [
    //       'ab 450€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Vollschattierung',
    //     preisListe: [
    //       'ab 600€'
    //     ]
    //   }
    // ];

    // this.haarVerlangerungPreisList = [
    //   {
    //     serviceNamen: 'Komplettverlängerung',
    //     preisListe: [
    //       'Ab 400€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Einzelne Extensions',
    //     preisListe: [
    //       'ab 4€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Ab 30 cm Verlängerung',
    //     preisListe: [
    //       'Ab 400€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Ab 40 cm Verlängerung',
    //     preisListe: [
    //       'Ab 450€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Ab 50 cm Verlängerung',
    //     preisListe: [
    //       'Ab 500€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Ab 60 cm Verlängerung',
    //     preisListe: [
    //       'Ab 550€'
    //     ]
    //   }
    // ];

    // this.makeUpPreisList = [
    //   {
    //     serviceNamen: 'Tages Make-up',
    //     preisListe: [
    //       'Ab 45€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Abend Make-up',
    //     preisListe: [
    //       'Ab 55€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Henna Make-up',
    //     preisListe: [
    //       'Ab 65€'
    //     ]
    //   }, {
    //     serviceNamen: 'Braut Make-up',
    //     preisListe: [
    //       'Ab 75€'
    //     ]
    //   }
    // ];

    // this.treatmentPreisList = [
    //   {
    //     serviceNamen: 'Olaplex Treatment',
    //     preisListe: [
    //       'ab 25€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Treatment (HAARKUR)',
    //     preisListe: [
    //       'ab 8€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Dauerwelle',
    //     preisListe: [
    //       'Kurz: ab 40€',
    //       'Mittel: ab 45€',
    //       'Lang: ab 50€',
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Hochstecken',
    //     preisListe: [
    //       'ab 45€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Balayage Hochsetzen',
    //     preisListe: [
    //       'Kurz: ab 50€',
    //       'Mittel: ab 75€',
    //       'Lang: ab 90€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Balayage inkl Olaplex, Waschen, Föhnen, KUR & Styling',
    //     preisListe: [
    //       'Kurz: ab 145€',
    //       'Mittel: ab 185€',
    //       'Lang: ab 225€',
    //       'Über-Lang: ab 280€ - 330€'
    //     ]
    //   }
    // ];

    // this.farbePreisList = [
    //   {
    //     serviceNamen: 'Ansatzfarbe',
    //     preisListe: [
    //       'ab 41€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Komplettfarbe',
    //     preisListe: [
    //       'Kurz: ab 33€',
    //       'Mittel: ab 39€',
    //       'Lang: ab 49€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Intensivtönung',
    //     preisListe: [
    //       'Kurz: ab 25€',
    //       'Mittel: ab 30€',
    //       'Lang: ab 35€'
    //     ]
    //   },
    //   // {
    //   //   serviceNamen: 'Pflegetönung',
    //   //   preisListe: [
    //   //     'Kurz: ab 20€',
    //   //     'Mittel: ab 25€',
    //   //     'Lang: ab 30€'
    //   //   ]
    //   // }
    // ];

    // this.starhnenPreisList = [
    //   {
    //     serviceNamen: 'Foliensträhnen ( Komplett Neu )',
    //     preisListe: [
    //       'Kurz: ab 66€',
    //       'Mittel: ab 84€',
    //       'Lang: ab 102€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Foliensträhnen ( Oberkopf )',
    //     preisListe: [
    //       'ab 79€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Paintings',
    //     preisListe: [
    //       'Kurz: ab 45€',
    //       'Mittel: ab 50€',
    //       'Lang: ab 55€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Abmattierung',
    //     preisListe: [
    //       'Kurz: ab 25€',
    //       'Mittel: ab 30€',
    //       'Lang: ab 35€'
    //     ]
    //   }
    // ];

    // this.kosmeticPreisList = [
    //   {
    //     serviceNamen: 'Augenbrauen-Zupfen',
    //     preisListe: [
    //       'ab 8€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Augenbrauen-färben',
    //     preisListe: [
    //       'ab 8€'
    //     ]
    //   },
    //   {
    //     serviceNamen: 'Wimpern-färben',
    //     preisListe: [
    //       'ab 10€'
    //     ]
    //   }
    // ];
  }
}
