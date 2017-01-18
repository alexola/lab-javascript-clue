


var suspects = [
  {name:"Jacabo Green", color: "green", description:"He has a lot of connections and is always willing to help people out."},
  {name:"Doctor Orchid", color:"white",description:"he is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology."},
  {name:"Victor Plum", color:"purple",description:"He is a billionaire video game designer who is embracing his new popularity."},
  {name:"Kasandra Scarlet",color:"red", description:"She is an A-list movie star whose past haunts her."},
  {name:"Eleanor Peacokc", color:"blue", description:"She is from a wealthy family and uses her status and money to earn popularity."},
  {name:"Jack Mustard", color:"yellow",description:"He is a former football player who tries to get by on his former glory." }
];

var weapons = [
  {name:"Rope",color:"black"},
  {name:"Knife",color:"blue navy"},
  {name:"Candlestick",color:"brown"},
  {name:"Dumbbell",color:"orange"},
  {name:"Poision",color:"red"},
  {name:"Axe",color:"purple"},
  {name:"Bat",color:"yellow"},
  {name:"Trophy",color:"white"},
  {name:"Pistol",color:"green"}
];

var houseRooms = [
   {name:"Dining room",description:"blueprint"},
   {name:"Conservatory",description:"blueprint"},
   {name:"Kitchen",description:"blueprint"},
   {name:"Study",description:"blueprint"},
   {name:"Library",description:"blueprint"},
   {name:"Lounge",description:"blueprint"},
   {name:"Ballroom",description:"blueprint"},
   {name:"Hall",description:"blueprint"},
   {name:"Spa",description:"blueprint"},
   {name:"Livivng room",description:"blueprint"},
   {name:"Observatory",description:"blueprint"},
   {name:"Theater",description:"blueprint"},
   {name:"Guest house",description:"blueprint"},
   {name:"Patio",description:"blueprint"},
];

var subject = suspects[Math.floor(Math.random() * suspects.length)];
var army = weapons[Math.floor(Math.random() * weapons.length)];
var place = houseRooms[Math.floor(Math.random() * houseRooms.length)];

var killer= [suspects,weapons,houseRooms];



function envelope(reveal){
  reveal.forEach(function(mist){
    var card = mist[Math.floor(Math.random()*mist.length)];

  });
}

envelope(killer);

console.log("The murder is " + subject.name);
console.log("The murder weapon "+ army.name);
console.log("And the murder happen "+ place.name);
