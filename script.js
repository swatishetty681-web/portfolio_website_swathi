//script.js - First connection to portfolio !
 
//1. Check that JS is working
console.log("JavaScript is connected! 🚀");
 
// 2. Display the current year in footer
let footerYear=document.querySelector('.footer-year');
if(footerYear){
    footerYear.textContent=new Date().getFullYear();;
}
 
//3. Greeting based on time of day
function getGreeting(){
    const hour =new Date().getHours();
    console.log(hour);
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening"
}
 
const heroTitle = document.querySelector('.hero-section h1');
console.log(heroTitle);
if (heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Swathi 👋`;
}