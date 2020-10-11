import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-material-design-tp';
  
  
  allerSimple = false;  
  coef= 2;
  coutAlgerMontreal : number;
  coutAlgerTataouine : number;
  coutAlgerTokyo : number;
  coutCourrier = 0;
  departureCities = ['Alger'];
  destinationCities = ['Montreal','Tataouine', 'Tokyo'];
  devis= 0;      
  minDate = new Date();
  //maxDate = new Date(2029, 9, 20); 20 octobre 2029  
  testing:string;
  devisForm: FormGroup;
  marche = 100;
  
  ngOnInit(){                
    this.coutAlgerMontreal = 90000;   
    this.coutAlgerTataouine = 13000;
    this.coutAlgerTokyo = 150000;        
    this.testing= "";    

    this.devisForm= new FormGroup ({
      'depart': new FormControl('null', Validators.required),
      'destinations': new FormControl ('null', Validators.required),
      'aller': new FormControl ('null', Validators.required),
      'retour': new FormControl ('null'),
      'personnes': new FormControl (1)
      
    });
  }
   

  //determiner le cout d'un aller simple selon destination
  coutCourrierCalc(){    
    if (this.devisForm.get("destinations").value == "Montreal") {
      this.coutCourrier=this.coutAlgerMontreal;
    }   
    else if(this.devisForm.get("destinations").value == "Tataouine"){
      this.coutCourrier=this.coutAlgerTataouine;
    }
    else if(this.devisForm.get("destinations").value == "Tokyo"){
      this.coutCourrier=this.coutAlgerTokyo;
    }

  }


  // Aller simple/aller-retour
  toggleAllerSimple() {
      this.allerSimple = !this.allerSimple;   
      if (this.allerSimple == false) {
        this.coef = 2;
      }   
      else {
        this.coef=1;
      }
  }
    
  //count number of persons
  increment() {    
    this.devisForm.get("personnes").setValue(this.devisForm.get("personnes").value + 1 )
  }
  
  decrement() {   
    this.devisForm.get("personnes").setValue(this.devisForm.get("personnes").value - 1 )
  }

  //Calcul du devis
  calculDevis() {
    this.devis= this.devisForm.get("personnes").value*this.coef*this.coutCourrier;

    this.testing = this.devisForm.get("destinations").value;
  }

  

  

}
