import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Flame, Leaf } from "lucide-react";

import biryani from "../images/biryani.jpg";
import chicken65 from "../images/chicken65.jpg";
import fish from "../images/fish.jpg";
import mutton from "../images/mutton.jpg";
import prawn from "../images/prawn.jpg";
import dosa from "../images/dosa.jpg";
import idli from "../images/idli.jpg";
import vada from "../images/vada.jpg";
import uttapam from "../images/uttapam.jpg";
import poori from "../images/poori.jpg";
import gulab from "../images/gulab.jpg";
import tea from "../images/tea.jpg";
import coffee from "../images/coffee.jpg";
import payasam from "../images/payasam.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

export function Menu() {

  const navigate = useNavigate();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");

  const addItem = (item: MenuItem) => {

    const price = parseInt(item.price.replace("RM","").trim());
    const exist = cart.find(c => c.name === item.name);

    if(exist){
      setCart(cart.map(c =>
        c.name === item.name ? {...c, qty:c.qty+1} : c
      ));
    }else{
      setCart([...cart,{name:item.name,price,qty:1}]);
    }
  };

  const removeItem = (item:MenuItem) => {

    const exist = cart.find(c => c.name === item.name);
    if(!exist) return;

    if(exist.qty === 1){
      setCart(cart.filter(c => c.name !== item.name));
    }else{
      setCart(cart.map(c =>
        c.name === item.name ? {...c, qty:c.qty-1} : c
      ));
    }
  };

  const totalBill = cart.reduce((sum,item)=>sum + item.price * item.qty,0);

  /* MENU ITEMS */

  const breakfast:MenuItem[] = [
    {name:"Idli (3 pcs)",description:"Steamed rice cakes",price:"RM 8",vegetarian:true,image:idli},
    {name:"Masala Dosa",description:"Crispy dosa with potato",price:"RM 12",vegetarian:true,image:dosa},
    {name:"Vada (2 pcs)",description:"Crispy lentil donuts",price:"RM 7",vegetarian:true,image:vada},
    {name:"Uttapam",description:"Rice pancake with veggies",price:"RM 11",vegetarian:true,spicy:true,image:uttapam},
    {name:"Poori Masala",description:"Fried bread with curry",price:"RM 13",vegetarian:true,image:poori},
  ];

  const mainCourse:MenuItem[] = [
    {name:"Chettinad Chicken",description:"Spicy chicken curry",price:"RM 18",spicy:true,image:chicken65},
    {name:"Hyderabadi Biryani",description:"Basmati rice biryani",price:"RM 22",spicy:true,image:biryani},
    {name:"Fish Curry",description:"Fresh fish gravy",price:"RM 20",spicy:true,image:fish},
    {name:"Mutton Curry",description:"Tender mutton curry",price:"RM 24",spicy:true,image:mutton},
    {name:"Prawn Masala",description:"Spicy prawn curry",price:"RM 26",spicy:true,image:prawn},
    {name:"Chicken 65",description:"Fried spicy chicken",price:"RM 16",spicy:true,image:chicken65},
  ];

  const desserts:MenuItem[] = [
    {name:"Gulab Jamun",description:"Sweet milk dumplings",price:"RM 8",vegetarian:true,image:gulab},
    {name:"Payasam",description:"Rice milk dessert",price:"RM 7",vegetarian:true,image:payasam},
  ];

  const beverages:MenuItem[] = [
    {name:"Masala Chai",description:"Spiced tea",price:"RM 5",image:tea},
    {name:"Filter Coffee",description:"South Indian coffee",price:"RM 6",image:coffee},
  ];

  const menuTabs = [
    {value:"breakfast",items:breakfast},
    {value:"main",items:mainCourse},
    {value:"desserts",items:desserts},
    {value:"beverages",items:beverages},
  ];

  const MenuItemCard = ({item}:{item:MenuItem}) => {

    const exist = cart.find(c=>c.name===item.name);
    const qty = exist ? exist.qty : 0;

    return(

      <Card className="menu-card">

        {item.image && (
          <img src={item.image} className="w-full h-48 object-cover rounded-t-xl"/>
        )}

        <CardContent className="p-5">

          <div className="flex justify-between mb-2">

            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="text-orange-600 font-bold">{item.price}</span>

          </div>

          <p className="text-gray-500 text-sm">{item.description}</p>

          <div className="flex gap-2 mt-2">

            {item.vegetarian &&
              <Badge className="text-green-600 border-green-600">
                <Leaf className="w-3 h-3 mr-1"/>Veg
              </Badge>
            }

            {item.spicy &&
              <Badge className="text-red-600 border-red-600">
                <Flame className="w-3 h-3 mr-1"/>Spicy
              </Badge>
            }

          </div>

          <div className="flex justify-end gap-3 mt-4">

            <button
            onClick={()=>removeItem(item)}
            className="bg-red-500 text-white px-3 py-1 rounded-full">
            -
            </button>

            <span className="font-semibold">{qty}</span>

            <button
            onClick={()=>addItem(item)}
            className="bg-green-600 text-white px-3 py-1 rounded-full">
            +
            </button>

          </div>

        </CardContent>

      </Card>

    );

  };

  return(

    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-24 text-center">

        <h1 className="text-6xl font-extrabold mb-4">
          🍽 Our Menu
        </h1>

        <p>Fresh • Spicy • Authentic South Indian Food</p>

      </section>

      <section className="container mx-auto py-16 px-4">

        <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border p-3 rounded-xl w-full max-w-md mx-auto block mb-10"
        />

        <Tabs defaultValue="breakfast">

          <TabsList className="flex justify-center gap-4 mb-10 flex-wrap">

            {menuTabs.map(tab=>(
              <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white">
              {tab.value}
              </TabsTrigger>
            ))}

          </TabsList>

          {menuTabs.map(tab=>(

            <TabsContent key={tab.value} value={tab.value}>

              <div className="grid md:grid-cols-3 gap-6">

                {tab.items
                .filter(item =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item,i)=>(
                  <MenuItemCard key={i} item={item}/>
                ))}

              </div>

            </TabsContent>

          ))}

        </Tabs>

      </section>

      {cart.length>0 &&(

        <div className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-xl flex gap-4 items-center">

          <span>🛒 {cart.length} Items</span>

          <span className="font-bold">RM {totalBill}</span>

          <button
          onClick={()=>navigate("/success")}
          className="bg-white text-orange-600 px-4 py-1 rounded-full font-bold">
          Checkout
          </button>

        </div>

      )}

    </div>

  );
}