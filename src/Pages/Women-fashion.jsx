import image1 from "./WomenImages/image1.jpg"
import image2 from "./WomenImages/image2.jpg"
import image3 from "./WomenImages/image3.jpg"
import image4 from "./WomenImages/image4.jpg"
import image5 from "./WomenImages/image5.jpg"
import image6 from "./WomenImages/image6.jpg"
import image7 from "./WomenImages/image7.jpg"
import image8 from "./WomenImages/image8.jpg"
import image9 from "./WomenImages/image9.jpg"
import image10 from "./WomenImages/image10.jpg"
import image11 from "./WomenImages/image11.jpg"
import image12 from "./WomenImages/image12.jpg"
import "./Products.css"


function WomenFashion(){

  let Data=[
    {
      id : 1,
      title : "Awesome Green Sequins Georgette Party Wear Lehenga Choli With Dupatta",
      image :image1,
    },
    {
      id : 2,
      title : "Fantastic Lavender Organza Reception Wear Lehenga Choli",
      image :image2,
    },
    {
      id : 3,
      title : "Engaging Orange Floral Printed Organza Event Wear Lehenga Choli-Xs",
      image :image3,
    },
    {
      id : 4,
      title : "Divine Navy Blue Zari Embroidered Georgette Festive Wear Salwar Suit",
      image :image4,
    },
    {
      id : 5,
      title : "Delightful Brown Sequins Georgette Ready-To-Wear Indo-Western Sharara",
      image :image5,
    },
    {
      id : 6,
      title : "Stunning Light Pink Sequins Butterfly Net Salwar Kameez With Dupatta",
      image :image6,
    },
    {
      id : 7,
      title : "Wonderful Black Thread Embroidered Georgette Salwar Suit",
      image :image7,
    },
    {
      id : 8,
      title : "Alluring White And Cream Sequins Embroidered Net Salwar Suit",
      image :image8,
    },
    {
      id : 9,
      title : "Attractive Navy Blue Sequins Georgette Readymade Gown With Dupatta",
      image :image9,
    },
    {
      id : 10,
      title : "Adorable Black Sequined Georgette Party Wear Saree",
      image :image10,
    },
    {
      id : 11,
      title : "Satisfying Peach Sequins Work Net Party Wear Saree With Blouse",
      image :image11,
    },
    {
      id : 12,
      title : "Fascinating White Sequins Net Party Wear Saree With Blouse",
      image :image12,
    },
    
  ]


  return(
    <div className="box">
      {/* <h1>WomenFashion</h1> */}
      {Data.map((e)=>(
        <div >
        
        <img src={e.image} className="productImg" />
        <p>{e.title}</p>
        </div>
      
       ))}

    </div>
  )
}
export default WomenFashion;