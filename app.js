let tips = [
    {
        tipText: "Join 757ColorCoded on Slack!",
        link: {
            url: "https://757colorcoded.slack.com/",
            display: "757ColorCoded on Slack",
        },
        contributor: "Heather"
    },
    {
        tipText: "Join 757ColorCoded on Meetup",
        link: {
            url: "https://meetup.com/757colorcoded",
        },
    }
    // TODO: Add more tips
]

function generateTip() {
    const tipNumber = Math.floor(Math.random() * tips.length)
    document.getElementById("tip").innerText = tips[tipNumber].tipText;
    if (tips[tipNumber].link.url) {
        document.getElementById("link").innerHTML = `<a href="${tips[tipNumber].link.url}" target="_blank">${tips[tipNumber].link.display ? tips[tipNumber].link.display : tips[tipNumber].link.url}</a>`
    } else {
        document.getElementById("link").innerHTML = ""
    }
    document.getElementById("contributor").innerText = tips[tipNumber].contributor ? `Contributor: ${tips[tipNumber].contributor}` : "";
}
