import { Component, OnInit } from '@angular/core';
import { AddToWishlistServiceService } from '../_services/add-to-wishlist-service.service';
import { Wishlist } from '../models/wishlist.model';
// import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList:Wishlist;

  products:any;
  constructor(private service:AddToWishlistServiceService ) { }

  ngOnInit(): void {
    let list = this.service.viewAllItems();
    list.subscribe((data) => this.products=data);
  }


  

  
   discount = 0


  itemCount() {
    
    return this.products.length;
  }



  removeItem(index) {
    var message;
    this.wishList = new Wishlist();
    this.wishList.userId = "user1";
    this.wishList.productId = this.products[index].productId;
    
    
    let remove = this.service.deleteProduct(this.wishList);
    remove.subscribe((data) => message=data);
    this.products.splice(index, 1);
  
    
  }






  

}
