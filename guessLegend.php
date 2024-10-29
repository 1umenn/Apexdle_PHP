<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/guessLegend.css">
    <script type="module" src="js/GuessLegend.js"></script>
    <title>Apexdle | Guess the Legend</title>
</head>

<body>
    <header>
        <a href="index.php">
            <h1 id="Apexdle">Apexdle</h1>
        </a>
        <p>Test Your Apex Knowledge</p>
        <h1>Guess the legend</h1>

    </header>
    <main>
        <div class="conteneur">
            <div class="barreDeRecherche">
                <input type="search" id="input-search" name="input-search" aria-label="Recherche par mot-clef" placeholder="Agent's Name ..." />
                <span id="no-result"></span>
            </div>
            <button id="submit">submit</button>
        </div>
        <div class="caracteristique">
            <p>Image</p>
            <p>Agent</p>
            <p>Gender</p>
            <p>Role</p>
            <p>Date</p>
        </div>
        <ul id="display-results">
        </ul>

    </main>
</body>

</html>