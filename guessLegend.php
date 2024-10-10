<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/guessLegend.css">
    <title>Apexdle | Guess the Legend</title>
</head>

<body>
    <header>
        <a href="index.php">
            <h1>Apexdle</h1>
        </a>
        <p>Test Your Apex Knowledge</p>
        <div id="theme">
            <h2>Guess the legend</h2>
        </div>

    </header>
    <main>
        <div class="conteneur">
            <div class="barreDeRecherche">
                <input type="search" id="input-search" name="input-search" aria-label="Recherche par mot-clef" placeholder="Agent's Name ..." />
                <span id="no-result"></span>
                <ul id="display-results">
                </ul>
            </div>
            <button>submit</button>
        </div>
        <div class="caracteristique">

            <p>Agent</p>
            <p>Gender</p>
            <p>Role</p>
            <p>Date</p>

        </div>

    </main>
</body>

</html>