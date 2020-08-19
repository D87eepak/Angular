import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  public id: string;
  
  public  title:String;
  public  description:String;
  public specification:String[];
  public imageArr:String[];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
    
     let myMap =this.CONST_DATA;
     let index=0;
     for( index;index<myMap.length;index++){
     if(myMap[index].name==id){

      this.title=myMap[index].title;
      this.description=myMap[index].description;
      this.specification=myMap[index].specification;
      this.imageArr=myMap[index].imageArr;
      break;
     }

     }
     });
    }

    CONST_DATA=
    [
      
        {
        "name":"bolts", 
        "title":"Eye Bolts",
        "description":"Machinery eye bolts are fully threaded and may have a collar, making them suitable for use with angular loads up to 45°. Eye bolts without a shoulder should not be used for angular loads.Heavy forged eye bolts with a continuous eye may be forged with an integral shoulder, allowing their use for heavy off-axis loads.Eye bolts are often installed into masonry and so versions that form their own anchor bolt are commonly available. Most of these screw into some form of shield anchor. Some lightweight forms are not screwed, but rely on just the pull on the ring itself to expand the anchor.",
        "specification":["Available in 20 cm length","M10 available in 500 cm length"],
        "imageArr":["https://source.unsplash.com/100x100/?nature,water","https://source.unsplash.com/100x100/?nature,forest","https://source.unsplash.com/100x100/?nature,desert"]
        },
      {
        "name":"fasteners", 
        "title":"Belt Fasteners",
       "description":"A Belt fastener (US English) or fastening (UK English)[1] is a hardware device that mechanically joins or affixes two or more objects together. In general, fasteners are used to create non-permanent joints; that is, joints that can be removed or dismantled without damaging the joining components.[2] Welding is an example of creating permanent joints. Steel fasteners are usually made of stainless steel, carbon steel, or alloy steel.",
       "specification":["Available in 20 cm length","M10 available in 500 cm length"],
       "imageArr":["https://source.unsplash.com/100x100/?nature,water","https://source.unsplash.com/100x100/?nature,forest","https://source.unsplash.com/100x100/?nature,desert"]
       } ,
       {
        "name":"tools", 
        "title":"Machine Tools",
       "description":"A machine tool is a machine for handling or machining metal or other rigid materials, usually by cutting, boring, grinding, shearing, or other forms of deformation.All machine tools have some means of constraining the workpiece and provide a guided movement of the parts of the machine.The precise definition of the term machine tool varies among users, as discussed below. While all machine tools are machines that help people to make things, not all factory machines are machine tools.",
       "specification":["Available in 20 cm length","M10 available in 500 cm length"],
       "imageArr":["https://source.unsplash.com/100x100/?nature,water","https://source.unsplash.com/100x100/?nature,forest","https://source.unsplash.com/100x100/?nature,desert"]
       },
        {
        "name":"items",
        "title":"Hot Forgign Items",
        "description":
        "Hot Forging is a manufacturing process involving the shaping of metal using localized compressive forces. The blows are delivered with a hammer (often a power hammer) or a die. Forging is often classified according to the temperature at which it is performed: cold forging (a type of cold working), warm forging, or hot forging (a type of hot working). For the latter two, the metal is heated, usually in a forge. Forged parts can range in weight from less than a kilogram to hundreds of metric tons.[1][2] Forging has been done by smiths for millennia; the traditional products were kitchenware, hardware, hand tools, edged weapons, cymbals",
        "specification":["Available in 20 cm length","M10 available in 500 cm length"],
        "imageArr":["https://source.unsplash.com/100x100/?nature,water","https://source.unsplash.com/100x100/?nature,forest","https://source.unsplash.com/100x100/?nature,desert"]
        }

    ]
  
}

