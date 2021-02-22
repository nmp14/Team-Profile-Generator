// Font awesome icons
const managerIcon = '<i class="fas fa-mug-hot"></i>';
const internIcon = '<i class="fas fa-glasses"></i>';
const engineerIcon = '<i class="fas fa-user-graduate"></i>';

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
        <!-- font awesome -->
        <script src="https://kit.fontawesome.com/d81acf0f70.js" crossorigin="anonymous"></script>
        <!-- custom css -->
        <link href="../CSS/style.css" rel="stylesheet">
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
    // String to hold all the cards.
    cardsHTML = ""
    // Create card for manager.
    const managerCard = await cardHTMLGen(manager, "manager");
    cardsHTML += managerCard;
    // Create cards for every engineer.
    for (const engineer of engineers) {
        const engineerHTML = await cardHTMLGen(engineer, "engineer");
        cardsHTML += engineerHTML;
        console.log(engineer.github);
    }
    // Create cards for every intern.
    for (const intern of interns) {
        const internHTML = await cardHTMLGen(intern, "intern");
        cardsHTML += internHTML;
    }

    return cardsHTML;
}

const cardHTMLGen = (member, role) => {
    // Set icon to the members role. Determine input for last <li>
    let icon;
    let li;
    switch (role) {
        case "manager":
            icon = managerIcon;
            li = `Office number: ${member.officeNumber}`;
            break;
        case "intern":
            icon = internIcon;
            li = `School: ${member.school}`;
            break;
        case "engineer":
            icon = engineerIcon;
            li = `Github: ${member.github}`;
            break;
    }
    // Create the column and card.
    return `
                <div class="col-lg-4 col-md-6">
                    <div class="card mb-4">
                        <div class="card-header text-light">
                            <h5 class="card-title">${member.name}</h5>
                            <h6 class="card-subtitle mb-2">${icon} ${member.getRole()}</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">${member.id}</li>
                                <li class="list-group-item">${member.email}</li>
                                <li class="list-group-item">${li}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `
}

module.exports = generateHTML;