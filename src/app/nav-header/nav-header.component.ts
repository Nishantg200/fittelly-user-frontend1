import { Component } from '@angular/core';
import { FeathericonsModule } from '../feather-icon/feather-icon.module';
// import { FeathericonsModule } from '../../feather-icon/feathericons.module';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [FeathericonsModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {

}
