import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'oscar';
  public nameUpper: string = 'Oscar';
  public fullName: string = 'oScAr RoDrIgUeZ';

  public customDate: Date = new Date();

}
