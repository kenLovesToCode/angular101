import { Component, OnInit } from '@angular/core';
import { Cuisine, MenuActiveItem } from 'src/app/models/cuisine';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css'],
})
export class CuisineComponent implements OnInit {
  cuisines: Cuisine[] = [];
  selectedCuisine!: Cuisine;
  menuActiveList: MenuActiveItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadCuisines();
  }

  loadCuisines() {
    const item1: Cuisine = {
      id: nanoid(),
      name: 'Thai',
      description: 'Thai cuisine description',
      isActive: true,
    };
    const item2: Cuisine = {
      id: nanoid(),
      name: 'Indian',
      description: 'Indian cuisine description',
      isActive: true,
    };
    const item3: Cuisine = {
      id: nanoid(),
      name: 'Italian',
      description: 'Italian cuisine description',
      isActive: true,
    };
    const item4: Cuisine = {
      id: nanoid(),
      name: 'Chinese',
      description: 'Chinese cuisine description',
      isActive: true,
    };
    this.cuisines.push(item1, item2, item3, item4);
    this.cuisines.forEach((element) => {
      const menuItemToAdd: MenuActiveItem = {
        id: `menu-${element.id}`,
        isActive: false,
      };
      this.menuActiveList.push(menuItemToAdd);
    });
    this.menuActiveList[1].isActive = true;
    this.setActiveMenu(this.cuisines[1]);
  }

  setActiveMenu(cuisine: Cuisine): void {
    const menuId = `menu-${cuisine.id}`;
    this.menuActiveList.forEach((e) => {
      e.isActive = e.id === menuId ? true : false;
      if (e.id === menuId) {
        this.selectedCuisine = cuisine;
      }
    });
  }

  getMenuClass(cuisine: Cuisine): boolean {
    const menuId = `menu=${cuisine.id}`;
    const cssClass = this.menuActiveList.find((f) => f.id === menuId)?.isActive;
    return cssClass || false;
  }
}
