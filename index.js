const select = document.querySelector("#select")
const location1 = document.querySelector("#location")
const update1 = document.querySelector("#update1")
const confirmed1 = document.querySelector("#confirmed1")
const population1 = document.querySelector("#population1")
const death1 = document.querySelector("#death1")
const lifeexpectancy1 = document.querySelector("#lifeexpectancy1")
const infectionrate1 = document.querySelector("#infectionrate1")
const buttonview = document.querySelector("#buttonview")
const global1 = document.querySelector('#global1')
const div1 = document.querySelector('#div1')
const deathrate1 = document.querySelector("#deathrate1")
function divide(a, b) {
    console.log('===')
    return a.innerText / b + "%"
}
axios.get('https://covid-api.mmediagroup.fr/v1/cases ').then(response => {
    console.log(response.data);

    let dataCountry = Object.keys(response.data)
    console.log(dataCountry)

    for (i = 0; i < dataCountry.length; i++) {
        let select1 = document.createElement("option")
        select1.innerText = dataCountry[i]
        select.appendChild(select1)
    }

    select.addEventListener("change", update = () => {
        location1.innerText = select.value
        const populationCount = response.data[select.value].All.population;
        const confirmedCount = response.data[select.value].All.confirmed;
        const infectionRate = divide(confirmedCount, populationCount);
        const deathCount = response.data[select.value].All.deaths;
        const deathrate1 = divide(death1, populationCount);
        population1.innerText = populationCount;
        update1.innerText = response.data[select.value].All.updated;
        confirmed1.innerText = confirmedCount;
        death1.innerText = response.data[select.value].All.deaths;
        lifeexpectancy1.innerText = response.data[select.value].All.life_expectancy;
        infectionrate1.innerText = infectionRate;
    })

    buttonview.addEventListener('click', () => {
        const activClass = div1.className
        if (activClass === "show") {
            div1.className = "hide"
        }
        else {
            div1.className = "show"
        }
    })
    global1.innerText = response.data["Global"].All.population;





    console.log(response.data["Global"].All.population);

})