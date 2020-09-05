var request = new XMLHttpRequest()
var countrys = []
var result = []


// var div = document.querySelector("div")
// divvalue = div.getAttribute("data-value")



request.open('GET', 'https://api.covid19api.com/summary', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    for(var i = 0;i<data["Countries"].length;i++){
        countrys.push(data["Countries"][i]);
    }
    // for(var j = 0;j<countrys.length;j++){
    //     console.log(countrys[j]["Country"],"toplam",countrys[j]["TotalConfirmed"]);
    // }

    //console.log(countrys[0]);




var inp = document.querySelector("input")



var applist = []

class app{
    constructor(data,index){
        this.data = data
        this.index = index
        //console.log("asdsad",this.data);

        this.elemcont = document.querySelector(".elemcont")

        this.elem = document.createElement("div")
        this.elem.classList.add("elem")
        this.elemcont.appendChild(this.elem)

        this.cname = document.createElement("p")
        this.cname.classList.add("cname")
        this.cname.innerText = this.data[this.index]["Country"]
        this.elem.appendChild(this.cname)

        this.keyvaluediv = document.createElement("div")
        this.keyvaluediv.classList.add("keyvaluediv")
        this.elem.appendChild(this.keyvaluediv)

        this.keyclass = document.createElement("keyclass")
        this.keyclass.classList.add("keyclass")
        this.keyvaluediv.appendChild(this.keyclass)

        this.olum = document.createElement("p")
        this.olum.classList.add("key")
        this.olum.innerText = "Olumler:"
        this.keyclass.appendChild(this.olum)

        this.xeste = document.createElement("p")
        this.xeste.classList.add("key")
        this.xeste.innerText = "Toplam Xeste:"
        this.keyclass.appendChild(this.xeste)

        this.sagal = document.createElement("p")
        this.sagal.classList.add("key")
        this.sagal.innerText = "Sagalanlar:"
        this.keyclass.appendChild(this.sagal)

        this.valueclass = document.createElement("div")
        this.valueclass.classList.add("valueclass")
        this.keyvaluediv.appendChild(this.valueclass)

        this.olumvalue = document.createElement("p")
        this.olumvalue.classList.add("value")
        this.olumvalue.innerText = this.data[this.index]["TotalDeaths"]
        this.valueclass.appendChild(this.olumvalue)

        this.xestevalue = document.createElement("p")
        this.xestevalue.classList.add("value")
        this.xestevalue.innerText = this.data[this.index]["TotalConfirmed"]
        this.valueclass.appendChild(this.xestevalue)

        this.sagalvalue = document.createElement("p")
        this.sagalvalue.classList.add("key")
        this.sagalvalue.innerText = this.data[this.index]["TotalRecovered"]
        this.valueclass.appendChild(this.sagalvalue)
        applist.push(this)
    }
}


for(var a = 0;a<countrys.length;a++){
    var app1 = new app(countrys,a)
}


console.log("applist:",applist[0].cname.innerText);



inp.addEventListener("keyup",() => {
    var inpvalue = inp.value
    for(var i = 0;i<countrys.length;i++){
        var ara = applist[i].cname.innerText
        inpvalue = inpvalue.toLowerCase()
        ara = ara.toLowerCase()
        if(ara.includes(inpvalue,0)){
            applist[i].elem.style.display = "block"
        }
        else{
            applist[i].elem.style.display = "none"
        }
    }
    

})



}


request.send()
// for(var a = 0;a<countrys.length-10;a++){
//     app1 = new app(countrys,a)
// }



// var app1 = new app(countrys[0],1)
// console.log(countrys[0]);





/* <h1 id="title">COVID19 Datas</h1>
<input type="text" id="search" placeholder="Search Country">
<div class="elemcont">
    <div class="elem">
        <p class="cname">Country Name</p>
        <div class="keyvaluediv">

            <div class="keyclass">
                <p class="key">Some text</p>
                <p class="key">Some text</p>
                <p class="key">Some text</p>
                <p class="key">Some text</p>
            </div>

            <div class="valueclass">
                <p class="value">Some value</p>
                <p class="value">Some value</p>
                <p class="value">Some value</p>
                <p class="value">Some value</p>
            </div>

        </div>
    </div>
</div>
 */


