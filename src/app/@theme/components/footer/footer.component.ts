import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ and nebular
    </span>
    <div class="socials">
      <a href="https://github.com/judcastanoro" target="_blank" class="ion ion-social-github"></a>
      <a href="www.linkedin.com/in/juan-david-castano-rodriguez-31ba51251" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
