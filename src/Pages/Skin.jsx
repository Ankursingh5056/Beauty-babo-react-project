import Lotus from "./SkinImages/Lotus.jpg"
import Olay from "./SkinImages/olay.png"
import Garniyar from "./SkinImages/garnier.png"
import LotusFace from "./SkinImages/LotusFace.png"
import lotusFaces from "./SkinImages/lotusFaces.png"
import chicco from "./SkinImages/lotusFaces.png"
import HandSom from "./SkinImages/handsom.png"
import Hand from "./SkinImages/hand.png"
import Himalaya from "./SkinImages/himalaya_baby.png"
import Ponds from "./SkinImages/Ponds.png"
import PondBright from "./SkinImages/PondsBright.png"
import Veda from "./SkinImages/veda.jpg"
// import Veda from "./SkinImages/veda.jpg"
import biotic from "./SkinImages/biotic.jpg"


function Skin(){

  let Data=[
    {
      id : 1,
      title : "Lotus Professional Retemin Plant Retinol & Natural Vitamin C Brightening ",
      image : Lotus,
    },
    {
      id : 2,
      title : "Olay Natural White Light Instant Glowing Fairness Cream, 40g Pack Of 2",
      image : Olay,
    },
    {
      id : 3,
      title : "Garnier Skin Naturals - Moisturising Serum-In-Lotion, 250 Ml",
      image : Garniyar,
    },
    {
      id : 4,
      title : "Lotus Herbals Whiteglow Vitamin C Radiance Gel Cream Spf 20 Pa+++",
      image : LotusFace,
    },
    {
      id : 5,
      title :"Lotus Herbals Safe Sun UV Screen Matte Gel PA+++ SPF - 50 (50g)",
      image :chicco,
    },

    {
      id : 6,
      title : "Chicco Baby Moment Mild Body Wash No Tears Refresh – 100ml Pack Of 2",
      image : HandSom,
    },
    {
      id : 7,
      title :"Glow & Handsome Cream Instat Fairness Rapid Action - 50g" ,
      image :Hand,
    },
    {
      id : 8,
      title : "Himalaya Baby Lotion 100ml Pack Of 3",
      image : Himalaya,
    },
    {
      id : 9,
      title : "Pond's Bright Beauty Face Scrub - 50g Pack Of 3" ,
      image :Ponds,
    },
    {
      id : 10,
      title : "Pond's Bright Beauty Spotless Glow Facewash With Vitamin B3 50g Pack Of" ,
      image :PondBright,
    },
    {
      id : 11,
      title : "" ,
      image :lotusFaces,
    },
    {
      id : 12,
      title : "Biotique Quince Seed Anti-Ageing Face Massage Cream",
      image : biotic,
    },

  ]


  return(
    <div  className="box">
       {Data.map((e)=>(
        <div>
        <img src={e.image} className="productImg" />
        <p>{e.title}</p>
        </div>
       ))}
    </div>
  )
}
export default Skin;