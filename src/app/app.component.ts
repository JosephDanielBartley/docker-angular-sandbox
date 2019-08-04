import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docker-angular-sandbox';

  constructor(private appService: AppService) {
    this.appService.getValues().subscribe(x => console.log(x));
    this.appService.getDbTest().subscribe(x => console.log(x));
  }
}
