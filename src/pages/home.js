import Header from "../components/header.js"
import Footer from "../components/footer.js"
import MenuItemPreview from "../components/menuitempreview.js"

export default function Home() {

    const appetizers = [
        {
            "name": "Festive Taco Nacho",
            "image": "https://www.cscassets.com/recipes/wide_cknew/wide_25873.jpg",
            "description": "Crisp tortilla chips are layered with ground beef, cheese, tomatoes, olives and onion, then baked until piping hot to make this fun and flavorful appetizer in just 30 minutes!",
        }
    ];

    const maindishes = [
        {
            "name": "Turkey Stuffed Peppers",
            "image": "https://hips.hearstapps.com/del.h-cdn.co/assets/16/08/1600x1066/gallery-1456518548-delish-trader-joes-peppers.jpg?resize=768:*",
            "description": "Crisp tortilla chips are layered with ground beef, cheese, tomatoes, olives and onion, then baked until piping hot to make this fun and flavorful appetizer in just 30 minutes!",
        }
    ];
    
    const desserts = [
        {
            "name": "Bundt Cake",
            "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F10%2Fmain%2F1611p160-pumpkin-bundt-cake-chocolate-glaze.jpg%3Fitok%3DYQIXwkJn&w=1200&c=sc&poi=face&q=85",
            "description": `<p>
            Take the classic flavors of pumpkin pie and transform them into a tall, moist, tender Bundt cake.risp tortilla chips are layered with ground beef, cheese, tomatoes, olives and onion, then baked until piping hot to make this fun and flavorful appetizer in just 30 minutes!
            </p><ul>
                <li>Pumpkin</li>
                <li>Cinnamon</li>
                <li>Ginger</li>
                <li>Nutmeg</li>
            </ul>`
        }
    ];

    return (
        <>
        <Header></Header>

        <div className="container">
            
            <div className="row">
                <div className="colm-sm-12">

                    <h2>Appetizers</h2>
                    {appetizers.map((item) => {
                        return <MenuItemPreview name={item.name} description={item.description} image={item.image}></MenuItemPreview>;
                    })}
                    
                    <h2>Main Dishes</h2>
                    {maindishes.map((item) => {
                        return <MenuItemPreview name={item.name} description={item.description} image={item.image}></MenuItemPreview>;
                    })}
                    <h2>Desserts</h2>
                    {desserts.map((item) => {
                        return <MenuItemPreview name={item.name} description={item.description} image={item.image}></MenuItemPreview>;
                    })}
                </div>

            </div>
        </div>

        <Footer></Footer>
        </>
    )
};