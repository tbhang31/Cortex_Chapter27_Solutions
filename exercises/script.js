function randIndex(num) {
    return Math.floor(Math.random()*num)
}
// let test = [1,2,3,4,5]
// console.log(randIndex(test.length));

window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        const destination = document.getElementById("destination");
        const header = document.getElementById("planet-header")
        const info = document.getElementById("planet-info")
        // console.log(response);
        const promise = response.json();
        console.log(promise);
        promise.then(function(json) {
            let planet = json[randIndex(json.length)]
            console.log(planet)
            header.innerHTML = `Planet: ${planet.name}`;
            info.innerHTML = `
            <p>Diameter: ${planet.diameter}</p>
            <p>Star(s): ${planet.star}</p>
            <p>Distance: ${planet.distance}</p>
            <img style="width: 350px; height: 350px;" src="${planet.image}">
            `
        })
    })

    const button = document.getElementById("reload");

    button.addEventListener("click", function() {
        location.reload();
    })
})