import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})
export class StarterComponent {
   
  pagina = "home";
  
  //in comune
  stat: string = "Stat";
  base: string = "Base";
  rank: string = "Rank";
  PuntiSalute: string = "Punti Salute";
  Attacco: string = "Attacco";
  Difesa: string = "Difesa";
  AttaccoSpeciale: string = "Attacco Speciale";
  DifesaSpeciale: string = "Difesa Speciale";
  Velocita: string = "Velocità";

  //TURTWIG
  altezza1: string = "Altezza: 0,4 m";
  peso1: string = "Peso: 10,2 kg";
  categoria1: string = "Categoria: Fogliolina";
  abilita1: string = "Abilità: Erbaiuto";
  sesso1: string = "sesso: Maschio";
  PuntiSalutebase1: string = "55";
  Attaccobase1: string = "68";
  Difesabase1: string = "64";
  AttaccoSpecialebase1: string = "45";
  DifesaSpecialebase1: string = "55";
  Velocitabase1: string = "31";
  PuntiSaluteRank1: string = "29.7";
  AttaccoRank1: string = "39.7";
  DifesaRank1: string = "40.6";
  AttaccoSpecialeRank1: string = "21";
  DifesaSpecialeRank1: string = "30.1";
  VelocitaRank1: string = "10.1";

  //CHIMCHAR
  altezza2: string = "Altezza: 0,5 m";
  peso2: string = "Peso: 6,2 kg";
  categoria2: string = "Categoria: Scimpanzé";
  abilita2: string = "Abilità: Aiutofuoco";
  sesso2: string = "sesso: Maschio";
  PuntiSalutebase2: string = "44";
  Attaccobase2: string = "58";
  Difesabase2: string = "44";
  AttaccoSpecialebase2: string = "58";
  DifesaSpecialebase2: string = "44";
  Velocitabase2: string = "61";
  PuntiSaluteRank2: string = "13.1";
  AttaccoRank2: string = "26.9";
  DifesaRank2: string = "14.8";
  AttaccoSpecialeRank2: string = "37.6";
  DifesaSpecialeRank2: string = "13.3";
  VelocitaRank2: string = "44.4";

  //PIPLUP
  altezza3: string = "Altezza: 0,4 m";
  peso3: string = "Peso: 5,2 kg";
  categoria3: string = "Categoria: Pinguino";
  abilita3: string = "Abilità: Acquaiuto";
  sesso3: string = "sesso: Maschio";
  PuntiSalutebase3: string = "53";
  Attaccobase3: string = "51";
  Difesabase3: string = "53";
  AttaccoSpecialebase3: string = "61";
  DifesaSpecialebase3: string = "56";
  Velocitabase3: string = "40";
  PuntiSaluteRank3: string = "26.8";
  AttaccoRank3: string = "19.1";
  DifesaRank3: string = "27";
  AttaccoSpecialeRank3: string = "44.9";
  DifesaSpecialeRank3: string = "33.1";
  VelocitaRank3: string = "17.2";

  onClickTurtwig(event: MouseEvent){
    this.pagina = "TURTWIG";
    console.log(event);
  }

  onClickChimchar(event: MouseEvent){
    this.pagina = "CHIMCHAR";
    console.log(event);
  }

  onClickPiplup(event: MouseEvent){
    this.pagina = "PIPLUP";
    console.log(event);
  }

  onClickHome(event: MouseEvent){
    this.pagina = "home";
    console.log(event);
  }
  
}
