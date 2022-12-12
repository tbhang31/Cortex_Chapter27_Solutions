window.addEventListener("load", function() {
    const info = document.getElementById("container")
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);
        let json = response.json();
        json.then(function(json) {
            for (id in json) {
                console.log(json[id]);
                info.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[id].firstName} ${json[id].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[id].hoursInSpace} </li>
                                <li>Active: <span id="active">${json[id].active}</span></li>
                                <li>Skills: ${json[id].skills} </li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[id].picture}">
                    </div>
                `;
                const count= document.getElementById("count");
                count.innerHTML = `Astronaut Count: ${json.length}`
            }
        })

    })
})