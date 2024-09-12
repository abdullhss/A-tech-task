import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import {UpperSectionComponent} from "./components/upper-section/upper-section.component"
import {LowerSectionComponent} from "./components/lower-section/lower-section.component"

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent,UpperSectionComponent , LowerSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ATechTasks';
}
