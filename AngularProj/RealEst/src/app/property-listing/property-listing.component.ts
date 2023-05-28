import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  valuer : number = 0;
  value(){
    this.valuer++;
    return this.valuer;
  }

  public propertyList : any = [];
  public buyerList : any = [];
  public wishData:any=[];
  constructor(private buyerService :CustomerService,private propertyService : PropertyService,private router: Router,private aroute:ActivatedRoute) { }
  public authUser : any ;
  ngOnInit(): void {

    this.authUser = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
 

    console.log("-----------------------"+this.authUser+"-----------------------");
    console.log("-----------------------"+this.authUser.id+"-----------------------");
    
    this.propertyService.getPropertyList().subscribe(propertyData=> {
      this.propertyList = propertyData;});

      this.buyerService.getBuyerById(this.authUser.id).subscribe(propertyData=> {
        this.buyerList = propertyData;});
  }
  redirect(id:number){
    console.log(this.router.navigate(['/property',id]));
    this.router.navigate(['/list',id]);
  }

 
  public mode2 ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAFD0lEQVRYhe2Xa2wUVRTHf2dm9tEWtoXyEDAiaW2hWIk8CgJBCLZImjaxWEnUKPGDxhiMCfFBInEhYNCIHyDRaEg0kfCwD011C/IsKjWCIhRpQ0tbFcujYKHAdsvuzlw/tEV5zHbbbr/t79Pk3nPm/OfOPeeeC3HixIkTJ06Mkf44zZ+/zG0M9U/XFONQlhtLWk2H4+i+im0X7Hzy8p4YZRrGVF2s0YjWqUzz71DA82tV1eedgyp64eLiLE1Tq4ACIOm2aQUcUUptmJuTXer1ei2v16tV/3KySMEKlMoBtNt8rouoCksZa/f6dtTFVLTX69Wqj5xYo5C3AB0gBYuRYqIrxRV0zncN97x1vybW65alvQ8s7Bm+B5NhmIRFaFUa7f/5mKDWzZmRvdrr9VoDFu31erUfD5/YKiJLBZibpPN8fi5jZs3GuO9+VEcHl15dRmv7NQ6oBHaRROh/r3WgeBw/CwgwQsyb4wpoVA6+JYmjuHuGt+3xlT7TPW2LHmkSwJE0Yq2IvOxAserhdJ5e/x4pOY+gp45EDAcoRUflVyQE/EyWINO5wTFcBNAYickq2pgpnSTKrToEGC4Ws6STVDE5jguFZKdlZGlNDbUHImmKuNKP5S+dJJg1AsY7UyYwe/W7YBiEW/6i4+sdBE/WYF48j+q8NZeuoPETCcxRATzS698G4HsS2KySAUK6Kdm7dpWcsrM1In6RhFeixJjjhlkr3gTDoLP6IO0b1qCCQVu/FCwW4+9Tms8jwBHcHMflMHW1ElhmZ3t7Nt+kuLjYiZICgOfyHkUbnop5/myvggdCvvh7HgunTXvRYWdnK/qyn0wgxSMWY2bkANDhKx80wQAZBHF35eCwEWP/ybCzsxWNWGMBUpWJPmoMAKGmhtiqvIuY1O4KYyHj7Ozs97TIDRSEEUK1NaAswoMsGiB8s8jIDTsbW9GWqZ/RNZNLaLRtXN97bYwBIYS27kia0GJnZ7s95s2c1Ay0BNA4qVyxV3gXjuPqOZjOelw029nZiu4+TrcDVJCE6l9vFTUW8I3qbmeU2l5SUmLa2donIoBufAi01+Ok4o7+KLaUM4RmHABXNFN9EFFWpMmmU79fS8+YfBEorMNJGMiSUEzXXAFlDKFCDQFAUK/s3ln+QySfXvOrsaH2t7TMrACQW4+TZhxMkSDOyD1NVATQ+EglU0Vi9wfI23t8pRt784uqKDTV1x5Kz5h8Dsi7gGEcxs1ECZJCdH3F3fhTGaxnOKdxAgSVyGt7fSUbovHt059eVFA01bK0UmCCASyVayzC35vbHRxSCXyGh2BX+BaBp3b7Squj9e9T+W2srzs34cHMLWJp2RY8cAIXraLzEMGoXhQGtuLhS4ZiIqA4GELy9lWWRn1rgX7eEQHJzX/yDWAdoI+XMMu5zChsqxRt6GxSKTR2VQiFsCl0/dKKqqqqcJ+D91M0AIvyixZYaNuA0W4sXpKrTOPOe2qNcvExyfi7KuxVpdQLeyvLyvobd0Cnc2ND3R+Z6RO3W5o2O4zcexg3IYRJ0rVbFeAjic14CHYJPmZa+sJ9O0sODSTugFuK06frrmamjd9iaU4PMLMeJ6dwkiYhPlXJ7CcREBD1hVsLFn3nK28daMyYns25+UueBfkESOxZaaATxfI9laWbYxUn5g1FXsGSicqSMiALpc4IFO+uLPs5ljEGpQsqLCwc2hF25LnEtd/n23p5MGLEiRMnTpw4MeVfDpvLz+VNuy8AAAAASUVORK5CYII=";
  mode = this.mode2;
  title = 'REM';
  public var!: String[];

  
  list={};
  addWish(pid: number) {
    this.propertyService.addWishList(pid,this.buyerList.buyerId).subscribe(propertyData=> {
      this.wishData = propertyData;});
      window.confirm("Added to wish List")
  }
}
