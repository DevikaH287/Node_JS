var dict ;
dict=
{
    "firstname":"Devika",
    "lastname":"Hovale",
    "USN":31,
    "Address":
    {
        "House_No":01,
        "Area":"Gandhi Chowk",
        "city":"Dharwad",
        "pin_No":580001
    },
    "course":"NodeJs",
    "mark":90

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}
