<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/guessWeapon.css">
    <title>Guess the Weapon</title>
</head>
<body>
    <header>
        <a href = "index.php"><h1>Apexdle</h1></a>
        <p>Test Your Apex Knowledge</p>
        <h1>Guess the legend based on its Weapon</h1>
    </header>
    <div class="Weapon">
        <img id="WeaponImage" src="bg" alt="">
    </div>
    <div id ="jsp">
        <div class = "feur">
            <div class="barreDeRecherche">
                <input type="search" id="input-search" name="input-search" aria-label="Recherche par mot-clef" placeholder="Agent's Name" />
            </div>
            <button id="submit">submit</button>
        </div>
    <div id="conteneur">
        <div id="no-result">
            
        </div>
    </div>
</div>
    <div id="display-good-results">
    </div>
    <div id="display-results">  
    </div>
    <div id="bordure">
        <div id="GG">
            <div id="tout">
                <p id="texteGG"></p>
                <div id="perso">
                    <img src="bg" alt="">
                    <div id="txt">
                        <p id="nom"></p>
                        <p id="try"></p>
                    </div>
                </div>
                <a href="guessQuote.php">
                    <div id="button">
                        <div id="doubleBordure">
                            <div id ="SousCategorie">
                                <h3 id="suivant"></h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div id="vide"></div>
</body>
</html>