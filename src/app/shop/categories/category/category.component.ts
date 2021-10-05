import { Component, OnInit } from '@angular/core';
import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: any;
  categoryData:any;
  categorySlug: any;
  loading:boolean = true;
  currentRoute: string;

  constructor(
    private _dataService: DataService,
    private router: Router,
    private _aRoute: ActivatedRoute
  ){

    this.currentRoute = "";
    this.categorySlug = this._aRoute.snapshot.paramMap.get('category_slug')
    this.getProducts()

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.loading = true
          this.products = []
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.categorySlug = event.url.replace('/category/', '');
            if( event.url.includes('/category/') ){
              this.getProducts()
            }
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });

  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  getProducts( slug = null ){

    this._dataService.getProductsByCat(this.categorySlug).subscribe(data=>{
      this.products = data
      this.loading = false
    })

  }

}
