var statesArr = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

let optionList = document.getElementById('locationSelect').options;

statesArr.forEach(function (ele) {
    optionList.add(new Option(ele))
})


function changeImage1() {
    document.getElementById("catButtImage1").src = "./Images/subCategory/today'sDeals2.png"
    document.getElementById('catButt1').style.color = 'rgb(248, 72, 102)'
}



var subCategoryArr = [
    {
        img1: "./Images/subCategory/today'sDeals1.png",
        img2: "./Images/subCategory/today'sDeals2.png",
        para: "Today's Deals"
    },
    {
        img1: "./Images/subCategory/chicken1.png",
        img2: "./Images/subCategory/chicken2.png",
        para: "Chiken"
    },
    {
        img1: "./Images/subCategory/fish&Seafood1.png",
        img2: "./Images/subCategory/fish&Seafood2.png",
        para: "Fish & Seafood"
    },
    {
        img1: "./Images/subCategory/mutton1.png",
        img2: "./Images/subCategory/mutton2.png",
        para: "Mutton"
    },
    {
        img1: "./Images/subCategory/readyToCook1.png",
        img2: "./Images/subCategory/readyToCook2.png",
        para: "Ready to Cook"
    },
    {
        img1: "./Images/subCategory/prawns1.png",
        img2: "./Images/subCategory/prawns2.png",
        para: "Prawns"
    },
    {
        img1: "./Images/subCategory/coldCuts1.png",
        img2: "./Images/subCategory/coldCuts2.png",
        para: "ColdCuts"
    },
    {
        img1: "./Images/subCategory/spreads1.png",
        img2: "./Images/subCategory/spreads2.png",
        para: "Spreads"
    },
    {
        img1: "./Images/subCategory/eggs1.png",
        img2: "./Images/subCategory/eggs2.png",
        para: "Eggs"
    },
    {
        img1: "./Images/subCategory/kebab&Tandoor1.png",
        img2: "./Images/subCategory/kebab&Tandoor2.png",
        para: "Kebabs & Tandoor"
    },
    {
        img1: "./Images/subCategory/combos1.png",
        img2: "./Images/subCategory/combos2.png",
        para: "Combos"
    },
    {
        img1: "./Images/subCategory/bestSellers1.png",
        img2: "./Images/subCategory/bestSellers2.png",
        para: "Best Sellers"
    },
    {
        img1: "./Images/subCategory/snacks1.png",
        img2: "./Images/subCategory/snacks2.png",
        para: "Snacks"
    },
]


var subcatContainer = document.getElementsByClassName("swiper-wrapper")

subCategoryArr.forEach(function (ele) {
    var
})