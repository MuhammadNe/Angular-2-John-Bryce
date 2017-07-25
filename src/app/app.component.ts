import {
  Component
} from '@angular/core';
import {
  Person,
  GednderDef
} from './model/Person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Gender Equality';
  totalPeople = 0;
  showOptions = false;
  people: Array < Person > = new Array < Person > ();
  optionsTitle: String = 'Show Options';
  filterNumber = 0;
  filterType: Array < Number > = new Array < Number > (0, 1);

  constructor() {
    const p1 = new Person();
    p1.FirstName = 'John';
    p1.LastName = 'Snow';
    p1.Age = 23;
    p1.Gender = GednderDef.male;
    p1.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png';

    const p2 = new Person();
    p2.FirstName = 'Cersei';
    p2.LastName = 'Lannister';
    p2.Age = 43;
    p2.Gender = GednderDef.female;
    p2.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png';

    const p3 = new Person();
    p3.FirstName = 'Aria';
    p3.LastName = 'Stark';
    p3.Age = 16;
    p3.Gender = GednderDef.female;
    p3.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png';

    const p4 = new Person();
    p4.FirstName = 'Sansa';
    p4.LastName = 'Stark';
    p4.Age = 18;
    p4.Gender = GednderDef.female;
    p4.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png';

    const p5 = new Person();
    p5.FirstName = 'Tyrion';
    p5.LastName = 'Lannister';
    p5.Age = 32;
    p5.Gender = GednderDef.male;
    p5.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png';

    const p6 = new Person();
    p6.FirstName = 'Kaleesi';
    p6.LastName = 'Targaryan';
    p6.Age = 28;
    p6.Gender = GednderDef.female;
    p6.ImageUrl = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png';

    this.people.push(p1);
    this.people.push(p2);
    this.people.push(p3);
    this.people.push(p4);
    this.people.push(p5);
    this.people.push(p6);

    this.totalPeople = this.people.length;
    this.filterNumber = this.totalPeople;
  }

  deletePerson(person: Person) {
    this.people.splice(this.people.indexOf(person), 1);
    this.totalPeople = this.people.length;
  }

  toggleOptions() {
    if (this.showOptions) {
      this.optionsTitle = 'Show Options';
    } else {
      this.optionsTitle = 'Hide Options';
    }
    this.showOptions = !this.showOptions;
  }

  filterByNumber(filterNumber: number) {

    this.filterNumber = filterNumber;
    if (filterNumber > this.people.length) {
      this.filterNumber = this.people.length;
    }
  }

  filterByType(filterType: number) {
    switch (filterType) {
      case 0:
        this.filterType.splice(0, this.filterType.length);
        this.filterType.push(0);
        break;
      case 1:
        this.filterType.splice(0, this.filterType.length);
        this.filterType.push(1);
        break;
      default:
        this.filterType.splice(0, this.filterType.length);
        this.filterType.push(0);
        this.filterType.push(1);
        break;
    }
  }
}
