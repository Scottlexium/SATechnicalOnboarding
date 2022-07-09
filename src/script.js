function load() {
    console.log("loaded")
    // dynamic content
    const experience = [
        {
            company: "Xender",
            location: "China",
            start: "Nov-2020",
            end: "Present",
            title: "Software Engineer",
            description: "Xender is a cloud-based software development company.",
        },
        {
            company: "Xender",
            location: "China",
            start: "Nov-2019",
            end: "Nov-2020",
            title: "Software Engineer",
            description: "Xender is a cloud-based software development company.",
        },
        {
            company: "facebook",
            location: "USA",
            start: "Nov-2018",
            end: "Nov-2019",
            title: "Software Engineer",
            description: "Xender is a cloud-based software development company.",

        },

    ];
    const name = document.getElementById("section");
    for (let i = 0; i < experience.length; i++) {
        const element = experience[i];
        name.innerHTML += `
        <div class="section__list">
            <div class="section__list-item">
                <div class="left">
                    <div id="name" class="name">${element.company}</div>
                    <div class="addr">${element.location}</div>
                    <div class="duration">${element.start} - ${element.end}</div>
                </div>
                <div class="right">
                    <div class="name">${element.title}</div>
                    <div class="desc">${element.description}</div>
                </div>
            </div>
        </div>

        `

    }
    // dynamic content
}
window.addEventListener("load", load);
