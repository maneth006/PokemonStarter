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
