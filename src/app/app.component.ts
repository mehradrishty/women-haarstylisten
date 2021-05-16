import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
  public pMMBAugenBrauen:any[];
  public pMMBLippen:any[];

  constructor(private httpClient: HttpClient){

    this.cutList = [
      {
        serviceNamen : "Trockenschnitt",
        preisListe : [
          "Kurz: 20€",
          "Mittel: 23€",
          "Lang: 26€",
          "Schüler/Stundenten: 18€",
          "Kinder bis 8 Jahren: 15€"
        ]
      },
      {
        serviceNamen : "Waschen & Schneiden",
        preisListe : [
          "Kurz: 24€",
          "Mittel: 26€",
          "Lang: 28€"
        ]
      },
      {
        serviceNamen : "Waschen, Schneiden & Föhnen",
        preisListe : [
          "Kurz: 37€"
          ,"Mittel: 42€"
          ,"Lang: 48€"
        ]
      },
      {
        serviceNamen : "Konturen",
        preisListe : [
          "10€",
        ]
      }
    ];

    this.styleList = [
      {
        serviceNamen : "Waschen & Föhnen",
        preisListe : [
          "Kurz: 18€",
          "Mittel: 20€",
          "Lang: 24€"
        ]
      },
      {
        serviceNamen : "Waschen & Einlegen",
        preisListe : [
          "Kurz: 22€",
          "Mittel: 27€",
          "Lang: 32€"
        ]
      },
      {
        serviceNamen : "Waschen & Locken mit Lockenstab",
        preisListe : [
          "35€"
        ]
      }
    ];

    this.hochsteckfrisurenList = [
      {
        serviceNamen : "Flechtfrisuren",
        preisListe : [
          "15€"
        ]
      },
      {
        serviceNamen : "Abendfrisur",
        preisListe : [
          "45€"
        ]
      },
      {
        serviceNamen : "Brautfrisur",
        preisListe : [
          "ab 150€"
        ]
      },
    ];

    this.colorList1 = [
      {
        serviceNamen : "Ansatzfarbe",
        preisListe : [
          "33€"
        ]
      },
      {
        serviceNamen : "Komplettfarbe",
        preisListe : [
          "Kurz: 40€",
          "Mittel: 49€",
          "Lang: 59€"
        ]
      },
      {
        serviceNamen : "Intensivtönung",
        preisListe : [
          "Kurz: 35€",
          "Mittel: 45€",
          "Lang: 55€"
        ]
      },
      {
        serviceNamen : "Pflegetönung",
        preisListe : [
          "Kurz: 35€",
          "Mittel: 45€",
          "Lang: 55€"
        ]
      },
      {
        serviceNamen : "Abmattierung",
        preisListe : [
          "Kurz: 30€",
          "Mittel: 35€",
          "Lang: 40€"
        ]
      },
    ];

    this.colorList2 = [
      {
        serviceNamen : "Foliensträhnen (Oberkopf)",
        preisListe : [
          "ab 45€"
        ]
      },
      {
        serviceNamen : "Foliensträhnen (Komplett Neu)",
        preisListe : [
          "Kurz: 55€",
          "Mittel: 70€",
          "Lang: 85€"
        ]
      },
      {
        serviceNamen : "Painting",
        preisListe : [
          "ab 180€"
        ]
      },
      {
        serviceNamen : "Balayage",
        preisListe : [
          "ab 180€"
        ]
      },
    ];

    this.kosmetikList = [
      {
        serviceNamen : "Augenbrauen Zupfen",
        preisListe : [
          "8€"
        ]
      },
      {
        serviceNamen : "Augenbrauen Färben",
        preisListe : [
          "8€"
        ]
      },
      {
        serviceNamen : "Wimpern Färben",
        preisListe : [
          "10€"
        ]
      },
      {
        serviceNamen : "Tages Make-Up",
        preisListe : [
          "45€"
        ]
      },
      {
        serviceNamen : "Abend Make-Up",
        preisListe : [
          "55€"
        ]
      },
      {
        serviceNamen : "Braut Make-Up",
        preisListe : [
          "75€"
        ]
      }
    ];

    this.specialsList = [
      {
        serviceNamen : "Splissschnitt",
        preisListe : [
          "28€"
        ]
      },
      {
        serviceNamen : "Olaplex Treatment",
        preisListe : [
          "30€"
        ]
      },
      {
        serviceNamen : "Dauerwelle",
        preisListe : [
          "Kurz: 45€",
          "Mittel: 55€",
          "Lang: 65€"
        ]
      },
      {
        serviceNamen : "Haarkur",
        preisListe : [
          "8€"
        ]
      },
      {
        serviceNamen : "Keratinglättung",
        preisListe : [
          "ab 180€"
        ]
      },
    ];

    this.damenPreisList1 = [
      {
        serviceNamen : "Waschen & Schneiden",
        preisListe : [
          "Kurz: 22€",
          "Mittel: 24€",
          "Lang: 26€"
         ]
      },
      {
        serviceNamen : "Waschen, Schneiden, Föhnen & Styling",
        preisListe : [
          "Kurz: 35€"
          ,"Mittel: 40€"
          ,"Lang: 45€"
         ]
      },
      {
        serviceNamen : "Waschen & Föhnen",
        preisListe : [
          "Kurz: 18€",
          "Lang: 24€"
         ]
      },
      {
        serviceNamen : "Waschen & Einlegen",
        preisListe : [
          "Kurz: 22€",
          "Mittel: 27€",
          "Lang: 32€"
         ]
      },
      {
        serviceNamen : "Waschen & Locken mit Lockenstab",
        preisListe : [
          "35€"
         ]
      }
    ]

    this.damenPreisList3 = [
      {
        serviceNamen : "Brautstyling Kompelett ",
        preisListe : [
          "250€"
         ]
      },
      {
        serviceNamen : "Konturen",
        preisListe : [
          "10€"
         ]
      },
      {
        serviceNamen : "Kinder ( bis 8 jahre )",
        preisListe : [
          "15€"
         ]
      },
      {
        serviceNamen: "Splissschnitt",
        preisListe: [
          "28€"
        ]
      },
      {
        serviceNamen : "Wasserwelle",
        preisListe : [
          "Ab 40€"
         ]
      },
      {
        serviceNamen: "Keratinglättung",
        preisListe: [
          "150€"
        ]
      }
    ]

    this.damenPreisList2 = [
      {
        serviceNamen : "Brautfrisur",
        preisListe : [
          "150€"
         ]
      },
      {
        serviceNamen : "Hennafrisur",
        preisListe : [
          "90€"
         ]
      },
      {
        serviceNamen : "Abendfrisur",
        preisListe : [
          "45€"
         ]
      },
      {
        serviceNamen : "Flechtfrisuren",
        preisListe : [
          "15€"
         ]
      },
      {
        serviceNamen : "Lokenfrisur",
        preisListe : [
          "Ab 30€"
         ]
      }
    ]

    this.pMMBAugen = [
      {
        serviceNamen: "Lidstrich Oberlied",
        preisListe: [
          "200€"
        ]
      },
      {
        serviceNamen: "Lidstrich Ober-unterlied",
        preisListe: [
          "400€"
        ]
      },
      {
        serviceNamen: "Wimperkranzverdichtung (Oberlied)",
        preisListe: [
          "180€"
        ]
      },
      {
        serviceNamen: "Wimperkranzverdichtung (Ober-unterlied)",
        preisListe: [
          "320€"
        ]
      }
    ]

    this.pMMBAugenBrauen = [
      {
        serviceNamen: "Haarzeichnung (Fein)",
        preisListe: [
          "380€"
        ]
      },
      {
        serviceNamen: "Haarzeichnung (Korektur)",
        preisListe: [
          "120€"
        ]
      }
    ]

    this.pMMBLippen = [
      {
        serviceNamen: "Lippenschattierung",
        preisListe: [
          "450€"
        ]
      },
      {
        serviceNamen: "Vollschattierung",
        preisListe: [
          "600€"
        ]
      }
    ]

    this.haarVerlangerungPreisList = [
      {
        serviceNamen: "Komplettverlängerung",
        preisListe: [
          "Ab 400€"
        ]
      },
      {
        serviceNamen: "Einzelne Extensions",
        preisListe: [
          "4€"
        ]
      },
      {
        serviceNamen: "Ab 30 cm Verlängerung",
        preisListe: [
          "Ab 400€"
        ]
      },
      {
        serviceNamen: "Ab 40 cm Verlängerung",
        preisListe: [
          "Ab 450€"
        ]
      },
      {
        serviceNamen: "Ab 50 cm Verlängerung",
        preisListe: [
          "Ab 500€"
        ]
      },
      {
        serviceNamen: "Ab 60 cm Verlängerung",
        preisListe: [
          "Ab 550€"
        ]
      }
    ]

    this.makeUpPreisList =[
      {
        serviceNamen: "Tages Make-up",
        preisListe: [
          "Ab 45€"
        ]
      },
      {
        serviceNamen: "Abend Make-up",
        preisListe: [
          "Ab 55€"
        ]
      },
      {
        serviceNamen: "Henna Make-up",
        preisListe: [
          "Ab 65€"
        ]
      },{
        serviceNamen: "Braut Make-up",
        preisListe: [
          "Ab 75€"
        ]
      }
    ]

    this.treatmentPreisList = [
      {
        serviceNamen: "Olaplex Treatment",
        preisListe: [
          "25€"
        ]
      },
      {
        serviceNamen: "Treatment (HAARKUR)",
        preisListe: [
          "8€"
        ]
      },
      {
        serviceNamen: "Dauerwelle",
        preisListe: [
          "Kurz: 40€",
          "Mittel: 45€",
          "Lang: 50€",
        ]
      },
      {
        serviceNamen: "Hochstecken",
        preisListe: [
          "ab 45€"
        ]
      },
      {
        serviceNamen: "Balayage Hochsetzen",
        preisListe: [
          "Kurz: 50€",
          "Mittel: 75€",
          "Lang: 90€"
        ]
      },
      {
        serviceNamen: "Balayage inkl Olaplex, Waschen, Föhnen, KUR & Styling",
        preisListe: [
          "Kurz: 145€",
          "Mittel: 185€",
          "Lang: 225€",
          "Über-Lang: 280€ - 330€"
        ]
      }
    ]

    this.farbePreisList = [
      {
        serviceNamen: "Ansatzfarbe",
        preisListe: [
          "30€"
        ]
      },
      {
        serviceNamen: "Komplettfarbe",
        preisListe: [
          "Kurz: 33€",
          "Mittel: 39€",
          "Lang: 49€"
        ]
      },
      {
        serviceNamen: "Intensivtönung",
        preisListe: [
          "Kurz: 25€",
          "Mittel: 30€",
          "Lang: 35€"
        ]
      },
      {
        serviceNamen: "Pflegetönung",
        preisListe: [
          "Kurz: 20€",
          "Mittel: 25€",
          "Lang: 30€"
        ]
      }
    ]

    this.starhnenPreisList = [
      {
        serviceNamen: "Foliensträhnen ( Komplett Neu )",
        preisListe: [
          "Kurz: 50€",
          "Mittel: 60€",
          "Lang: 75€"
        ]
      },
      {
        serviceNamen: "Foliensträhnen ( Ansatz )",
        preisListe: [
          "Kurz: 35€",
          "Mittel: 45€",
          "Lang: 55€"
        ]
      },
      {
        serviceNamen: "Paintings",
        preisListe: [
          "Kurz: 45€",
          "Mittel: 50€",
          "Lang: 55€"
        ]
      },
      {
        serviceNamen: "Abmattierung",
        preisListe: [
          "Kurz: 25€",
          "Mittel: 30€",
          "Lang: 35€"
        ]
      }
    ]

    this.kosmeticPreisList = [
      {
        serviceNamen : "Augenbrauen-Zupfen",
        preisListe : [
          "8€"
         ]
      },
      {
        serviceNamen : "Augenbrauen-färben",
        preisListe : [
          "8€"
         ]
      },
      {
        serviceNamen : "Wimpern-färben",
        preisListe : [
          "10€"
         ]
      }
    ];
  }
}
