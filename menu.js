// Sample menu database (fictional restaurants). spice: 0 none, 1 mild, 2 medium, 3 hot. price in INR per dish.
window.MENU = [
 // Spice Route (North Indian)
 {id:"D01",name:"Paneer Butter Masala",restaurant:"Spice Route",cuisine:"North Indian",diet:"veg",price:280,spice:1,allergens:["dairy","nuts"],tags:["paneer","curry","rich"],prep:25,rating:4.5,serves:1},
 {id:"D02",name:"Dal Makhani",restaurant:"Spice Route",cuisine:"North Indian",diet:"veg",price:220,spice:1,allergens:["dairy"],tags:["dal","curry","comfort"],prep:20,rating:4.6,serves:1},
 {id:"D03",name:"Butter Chicken",restaurant:"Spice Route",cuisine:"North Indian",diet:"nonveg",price:340,spice:1,allergens:["dairy","nuts"],tags:["chicken","curry","rich"],prep:25,rating:4.7,serves:1},
 {id:"D04",name:"Chole Bhature",restaurant:"Spice Route",cuisine:"North Indian",diet:"veg",price:180,spice:2,allergens:["gluten"],tags:["chole","fried","street"],prep:20,rating:4.4,serves:1},
 {id:"D05",name:"Rajma Chawal Bowl",restaurant:"Spice Route",cuisine:"North Indian",diet:"vegan",price:160,spice:1,allergens:[],tags:["rice","bowl","comfort"],prep:15,rating:4.3,serves:1},
 // Biryani Bros (Hyderabadi)
 {id:"D06",name:"Chicken Dum Biryani",restaurant:"Biryani Bros",cuisine:"Hyderabadi",diet:"nonveg",price:320,spice:2,allergens:["dairy"],tags:["biryani","rice","chicken"],prep:30,rating:4.6,serves:1},
 {id:"D07",name:"Mutton Biryani",restaurant:"Biryani Bros",cuisine:"Hyderabadi",diet:"nonveg",price:420,spice:2,allergens:["dairy"],tags:["biryani","rice","mutton"],prep:35,rating:4.7,serves:1},
 {id:"D08",name:"Veg Dum Biryani",restaurant:"Biryani Bros",cuisine:"Hyderabadi",diet:"veg",price:240,spice:2,allergens:["dairy"],tags:["biryani","rice"],prep:30,rating:4.2,serves:1},
 {id:"D09",name:"Egg Biryani",restaurant:"Biryani Bros",cuisine:"Hyderabadi",diet:"egg",price:260,spice:2,allergens:["egg","dairy"],tags:["biryani","rice","egg"],prep:30,rating:4.3,serves:1},
 {id:"D10",name:"Family Chicken Biryani (serves 3)",restaurant:"Biryani Bros",cuisine:"Hyderabadi",diet:"nonveg",price:799,spice:2,allergens:["dairy"],tags:["biryani","rice","chicken","family","party"],prep:40,rating:4.6,serves:3},
 // Dosa Corner (South Indian)
 {id:"D11",name:"Masala Dosa",restaurant:"Dosa Corner",cuisine:"South Indian",diet:"vegan",price:120,spice:1,allergens:[],tags:["dosa","breakfast","light"],prep:15,rating:4.5,serves:1},
 {id:"D12",name:"Idli Sambar (4 pcs)",restaurant:"Dosa Corner",cuisine:"South Indian",diet:"vegan",price:90,spice:1,allergens:[],tags:["idli","breakfast","light","healthy"],prep:10,rating:4.4,serves:1},
 {id:"D13",name:"Mysore Masala Dosa",restaurant:"Dosa Corner",cuisine:"South Indian",diet:"vegan",price:150,spice:3,allergens:[],tags:["dosa","spicy"],prep:15,rating:4.5,serves:1},
 {id:"D14",name:"Chettinad Chicken with Parotta",restaurant:"Dosa Corner",cuisine:"South Indian",diet:"nonveg",price:330,spice:3,allergens:["gluten"],tags:["chicken","curry","spicy"],prep:25,rating:4.6,serves:1},
 {id:"D15",name:"Curd Rice",restaurant:"Dosa Corner",cuisine:"South Indian",diet:"veg",price:110,spice:0,allergens:["dairy"],tags:["rice","light","comfort"],prep:10,rating:4.2,serves:1},
 // Wok Express (Chinese)
 {id:"D16",name:"Veg Hakka Noodles",restaurant:"Wok Express",cuisine:"Chinese",diet:"vegan",price:190,spice:1,allergens:["gluten","soy"],tags:["noodles"],prep:15,rating:4.2,serves:1},
 {id:"D17",name:"Chilli Paneer Dry",restaurant:"Wok Express",cuisine:"Chinese",diet:"veg",price:260,spice:3,allergens:["dairy","soy","gluten"],tags:["paneer","spicy","starter"],prep:15,rating:4.4,serves:1},
 {id:"D18",name:"Chicken Manchurian with Fried Rice",restaurant:"Wok Express",cuisine:"Chinese",diet:"nonveg",price:310,spice:2,allergens:["soy","gluten","egg"],tags:["chicken","rice","combo"],prep:20,rating:4.3,serves:1},
 {id:"D19",name:"Schezwan Fried Rice",restaurant:"Wok Express",cuisine:"Chinese",diet:"vegan",price:200,spice:3,allergens:["soy"],tags:["rice","spicy"],prep:15,rating:4.1,serves:1},
 {id:"D20",name:"Veg Momos (8 pcs)",restaurant:"Wok Express",cuisine:"Chinese",diet:"vegan",price:150,spice:1,allergens:["gluten","soy"],tags:["momos","snack","light"],prep:15,rating:4.4,serves:1},
 // Pizza Piazza (Italian)
 {id:"D21",name:"Margherita Pizza (medium)",restaurant:"Pizza Piazza",cuisine:"Italian",diet:"veg",price:299,spice:0,allergens:["gluten","dairy"],tags:["pizza","cheese"],prep:20,rating:4.3,serves:2},
 {id:"D22",name:"Farmhouse Pizza (large)",restaurant:"Pizza Piazza",cuisine:"Italian",diet:"veg",price:549,spice:1,allergens:["gluten","dairy"],tags:["pizza","party","family"],prep:25,rating:4.4,serves:3},
 {id:"D23",name:"Chicken Pepperoni Pizza (medium)",restaurant:"Pizza Piazza",cuisine:"Italian",diet:"nonveg",price:449,spice:1,allergens:["gluten","dairy"],tags:["pizza","chicken"],prep:20,rating:4.5,serves:2},
 {id:"D24",name:"Penne Arrabbiata",restaurant:"Pizza Piazza",cuisine:"Italian",diet:"vegan",price:280,spice:2,allergens:["gluten"],tags:["pasta"],prep:20,rating:4.1,serves:1},
 {id:"D25",name:"Alfredo Pasta",restaurant:"Pizza Piazza",cuisine:"Italian",diet:"veg",price:320,spice:0,allergens:["gluten","dairy"],tags:["pasta","cheese","rich"],prep:20,rating:4.2,serves:1},
 // Green Bowl (Healthy)
 {id:"D26",name:"Quinoa Buddha Bowl",restaurant:"Green Bowl",cuisine:"Healthy",diet:"vegan",price:330,spice:0,allergens:["nuts"],tags:["bowl","healthy","protein","salad"],prep:15,rating:4.4,serves:1},
 {id:"D27",name:"Grilled Chicken Salad",restaurant:"Green Bowl",cuisine:"Healthy",diet:"nonveg",price:350,spice:0,allergens:[],tags:["salad","healthy","protein","low carb"],prep:15,rating:4.5,serves:1},
 {id:"D28",name:"Paneer Tikka Protein Bowl",restaurant:"Green Bowl",cuisine:"Healthy",diet:"veg",price:310,spice:1,allergens:["dairy"],tags:["bowl","healthy","protein","paneer"],prep:15,rating:4.3,serves:1},
 {id:"D29",name:"Sprouts Chaat",restaurant:"Green Bowl",cuisine:"Healthy",diet:"vegan",price:140,spice:1,allergens:[],tags:["healthy","snack","light","protein"],prep:10,rating:4.0,serves:1},
 {id:"D30",name:"Egg White Omelette Wrap",restaurant:"Green Bowl",cuisine:"Healthy",diet:"egg",price:220,spice:0,allergens:["egg","gluten"],tags:["wrap","healthy","protein","breakfast"],prep:10,rating:4.1,serves:1},
 // Chaat Street (Street food)
 {id:"D31",name:"Pav Bhaji",restaurant:"Chaat Street",cuisine:"Street Food",diet:"veg",price:160,spice:2,allergens:["dairy","gluten"],tags:["street","snack"],prep:15,rating:4.5,serves:1},
 {id:"D32",name:"Pani Puri (12 pcs)",restaurant:"Chaat Street",cuisine:"Street Food",diet:"vegan",price:80,spice:2,allergens:["gluten"],tags:["street","snack","chaat"],prep:5,rating:4.6,serves:1},
 {id:"D33",name:"Vada Pav (2 pcs)",restaurant:"Chaat Street",cuisine:"Street Food",diet:"vegan",price:70,spice:2,allergens:["gluten"],tags:["street","snack","cheap"],prep:5,rating:4.4,serves:1},
 {id:"D34",name:"Chicken Kathi Roll",restaurant:"Chaat Street",cuisine:"Street Food",diet:"nonveg",price:180,spice:2,allergens:["gluten","egg"],tags:["roll","street"],prep:10,rating:4.4,serves:1},
 {id:"D35",name:"Aloo Tikki Chaat",restaurant:"Chaat Street",cuisine:"Street Food",diet:"veg",price:110,spice:2,allergens:["dairy"],tags:["street","chaat","snack"],prep:10,rating:4.3,serves:1},
 // Sweet Tooth (Desserts)
 {id:"D36",name:"Gulab Jamun (2 pcs)",restaurant:"Sweet Tooth",cuisine:"Desserts",diet:"veg",price:90,spice:0,allergens:["dairy","gluten"],tags:["dessert","sweet"],prep:5,rating:4.5,serves:1},
 {id:"D37",name:"Chocolate Brownie with Ice Cream",restaurant:"Sweet Tooth",cuisine:"Desserts",diet:"egg",price:180,spice:0,allergens:["dairy","gluten","egg","nuts"],tags:["dessert","sweet","chocolate"],prep:5,rating:4.6,serves:1},
 {id:"D38",name:"Rasmalai (2 pcs)",restaurant:"Sweet Tooth",cuisine:"Desserts",diet:"veg",price:140,spice:0,allergens:["dairy","nuts"],tags:["dessert","sweet"],prep:5,rating:4.5,serves:1},
 {id:"D39",name:"Mango Sorbet",restaurant:"Sweet Tooth",cuisine:"Desserts",diet:"vegan",price:120,spice:0,allergens:[],tags:["dessert","sweet","light"],prep:5,rating:4.2,serves:1},
 {id:"D40",name:"Gajar Halwa",restaurant:"Sweet Tooth",cuisine:"Desserts",diet:"veg",price:130,spice:0,allergens:["dairy","nuts"],tags:["dessert","sweet","winter"],prep:5,rating:4.4,serves:1}
];
