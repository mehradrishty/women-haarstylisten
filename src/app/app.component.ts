import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";

  public cutList: any[];
  public styleList: any[];
  public hochsteckfrisurenList: any[];
  public colorList1: any[];
  public colorList2: any[];
  public kosmetikList: any[];
  public specialsList: any[];
  public extensionsList: any[];
  public herrenList: any[];
  public kinderList: any[];

  constructor(private httpClient: HttpClient) {
    this.cutList = [
      {
        serviceNamen: "Trockenschnitt",
        preisListe: ["Kurz: 28,00 €", "Mittel: 32,00 €", "Lang: 38,00 €"],
      },
      {
        serviceNamen: "Waschen & Schneiden",
        preisListe: ["Kurz: 30,00 €", "Mittel: 35,00 €", "Lang: 41,00 €"],
      },
      {
        serviceNamen: "Waschen, Schneiden & Föhnen",
        preisListe: ["Kurz: 41,00 €", "Mittel: 46,00 €", "Lang: 55,00 €"],
      },
      {
        serviceNamen: "Konturen",
        preisListe: ["13,00 €"],
      },
      {
        serviceNamen: "Pony Schneiden",
        preisListe: ["8,00 €"],
      },
    ];

    this.styleList = [
      {
        serviceNamen: "Waschen & Föhnen",
        preisListe: ["Kurz: 26,00 €", "Mittel: 30,00 €", "Lang: 34,00 €"],
      },
      {
        serviceNamen: "Waschen & Einlegen",
        preisListe: ["Kurz: 29,00 €", "Mittel: 37,00 €", "Lang: 45,00 €"],
      },
      {
        serviceNamen: "Waschen & Locken (Lockenstab)",
        preisListe: ["Kurz: 34,00 €", "Mittel: 38,00 €", "Lang: 42,00 €"],
      },
    ];

    this.colorList1 = [
      {
        serviceNamen: "Ansatzfarbe",
        preisListe: ["ab 41,00 €"],
      },
      {
        serviceNamen: "Komplettfarbe",
        preisListe: [
          "Kurz: ab 50,00 €",
          "Mittel: ab 60,00 €",
          "Lang: ab 73,00 €",
        ],
      },
      {
        serviceNamen: "Tönung",
        preisListe: [
          "Kurz: ab 50,00 €",
          "Mittel: ab 60,00 €",
          "Lang: ab 73,00 €",
        ],
      },
      {
        serviceNamen: "Abmattierung",
        preisListe: [
          "Kurz: ab 39,00 €",
          "Mittel: ab 48,00 €",
          "Lang: ab 55,00 €",
        ],
      },
    ];

    this.colorList2 = [
      {
        serviceNamen: "Foliensträhnen (Oberkopf)",
        preisListe: ["ab 79,00 €"],
      },
      {
        serviceNamen: "Foliensträhnen (Komplett Neu)",
        preisListe: [
          "Kurz: ab 66,00 €",
          "Mittel: ab 84,00 €",
          "Lang: ab 102,00 €",
        ],
      },
      {
        serviceNamen: "Painting",
        preisListe: [
          "Kurz: ab 66,00 €",
          "Mittel: ab 84,00 €",
          "Lang: ab 102,00 €",
        ],
      },
      {
        serviceNamen: "Balayage",
        preisListe: [
          "Kurz: ab 150,00 €",
          "Mittel: ab 200,00 €",
          "Lang: ab 250,00 €",
        ],
      },
    ];

    this.extensionsList = [
      {
        serviceNamen: "Extensions (Haarverlängerung und Haarverdichtung)",
        preisListe: ["Preis auf Anfrage"],
      },
    ];

    this.hochsteckfrisurenList = [
      {
        serviceNamen: "Flechtfrisuren",
        preisListe: ["ab 24,00 €"],
      },
      {
        serviceNamen: "Abendfrisur",
        preisListe: ["ab 60,00 €"],
      },
      {
        serviceNamen: "Brautfrisur",
        preisListe: ["ab 150,00 €"],
      },
    ];

    this.specialsList = [
      {
        serviceNamen: "Splissschnitt",
        preisListe: ["ab 35,00 €"],
      },
      {
        serviceNamen: "Olaplex Treatment",
        preisListe: ["55,00 €"],
      },
      {
        serviceNamen: "Dauerwelle",
        preisListe: ["Kurz: 54,00 €", "Mittel: 85,00 €", "Lang: 120,00 €"],
      },
      {
        serviceNamen: "Haarkur",
        preisListe: ["ab 10,00 €"],
      },
      {
        serviceNamen: "Keratinglättung",
        preisListe: ["Kurz: 150,00 €", "Mittel: 200,00 €", "Lang: 250,00 €"],
      },
    ];

    this.kosmetikList = [
      {
        serviceNamen: "Augenbrauen Zupfen",
        preisListe: ["10,00 €"],
      },
      {
        serviceNamen: "Augenbrauen Färben",
        preisListe: ["10,00 €"],
      },
      {
        serviceNamen: "Wimpern Färben",
        preisListe: ["12,00 €"],
      },
      {
        serviceNamen: "Komplette Gesicht mit Faden",
        preisListe: ["25,00 €"],
      },
      {
        serviceNamen: "Oberlippen Zupfen",
        preisListe: ["6,00 €"],
      },
      {
        serviceNamen: "Wimpernlifting",
        preisListe: ["ab 39,00 €"],
      },
    ];

    this.herrenList = [
      {
        serviceNamen: "Trockenschnitt",
        preisListe: ["26,00 €"],
      },
      {
        serviceNamen: "Waschen, Schneiden & Föhnen",
        preisListe: ["28,00 €"],
      },
      {
        serviceNamen: "Keratinglättung/Dauerwelle",
        preisListe: ["ab 55,00 €"],
      },
      {
        serviceNamen: "Haartönung",
        preisListe: ["ab 25,00 €"],
      },
      {
        serviceNamen: "Bart Kürzen",
        preisListe: ["10,00 €"],
      },
      {
        serviceNamen: "Bart Farbe",
        preisListe: ["ab 20,00 €"],
      },
    ];

    this.kinderList = [
      {
        serviceNamen: "Trockenhaarschnitt",
        preisListe: ["23,00 €"],
      },
      {
        serviceNamen: "Waschen, Schneiden & Föhnen",
        preisListe: ["25,00 €"],
      },
    ];
  }
}
