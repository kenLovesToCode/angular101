import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  title: string = 'Angular Bindings';
  subtitle: string = 'Subtitle from TypeScript';
  fruits: string[] = [];
  newFruit: string = '';
  searchFruit: string = '';

  constructor() {}

  ngOnInit(): void {
    this.populateFruits();
  }

  populateFruits() {
    this.fruits = [];
    this.fruits.push('Orange');
    this.fruits.push('Banana');
    this.fruits.push('Grapes');
    this.fruits.push('Cherry');
  }

  dataChanged(data: string) {
    this.populateFruits();
    this.fruits = this.fruits.filter(
      (fruit) =>
        fruit.toLocaleLowerCase().startsWith(data) ||
        fruit.toLocaleLowerCase().indexOf(data) > 0
    );
  }

  addFruit() {
    this.fruits.push(this.newFruit);
    this.newFruit = '';
  }
}
