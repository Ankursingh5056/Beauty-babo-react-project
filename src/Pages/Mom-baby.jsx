import image1 from "./babyImages/image1.png"
import image2 from "./babyImages/image2.jpg"
import image3 from "./babyImages/image3.jpg"
import image4 from "./babyImages/image4.jpg"
import image5 from "./babyImages/image5.jpg"
import image6 from "./babyImages/image6.png"
import image7 from "./babyImages/image7.jpg"
import image8 from "./babyImages/image8.jpg"
import image9 from "./babyImages/image9.jpg"
import image10 from "./babyImages/image10.png"
import image11 from "./babyImages/image11.jpg"
import image12 from "./babyImages/image12.jpg"



function MomBaby(){

 



  let Data=[
    {
      id : 1,
      title : "Himalaya Baby Lotion 100ml Pack Of 3",
      image : image1,
    },
    {
      id : 2,
      title : "Chicco Baby Moments Rich Cream",
      image : image2,
    },
    {
      id : 3,
      title : "Chicco Baby Moments Mild Bodywash Protect",
      image : image3,
    },
    {
      id : 4,
      title : "Mamaearth Foaming Face Wash For Kids With Aloe Vera & Coconut For",
      image :image4,
    },
    {
      id : 5,
      title : "Mamaearth Milky Soft Body Wash For Babies With Oats, Milk And Calendula",
      image : image5,
    },
    {
      id : 6,
      title : "Mamaearth Milky Soft Body Wash For Babies With Oats, Milk And Calendula",
      image : image6,
    },
    {
      id : 7,
      title : "Mamaearth Milky Soft Body Wash For Babies With Oats, Milk And Calendula",
      image :image7,
    },
    {
      id : 8,
      title : "Chicco Baby Moments Essential Gift Set For Babies -Blue",
      image : image8,
    },
    {
      id : 9,
      title : "Chicco Baby Moments Essential Gift Set For Babies - Pink",
      image :image9
    },
    {
      id : 10,
      title : "Mamaearth India's First Organic Bamboo Based Baby Wipes - 72 Wipes -",
      image : image10,
    },
    {
      id : 11,
      title : "Chicco Apple-Banana Toothpaste",
      image :image11,
    },
    {
      id : 12,
      title : "Biotique Disney Princess Rapunzel Apple Blossom Shampoo",
      image : image12,
    }
    
  ]


  return(
    <div  className="box">
      {/* <h1>Mom & Baby</h1> */}
      {Data.map((e)=>(
        <div>
        <img src={e.image} className="productImg" />
        <p>{e.title}</p>
        </div>
       ))}
    </div>
  )
}
export default MomBaby