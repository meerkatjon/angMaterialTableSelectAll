import { Component } from '@angular/core';
import { SelectTableComponent } from './select-table/select-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SelectTableComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angMaterialTableSelectAll';


}
