import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddToWishlistServiceService {


  wishlistURL:String = "http://localhost:8050/wishlist";

  constructor(private http:HttpClient) { }

  
   
  public viewAllItems(){
    return this.http.get(this.wishlistURL+"//viewAllItems");
  }

  public deleteProduct(productId){
    return this.http.delete(this.wishlistURL+"/deleteProduct?userId=user1&productId="+productId);
    //return this.http.post(this.cartURL+"/removeFromCartById",{"userId":"user1","productId":productId},{responseType:'text' as 'json'});
  }
}
