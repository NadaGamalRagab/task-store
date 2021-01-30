import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductServices {
    baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

    /* [
      {
          id: 1,
          data: [{ name: "iPhone 12 Pro Max", description: 'ya raaaab' }],
          price: 5020,
          discount: 400,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png'],
          category: { id: 2, name: "Automotive" }
 
      },
      {
          id: 2,
          data: [{ name: "iPhone 12 Pro", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 3,
          data: [{ name: "iPhone 12", description: 'ya raaaab' }],
          price: 5500,
          category: { id: 2, name: "Automotive" },
          discount: 100,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 4,
          data: [{ name: "iPhone 12 mini", description: 'ya raaaab' }],
          price: 7800,
          category: { id: 2, name: "Automotive" },
          discount: 900,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 5,
          data: [{ name: "iPhone 11 Pro", description: 'ya raaaab' }],
          price: 5020,
          category: { id: 2, name: "Automotive" },
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 6,
          data: [{ name: "iPhone XS Max", description: 'ya raaaab' }],
          price: 5020,
          category: { id: 2, name: "Automotive" },
          discount: 400,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      }
      ,
      {
          id: 7,
          data: [{ name: "iPhone SE (2nd generation)", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 8,
          data: [{ name: "oppo 1", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 9,
          data: [{ name: "oppo 2", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 10,
          data: [{ name: "oppo 3", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 11,
          data: [{ name: "oppo 4", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 12,
          data: [{ name: "oppo 5", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 13,
          data: [{ name: "oppo 6", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 14,
          data: [{ name: "oppo 7", description: 'ya raaaab' }],
          price: 8252,
          category: { id: 2, name: "Automotive" },
          discount: 800,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 15,
          data: [{ name: "oppo 7", description: 'ya raaaab' }],
          price: 5500,
          category: { id: 2, name: "Automotive" },
          discount: 100,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 16,
          data: [{ name: "oppo 8", description: 'ya raaaab' }],
          price: 5500,
          category: { id: 2, name: "Automotive" },
          discount: 100,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 17,
          data: [{ name: "oppo 9", description: 'ya raaaab' }],
          price: 5500,
          category: { id: 2, name: "Automotive" },
          discount: 100,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
      {
          id: 18,
          data: [{ name: "oppo 10", description: 'ya raaaab' }],
          price: 5500,
          category: { id: 2, name: "Automotive" },
          discount: 100,
          imagesUrls: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80.png']
      },
 
   ]
 */

    AddToCart = new EventEmitter<Product>();
    currentPage: string = 'listing';

    constructor(private httpClient: HttpClient) { }
    private products: Product[] = [];

    getAllProducts() {
        return this.httpClient.get(`${this.baseUrl}product`)
        // return this.products.slice();
    }

    getProductById(id: number) {
        // return this.products.find(p => p.id === id);
        return this.httpClient.get(`${this.baseUrl}product/${id}`);
    }

    addProduct(product: Product) {
        // const id = this.products.length;
        // const { data, price, discount, category, imagesUrls, paymentTypes, tages } = product;
        // const newProduct: Product = {
        //     id, data, price, discount, category, imagesUrls, paymentTypes, tages
        //     // id, data: product.data, price: product.price, discount: product.discount, category: product.category, imagesUrls: product.imagesUrls,
        //     // paymentTypes: product.paymentTypes, tages: product.tages
        // }
        // this.products.push(newProduct);

        let body = {
            discount: product.discount,
            price: product.price,
            imageUrls: product.imagesUrls,
            data: product.data,
            categoryId: product.category.id
        }
        console.log(this.products);
        // const token = localStorage.getItem('token');

        // const headers = new HttpHeaders({
        //     authorization: token
        // }
        // )
        return this.httpClient.post(`${this.baseUrl}product/add`, body);
    }

    updateProduct(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id);
        const { _id, id, data, price, discount, category, imagesUrls, paymentTypes, tages } = product;
        const newProduct: Product = {
            _id,id, data, price, discount, category, imagesUrls, paymentTypes, tages
        }
        this.products[index] = newProduct;
    }

    deleteProduct(id: number) {
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
    }
    searchByName(productName: string) {
        return this.products.filter(p => p.data[0].name.toLowerCase().includes(productName.toLowerCase()));

        //filter takes callback function

        //this.products.filter(predicate:        
        // (value: Product, index: number, array: Product[]) =>
        //     value is Product, thisArg ?: any): Product[])
    }
}