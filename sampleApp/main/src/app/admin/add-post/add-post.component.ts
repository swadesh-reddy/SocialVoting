import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../friends.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { User } from '../../user';
import { Product } from '../../product';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
    form: FormGroup;
    product: Product;
    user: User;
    image: File = null;
    public files: any[];

    constructor(private friend: FriendsService) { }

  ngOnInit() {
  }
  
  onFileChange(event) {
      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
          this.image = <File>event.target.files[0];
          console.log(this.image.name);
      }
  }
  onProductSubmit(data) {
      var vote = '0';
      var form = new FormData();
      form.append("productname", data.productname);
      form.append("productdescription", data.productdescription);
      form.append('vote', vote);    
      form.append("productuses", data.productuses);
      form.append("productimage", this.image, this.image.name);
      console.log(form);
      this.friend.onAddProduct(form).subscribe(response => {
        console.log(data);
      });
  }
}
