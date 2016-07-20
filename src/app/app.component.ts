/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { SEMANTIC_COMPONENTS } from "ng-semantic";

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  directives: [SEMANTIC_COMPONENTS],
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `<main class="ui container">
        <sm-menu title="Angular2" class="ui menu inverted teal" logo="/assets/img/angularclass-avatar.png">
          <a sm-item [routerLink]=" ['./home']"  icon="home" class="item">Home</a>
          <a sm-item [routerLink]=" ['./detail']"  icon="list" class="item">Detail</a>
          <a sm-item [routerLink]=" ['./about']"  icon="building" class="item">About</a>
      </sm-menu>
      <router-outlet></router-outlet>
   
       <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
       
      <footer class="ui menu text bound bottom sticky fluid fixed">
        <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
        <div>
          <a [href]="url">
            <img [src]="angularclassLogo" width="25%">
          </a>
        </div>
      </footer>
 </main>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
