 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */
 let TabLegend = [
    {image : '../image/perso/alter.webp', type : 'Skirmisher', agent : 'Alter',sexe: 'f', date: '2021'},
    {image : '../image/perso/ash.webp', type : 'Assault', agent : 'Ash',sexe: 'f', date: '2021'},
    {image : '../image/perso/ballistic.webp', type : 'Assault', agent : 'Ballistic',sexe: 'h',date: '2023'},
    {image : '../image/perso/bangalore.webp', type : 'Assault', agent : 'Bangalore',sexe: 'f', date:'2019'},
    {image : '../image/perso/bloodhound.webp', type : 'Recon', agent : 'Bloodhound', sexe: 'u', date:'2019'},
    {image : '../image/perso/catalyst.webp', type : 'Controller', agent : 'Catalyst',sexe: 'f', date:'2023'},
    {image : '../image/perso/caustic.webp', type : 'Controller', agent : 'Caustic',sexe: 'h', date:'2019'},
    {image : '../image/perso/conduit.png', type : 'Support', agent : 'Conduit',sexe: 'f',date: '2023'},
    {image : '../image/perso/crypto.webp', type : 'Recon', agent : 'Crypto',sexe: 'h', date: '2019'},
    {image : '../image/perso/fuse.webp', type : 'Assault', agent : 'Fuse', sexe: 'h',date: '2021'},
    {image : '../image/perso/gibi.webp', type : 'Support', agent : 'Gibraltar', sexe: 'h',date:'2019'},
    {image : '../image/perso/horizon.webp', type : 'Skirmisher', agent : 'Horizon', sexe: 'f',date:'2020'},
    {image : '../image/perso/lifeline.png', type : 'Support', agent : 'Lifeline', sexe: 'f',date:'2019'},
    {image : '../image/perso/loba.webp', type : 'Support', agent : 'Loba', sexe: 'f',date:'2020'},
    {image : '../image/perso/madmaggie.png', type : 'Assault', agent : 'Mad Maggie', sexe: 'f',date:'2022'},
    {image : '../image/perso/mirage.png', type : 'Support', agent : 'Mirage', sexe: 'h',date:'2019'},
    {image : '../image/perso/newcastle.webp', type : 'Support', agent : 'Newcastle', sexe: 'h',date:'2022'},
    {image : '../image/perso/octane.webp', type : 'Skirmisher', agent : 'Octane', sexe: 'h',date:'2019'},
    {image : '../image/perso/pathfinder.webp', type : 'Skirmisher', agent : 'Pathfinder', sexe: 'h',date:'2019'},
    {image : '../image/perso/rampart.webp', type : 'Controller', agent : 'Rampart', sexe: 'f',date:'2020'},
    {image : '../image/perso/revenant.webp', type : 'Skirmisher', agent : 'Revenant', sexe: 'h',date:'2020'},
    {image : '../image/perso/seer.png', type : 'Recon', agent : 'Seer', sexe: 'h',date:'2021'},
    {image : '../image/perso/valkyrie.webp', type : 'Skirmisher', agent : 'Valkyrie', sexe: 'f',date:'2021'},
    {image : '../image/perso/vantage.webp', type : 'Recon', agent : 'Vantage', sexe: 'f',date:'2022'},
    {image : '../image/perso/wattson.webp', type : 'Controller', agent : 'Wattson', sexe: 'f',date:'2019'},
    {image : '../image/perso/wraith.webp', type : 'Assault', agent : 'Wraith', sexe: 'f',date:'2019'}
];

let TabReponse = [];

let TabProposition = [];



/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/


let TotalTry = 0;

let trouvee = false;

let SelectedProposition = 0;

const ListProposition = document.getElementById("no-result");

const recherche = document.getElementById("input-search");

const ButtonSubmit = document.getElementById("submit");

const bonneReponse = document.getElementById("display-good-results");

let ListPropositionTab = document.querySelectorAll("#no-result ul li");



/**
 * pour afficher l'image et sauvegarder l'agent correspondant
 */
let rand = Math.random() * TabLegend.length | 0;
let rValue = TabLegend[rand];
let agent = rValue.agent;

/*
--------------------------------------------------------------------------------
validation perso
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === rValue.agent.toUpperCase()){
        recherche.disabled = "true";
        trouvee = true;
        TotalTry++;
        affichageTour(rValue);
        affichage(rValue);
    }
    else{
        ajouterTabreponse();
        affichage();
    }
    recherche.value = "";
})



const ajouterTabreponse = () =>{
    let proposition = null;
    TabLegend.forEach(perso =>{
        if(perso.agent.toUpperCase() == recherche.value.toUpperCase()){
            proposition = perso;
        }
    })
    let bool = false;
    TabReponse.forEach(reponse =>{
        if(reponse == proposition){
           bool = true;
        }
    })
    if(!bool && proposition != null){
        TotalTry++;
        TabReponse.push(proposition); 
    }
}

const affichage = () =>{
    const TabReponseReverse = TabReponse.reverse();
    const afficheproposition = document.getElementById("display-results");
    afficheproposition.innerHTML = "";
    TabReponseReverse.forEach(reponse =>{
        const DivConteneurAgent = document.createElement("div");
        const DivimgAgent = document.createElement("div");
        const DivNomAgent = document.createElement("div");
        const DivSexAgent = document.createElement("div");
        const DivRoleAgent = document.createElement("div");
        const DivDateSortie = document.createElement("div");

        const img = document.createElement("img");
        img.src = reponse.image;
        img.alt = "imgPropal";
        DivimgAgent.appendChild(img);
        DivimgAgent.style.backgroundColor = "red";
        DivimgAgent.style.width = "20%";
        DivimgAgent.style.maxHeight = "150px";
        DivimgAgent.style.margin = "1%";
        DivimgAgent.style.border = "solid white 1px";
        DivimgAgent.style.display = "flex";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "80%";
        img.style.alignSelf = "flex-end";
        DivConteneurAgent.appendChild(DivimgAgent);

        const Nom = document.createElement("p");
        Nom.textContent = reponse.agent;
        DivNomAgent.appendChild(Nom);
        DivNomAgent.style.backgroundColor = "red";
        DivNomAgent.style.width = "20%";
        DivNomAgent.style.maxHeight = "150px";
        DivNomAgent.style.border = "solid white 1px";
        DivNomAgent.style.margin = "1.5%";
        Nom.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivNomAgent);

        const Sex = document.createElement("p");
        if(reponse.sexe =='f'){
            Sex.textContent = "Female";
        }
        else{
            Sex.textContent = "Male"
        }
        DivSexAgent.appendChild(Sex);
        DivSexAgent.style.backgroundColor = "red";
        DivSexAgent.style.width = "20%";
        DivSexAgent.style.maxHeight = "150px";
        DivSexAgent.style.border = "solid white 1px";
        DivSexAgent.style.margin = "1.5%";
        Sex.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivSexAgent);

        const role = document.createElement("p");
        role.textContent = reponse.type;
        DivRoleAgent.appendChild(role);
        DivRoleAgent.style.backgroundColor = "red";
        DivRoleAgent.style.width = "20%";
        DivRoleAgent.style.maxHeight = "150px";
        DivRoleAgent.style.border = "solid white 1px";
        DivRoleAgent.style.margin = "1.5%";
        role.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivRoleAgent);

        const relDate = document.createElement("p");
        relDate.textContent = reponse.date;
        DivDateSortie.appendChild(relDate);
        DivDateSortie.style.backgroundColor = "red";
        DivDateSortie.style.width = "20%";
        DivDateSortie.style.maxHeight = "150px";
        DivDateSortie.style.border = "solid white 1px";
        DivDateSortie.style.margin = "1.5%";
        relDate.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivDateSortie);

        DivConteneurAgent.style.display = "flex";
        afficheproposition.appendChild(DivConteneurAgent);
        
        
        
    })
    afficheproposition.style.display = "flex"; 
    afficheproposition.style.flexDirection ="column";
    TabReponse.reverse();
    ListProposition.style.display = "none";
    recherche.value = "";
}

/*
-------------------------------------------------------------------------------
affichage fin de manche une fois la legend trouvé
-------------------------------------------------------------------------------
*/
const afficherFin = (reponse) =>{
    document.getElementById("GG").style.border = "solid green 8px";
    document.getElementById("GG").style.borderRadius = "10px";
    document.getElementById("GG").style.width = "30%";
    document.getElementById("GG").style.background = "black";
    document.getElementById("tout").style.borderRadius = "10px";
    document.getElementById("tout").style.margin = "5%";
    document.getElementById("texteGG").textContent = "GG !";
    document.getElementById("tout").style.display = "flex";
    document.getElementById("tout").style.flexDirection = "column";
    document.getElementById("tout").style.alignItems = "center";
    document.getElementById("nom").textContent = reponse.agent;
    document.getElementById("try").textContent = "TRY : " + TotalTry;
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = reponse.image;
    document.querySelector("#perso img").alt = "perso";
    document.querySelector("#perso img").style.width = "50%";
    document.querySelector("#perso img").style.height = "50%";
    document.querySelector("#perso img").style.marginRight= "10%";
    document.getElementById("doubleBordure").style.border = "solid white 2px";
    document.getElementById("doubleBordure").style.paddingRight = "150%";
    document.getElementById("doubleBordure").style.paddingLeft = "150%";
    document.getElementById("suivant").textContent = "Weapon";
    document.getElementById("suivant").style.textAlign = "center";
    document.getElementById("suivant").style.color = "white";
    document.getElementById("suivant").style.padding = "5%";
    document.getElementById("vide").style.margin = "5%";
    document.getElementById("vide").style.padding = "5%";
    document.getElementById("vide").scrollIntoView({behavior: 'smooth', inline: 'end'});
    document.getElementById("vide").style.margin = "1%";
    document.getElementById("vide").style.padding = "1%";
    document.getElementById("button").style.marginTop = "5%";
    document.getElementById("button").style.display = "flex";
    document.getElementById("button").style.justifyContent = "center";
}

/*
---------------------------------------------------------------------------------------------
affichage Proposition personnage
---------------------------------------------------------------------------------------------
*/




recherche.addEventListener('keydown',(event)=>{
    if((event.key == 'Enter' || event =='13') && TabProposition.length >= 0){
        let legend = TabProposition[SelectedProposition];
        recherche.value = legend.agent;
        ButtonSubmit.click();
        SelectedProposition = 0;
    }
    else if ((event.key == 'ArrowDown' || event == '40') && TabProposition.length - 1 >= SelectedProposition + 1){
        SelectedProposition++;
    }
    else if ((event.key == 'ArrowUp' || event == '38') && SelectedProposition - 1 >= 0){
        SelectedProposition--;
    }
    document.querySelectorAll("#no-result li").forEach(elt =>{
        if(elt != document.querySelectorAll("#no-result li")[SelectedProposition]){
            elt.style.backgroundColor = "grey";
            elt.style.transitionDuration = "0.5s";
        }
        else{
            elt.style.backgroundColor = "black";
            elt.style.transitionDuration = "0.5s";
        }
    })
})

recherche.addEventListener('input', () =>{
        ajouterProposition();
        printPropal();
})


const ajouterProposition =() =>{
    ListProposition.innerHTML="";
    TabProposition = [] ;
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ListProposition.appendChild(ul);
    if(recherche.value == ""){
        ListProposition.innerHTML="";
        TabProposition = [];
    }
    else{
        TabLegend.forEach(legend =>{
            if(legend.agent.toUpperCase().includes(recherche.value.toUpperCase())){
                if(!TabReponse.includes(legend) && !TabProposition.includes(legend)){
                    TabProposition.push(legend);
                }
            }
        })
    }
}



const printPropal = () =>{
    if(recherche.value == ""){
        ListProposition.style.display = "none";
    }
    else{
        ListProposition.style.display = "block";
        TabProposition.forEach(propal =>{
            const proposition = document.createElement("li");
            proposition.textContent = propal.agent;
            proposition.style.textAlign = "center";
            proposition.style.paddingTop = "5%";
            proposition.style.backgroundColor = "rgb(128,128,128)";
            proposition.style.border = "solid white 2px";
            proposition.style.width = recherche.style.width;
            proposition.style.listStyleType = "none";
            proposition.style.height = "1cm";
            proposition.style.cursor = "pointer";
            ListProposition.appendChild(proposition);
            ListProposition.style.marginBottom = "1%";
            ListProposition.style.position = "absolute";
            ListProposition.style.zIndex = "7";


            // Add mouseenter event listener to apply the hover effect
            proposition.addEventListener('mouseenter', () => {
                proposition.style.backgroundColor = "black";
                proposition.style.transitionDuration = "0.5s";
            });
            // Add mouseleave event listener to remove the hover effect
            proposition.addEventListener('mouseleave', () => {
                proposition.style.backgroundColor = "grey";
                proposition.style.transitionDuration = "0.5s";
            });


            proposition.addEventListener('click', () =>{
                recherche.value = proposition.textContent;
                ButtonSubmit.click();
            });
        })
        let feur =ListProposition.querySelectorAll("#no-result li");
        for(let i=0; i<feur.length;i++){
            feur[i].addEventListener('mouseover', () =>{
                SelectedProposition = i;
            })
        }
        
    }
}

const dessus = (elt) =>{
    elt.style.backgroundColor = "black";
}

const ailleur = (elt) =>{
    elt.style.backgroundColor = "rgb(128,128,128)";
}


