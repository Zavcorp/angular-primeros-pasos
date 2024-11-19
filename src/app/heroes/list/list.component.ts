import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public HeroNames: string[] = [ 'Spiderman', 'Hulk', 'Thor','Ironman'];
  public deletedHeroe?: string;


  removeLastHero():void{
    this.deletedHeroe = this.HeroNames.pop();

  }
}
