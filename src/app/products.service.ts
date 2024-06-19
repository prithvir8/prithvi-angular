import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products=[
    {'id':1,
      'image':'https://m.media-amazon.com/images/I/41i+PQxv35L._AC_UY1100_.jpg',
      'name':'Shirt',
      'category':'Mens',
      'price':500
    },
    {'id':2,
      'image':'https://www.nextdirect.com/nxtcms/resource/blob/5821504/ee0fc6a294be647924fa5f5e7e3df8e9/hoodies-data.jpg',
      'name':'T-Shirt',
      'category':'Mens',
      'price':300
    },
    {'id':3,
      'image':'https://thenmozhidesigns.com/cdn/shop/files/KRAN0028.jpg?v=1712808526',
      'name':'Sarees',
      'category':'womens',
      'price':1000
    },
    {'id':4,
      'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9KDMjDTsLovtNFQvuo1PdgB_jNbn6oi54A&s',
      'name':'T-Shirt',
      'category':'womens',
      'price':500
    },
    {'id':5,
      'image':'https://tbhai.com/cdn/shop/products/CaptainAmericaThemeCustomNameT-ShirtforKids.jpg?v=1633367132',
      'name':'Shirt',
      'category':'kids',
      'price':2000
    },
    {'id':6,
      'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRP04n3tpszoddpIqxF_8YpLJX2OS8CD2XA&s',
      'name':'T-Shirt',
      'category':'kids',
      'price':3000
    },
  ]

}
