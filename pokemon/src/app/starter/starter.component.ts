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
  
  altezza1: string = "Altezza: 0,4 m";
  peso1: string = "Peso: 10,2 kg";
  categoria1: string = "Categoria: Fogliolina";
  abilita1: string = "Abilità: Erbaiuto";
  sesso1: string = "sesso: Maschio";
  stat: string = "Stat";
  base: string = "Base";
  rank: string = "Rank";
  PuntiSalute: string = "Punti Salute";
  Attacco: string = "Attacco";
  Difesa: string = "Difesa";
  AttaccoSpeciale: string = "Attacco Speciale";
  DifesaSpeciale: string = "Difesa Speciale";
  Velocita: string = "Velocità";
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
