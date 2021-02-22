
const generateHTML = async (team) => {
    // Create html for each of the cards in team.
    const cards = await generateCards(team);

    // Top part of html till card generation
    const firstHalf = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Bootstrap css -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <!-- custom css -->
        <link href="CSS/style.css" rel="stylesheet">
    </head>
    
    <body>
        <header class="text-light container mb-5">
            <h1>My Team</h1>
        </header>
    
        <main class="container">
            <div id="row" class="row justify-content-center">
        `



    // Everything after card generation
    const secondHalf = `
            </div>
        </main>

    </body>

    </html>`

    fullHtml = firstHalf + cards + secondHalf;

    return fullHtml;
}

const generateCards = async (team) => {
    const manager = team.manager;
    const interns = team.interns;
    const engineers = team.engineers;

    cardsHTML = ""

    const managerCard = await cardHTMLGen(manager);
    cardsHTML += managerCard;

    for (const intern of interns) {
        const internHTML = await cardHTMLGen(intern);
        cardsHTML += internHTML;
    }

    return cardsHTML;
}

const cardHTMLGen = (member) => {
    return `
                <div class="col-lg-4 col-md-6">
                    <div class="card mb-4">
                        <div class="card-header text-light">
                            <h5 class="card-title">${member.name}</h5>
                            <h6 class="card-subtitle mb-2">${member.getRole()}</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
    `
}

module.exports = generateHTML;