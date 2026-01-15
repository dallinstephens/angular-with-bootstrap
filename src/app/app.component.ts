import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // styleUrl: ['./app.component.css]'
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }  
  // `]
})
export class AppComponent {
  title = 'my first app';
  name = 'Dallin Stephens';
  username = '';
  showSecret = false;
  log = [];

  onReset() {
    this.username = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
