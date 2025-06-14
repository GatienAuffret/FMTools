//make this clear for a human to read, write everything, dont let me complete
// DOM element references
const minPro = document.getElementById("minPro");
const midPro = document.getElementById("midPro");
const maxPro = document.getElementById("maxPro");
const minPre = document.getElementById("minPre");
const midPre = document.getElementById("midPre");
const maxPre = document.getElementById("maxPre");
const minTemp = document.getElementById("minTemp");
const midTemp = document.getElementById("midTemp");
const maxTemp = document.getElementById("maxTemp");
const minAmb = document.getElementById("minAmb");
const midAmb = document.getElementById("midAmb");
const maxAmb = document.getElementById("maxAmb");
const minFid = document.getElementById("minFid");
const midFid = document.getElementById("midFid");
const maxFid = document.getElementById("maxFid");
const minFp = document.getElementById("minFp");
const midFp = document.getElementById("midFp");
const maxFp = document.getElementById("maxFp");
const minPol = document.getElementById("minPol");
const midPol = document.getElementById("midPol");
const maxPol = document.getElementById("maxPol");

const Garret = document.getElementById("Garret");
const Gprise = document.getElementById("Gprise");
const Deftac = document.getElementById("Deftac");
const Deftec = document.getElementById("Deftec");
const Attac = document.getElementById("Attac");
const Attec = document.getElementById("Attec");
const Postac = document.getElementById("Postac");
const Postec = document.getElementById("Postec");
const Puis = document.getElementById("Puis");
const Viva = document.getElementById("Viva");
const det = document.getElementById("det");

const CP = document.getElementById("CP");
const CaM = document.getElementById("CaM");
const Def = document.getElementById("Def");
const Det = document.getElementById("Det");
const Men = document.getElementById("Men");
const Ndd = document.getElementById("Ndd");
const Off = document.getElementById("Off");
const Tac = document.getElementById("Tac");
const Tec = document.getElementById("Tec");
const AGB = document.getElementById("AGB");
const PGB = document.getElementById("PGB");
const RGB = document.getElementById("RGB");

const checkbox1 = document.getElementById("prjt1");
const checkbox1b = document.getElementById("prjt1b");
const checkbox2 = document.getElementById("prjt2");
const checkbox3 = document.getElementById("prjt3");

const tabs = document.querySelectorAll(".tabs li");
const tabContents = document.querySelectorAll(".tab-content div");

// Image paths
const images = {
    zero: "../image/0etoile.png",
    demi: "../image/demi.png",
    un: "../image/1etoile.png",
    undemi: "../image/1etdemi.png",
    deux: "../image/2etoiles.png",
    deuxdemi: "../image/2etdemi.png",
    trois: "../image/3etoiles.png",
    troisdemi: "../image/3etdemi.png",
    quatre: "../image/4etoiles.png",
    quatredemi: "../image/4etdemi.png",
    cinq: "../image/5etoiles.png"
};

// Media options mapping
const mediaOptions = {
    "": [{ text: "Rapports aux médias" }],
    "ApMe": [{ text: "Apprécié des médias", value: "ApMe" }],
    "ApMeCon": [{ text: "Apprécié des médias, Conflictuel", value: "ApMeCon" }],
    "ApMeImp": [{ text: "Apprécié des médias, Imperturbable", value: "ApMeImp" }],
    "ApMeIr": [{ text: "Apprécié des médias, Irascible", value: "ApMeIr" }],
    "ApMeIrCon": [{ text: "Apprécié des médias, Irascible, Conflictuel", value: "ApMeIrCon" }],
    "ApMeRe": [{ text: "Apprécié des médias, Réservé", value: "ApMeRe" }],
    "ApMeVer": [{ text: "Apprécié des médias, Versatile", value: "ApMeVer" }],
    "ApMeVerCon": [{ text: "Apprécié des médias, Versatile, Conflictuel", value: "ApMeVerCon" }],
    "Con": [{ text: "Conflictuel", value: "Con" }],
    "Equi": [{ text: "Équilibré", value: "Equi" }],
    "Eva": [{ text: "Évasif", value: "Eva" }],
    "EvaCon": [{ text: "Évasif, Conflictuel", value: "EvaCon" }],
    "EvaImp": [{ text: "Évasif, Imperturbable", value: "EvaImp" }],
    "EvaIr": [{ text: "Évasif, Irascible", value: "EvaIr" }],
    "EvaIrCon": [{ text: "Évasif, Irascible, Conflictuel", value: "EvaIrCon" }],
    "EvaRes": [{ text: "Évasif, Réservé", value: "EvaRes" }],
    "EvaVer": [{ text: "Évasif, Versatile", value: "EvaVer" }],
    "EvaVerCon": [{ text: "Évasif, Versatile, Conflictuel", value: "EvaVerCon" }],
    "Imp": [{ text: "Imperturbable", value: "Imp" }],
    "Ir": [{ text: "Irascible", value: "Ir" }],
    "IrCon": [{ text: "Irascible, Conflictuel", value: "IrCon" }],
    "Re": [{ text: "Réservé", value: "Re" }],
    "Spo": [{ text: "Spontané", value: "Spo" }],
    "SpoCon": [{ text: "Spontané, Conflictuel", value: "SpoCon" }],
    "SpoImp": [{ text: "Spontané, Imperturbable", value: "SpoImp" }],
    "SpoIr": [{ text: "Spontané, Irascible", value: "SpoIr" }],
    "SpoIrCon": [{ text: "Spontané, Irascible, Conflictuel", value: "SpoIrCon" }],
    "SpoVer": [{ text: "Spontané, Versatile", value: "SpoVer" }],
    "SpoVerCon": [{ text: "Spontané, Versatile, Conflictuel", value: "SpoVerCon" }],
    "Ver": [{ text: "Versatile", value: "Ver" }],
    "VerCon": [{ text: "Versatile, Conflictuel", value: "VerCon" }]
};

// Personality to media keys mapping
// Mapping from personality types to allowed media keys.
// Each key is a personality code, and its value is an array of media keys
// that are valid for that personality. The empty string "" means the default option.
const personalityMediaMap = {
    // Ambitious personalities
    "Amb": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon"
    ],
    "TreAmb": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon"
    ],
    "Vers": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon"
    ],
    "Me": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon"
    ],

    // Model citizen
    "CiMo": [
        "", "Equi", "EvaImp", "Imp", "Re", "Spo", "SpoImp"
    ],

    // Moderately ambitious
    "AsAmb": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],

    // Determined and balanced
    "AsDe": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],
    "Eq": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],

    // Moderately loyal
    "AsLo": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],

    // Moderately fair-play
    "AsFP": [
        "", "ApMe", "ApMeIr", "ApMeVer", "Equi", "Ir", "Spo", "SpoIr", "SpoVer", "Ver"
    ],

    // Relaxed
    "Dec": [
        "", "ApMe", "ApMeCon", "ApMeVer", "ApMeVerCon", "Equi", "Spo", "SpoCon", "SpoVer", "SpoVerCon", "Ver"
    ],

    // Indolent
    "In": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeVer", "ApMeVerCon",
        "Equi", "Imp", "Spo", "SpoCon", "SpoImp", "SpoVer", "SpoVerCon", "Ver"
    ],

    // Joyful
    "Jo": [
        "", "ApMe", "ApMeImp", "Equi", "Imp", "Spo", "SpoImp"
    ],

    // Fair and disloyal
    "FaCo": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],
    "Fri": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoIr", "SpoIrCon",
        "SpoVer", "SpoVerCon", "Ver", "VerCon"
    ],

    // Cheerful
    "Enj": [
        "", "ApMe", "ApMeImp", "Equi", "Eva", "EvaImp", "EvaRes", "Imp", "Spo", "SpoImp"
    ],

    // Enthusiastic
    "Ent": [
        "", "ApMe", "ApMeImp", "Equi", "Eva", "EvaImp", "EvaRes", "Imp", "Spo", "SpoImp"
    ],

    // Model professional
    "Modpro": [
        "", "ApMe", "ApMeImp", "ApMeRe", "Equi", "Eva", "EvaImp", "EvaRes", "Imp", "Re", "Spo", "SpoImp"
    ],

    // Professional
    "Pro": [
        "", "ApMe", "ApMeImp", "ApMeRe", "Equi", "Eva", "EvaImp", "EvaRes", "Imp", "Re", "Spo", "SpoImp"
    ],

    // Sufficiently ambitious
    "SAmb": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Imp", "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ],

    // Fair-play
    "FP": [
        "", "ApMe", "ApMeImp", "ApMeIr", "ApMeRe", "ApMeVer", "Equi", "Eva", "EvaImp", "EvaIr", "EvaRes",
        "EvaVer", "Imp", "Ir", "Re", "Spo", "SpoImp", "SpoIr", "SpoVer", "Ver"
    ],

    // Honest
    "Ho": [
        "", "ApMe", "ApMeImp", "ApMeIr", "ApMeRe", "ApMeVer", "Equi", "Eva", "EvaImp", "EvaIr", "EvaRes",
        "EvaVer", "Imp", "Ir", "Re", "Spo", "SpoImp", "SpoIr", "SpoVer", "Ver"
    ],

    // Perfectionist
    "Per": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Eva", "EvaCon", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ],

    // Strong personality
    "Fo": [
        "", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon", "Ir", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon", "Ver"
    ],

    // Loyal
    "Lo": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Equi", "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Imp", "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ],
    "TreLoy": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Equi", "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Imp", "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ],

    // Moderately perfectionist
    "AsPro": [
        "", "ApMe", "ApMeCon", "ApMeIr", "ApMeIrCon", "ApMeRe", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Eva", "EvaCon", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Ir", "IrCon", "Re", "Spo", "SpoCon", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ],

    // Disloyal
    "Del": [
        "", "ApMe", "ApMeCon", "ApMeImp", "ApMeIr", "ApMeIrCon", "ApMeVer", "ApMeVerCon",
        "Con", "Equi", "Eva", "EvaCon", "EvaImp", "EvaIr", "EvaIrCon", "EvaRes", "EvaVer", "EvaVerCon",
        "Imp", "Ir", "IrCon", "Spo", "SpoCon", "SpoImp", "SpoIr", "SpoIrCon", "SpoVer", "SpoVerCon",
        "Ver", "VerCon"
    ]
};

// Updates the Media select element based on personality
function RMchange() {
    Media.length = 0;
    const personality = Personnalite.value;
    const keys = personalityMediaMap[personality] || [];
    keys.forEach(key => {
        (mediaOptions[key] || []).forEach(opt => {
            const option = new Option(opt.text, opt.value || "");
            Media.appendChild(option);
        });
    });
}

// Adds a single option to the Media select element
function RM(key) {
    (mediaOptions[key] || []).forEach(opt => {
        const option = new Option(opt.text, opt.value || "");
        Media.appendChild(option);
    });
}
// Sets the default values for attributes based on the selected personality and media
function note() {
    rst();

    // Handle each personality type
    if (Personnalite.value === "Amb") {
        minAmb.innerHTML=16;
        maxAmb.innerHTML = 19;
        minFid.innerHTML = 7;
        maxFid.innerHTML = 9;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "AsAmb") {
        minAmb.innerHTML = 15;
        maxPro.innerHTML = 14;
        if (det.value > 14) {
            det.value = 14;
            det.max = 14;
        }
        deter(2);
        deter(3);
        deter(4);
        deter(5);
        cas(0);
        cas(2);
        cas(5);
    } else if (Personnalite.value === "AsDe") {
        maxPro.innerHTML = 14;
        minFp.innerHTML = 5;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        det.min = 15;
        if (det.value < 15) det.value = 15;
        maxPre.innerHTML = 16;
        cas(0);
        cas(2);
        cas(3);
        cas(4);
        cas(5);
    } else if (Personnalite.value === "AsFP") {
        maxPro.innerHTML = 14;
        minFp.innerHTML = 15;
        maxFid.innerHTML = 14;
        maxAmb.innerHTML = 14;
        det.max = 14;
        if (det.value > 14) det.value = 14;
        deter(1);
        deter(2);
        deter(3);
        deter(4);
        cas(0);
        cas(5);
    } else if (Personnalite.value === "AsLo") {
        minAmb.innerHTML = 6;
        maxAmb.innerHTML = 14;
        maxPro.innerHTML = 14;
        minFid.innerHTML = 15;
        det.max = 14;
        if (det.value > 14) det.value = 14;
        deter(1);
        deter(2);
        deter(3);
        deter(4);
        deter(5);
        cas(0);
        cas(4);
        cas(5);
    } else if (Personnalite.value === "AsPro") {
        minPro.innerHTML = 15;
        det.max = 14;
        if (det.value > 14) det.value = 14;
        deter(1);
        deter(3);
        deter(4);
        deter(5);
        cas(1);
        cas(2);
        cas(3);
        cas(4);
        cas(5);
    } else if (Personnalite.value === "CiMo") {
        minAmb.innerHTML = 12;
        minPro.innerHTML = 15;
        minFp.innerHTML = 15;
        minFid.innerHTML = 15;
        minPre.innerHTML = 14;
        minTemp.innerHTML = 15;
        det.min = 14;
        if (det.value < 14) det.value = 14;
    } else if (Personnalite.value === "Dec") {
        minPro.innerHTML = 2;
        maxPro.innerHTML = 4;
        minTemp.innerHTML = 5;
        det.max = 9;
        if (det.value > 9) det.value = 9;
    } else if (Personnalite.value === "Del") {
        midFp.innerHTML = 1;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        det.min = 11;
        if (det.value < 11) det.value = 11;
        cas(0);
        cas(1);
        cas(2);
        cas(3);
    } else if (Personnalite.value === "Det") {
        minPro.innerHTML = 15;
        minFp.innerHTML = 5;
        maxPre.innerHTML = 16;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        det.min = 15;
        if (det.value < 15) det.value = 15;
        cas(1);
        cas(2);
        cas(3);
        cas(4);
        cas(5);
    } else if (Personnalite.value === "Dev" || Personnalite.value === "TreLoy") {
        minAmb.innerHTML = 6;
        maxAmb.innerHTML = 7;
        midFid.innerHTML = 20;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        det.min = 6;
        if (det.value < 6) det.value = 6;
        deter(2);
        deter(5);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "Ef") {
        minFp.innerHTML = 5;
        midPre.innerHTML = 20;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        det.min = 15;
        if (det.value < 15) det.value = 15;
        deter(1);
        deter(3);
        deter(4);
        deter(5);
        cas(0);
        cas(1);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "Enj") {
        maxPro.innerHTML = 17;
        minFp.innerHTML = 15;
        minPre.innerHTML = 15;
        minTemp.innerHTML = 10;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(1);
        deter(2);
        deter(4);
        deter(6);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "Ent") {
        minPro.innerHTML = 11;
        maxPro.innerHTML = 17;
        maxFp.innerHTML = 14;
        minPre.innerHTML = 15;
        minTemp.innerHTML = 10;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(1);
        deter(4);
        deter(5);
        deter(6);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "Eq") {
        maxAmb.innerHTML = 14;
        maxPro.innerHTML = 14;
        maxFp.innerHTML = 14;
        maxFid.innerHTML = 14;
        det.max = 14;
        if (det.value > 14) det.value = 14;
        deter(1);
        deter(2);
        deter(3);
        deter(5);
        cas(0);
        cas(3);
        cas(5);
    } else if (Personnalite.value === "Fac") {
        maxAmb.innerHTML = 9;
        minPro.innerHTML = 5;
        maxFp.innerHTML = 17;
        det.max = 1;
        if (det.value > 1) det.value = 1;
        cas(0);
        cas(1);
        cas(3);
    } else if (Personnalite.value === "FaDe") {
        maxAmb.innerHTML = 9;
        minPro.innerHTML = 5;
        maxFp.innerHTML = 17;
        det.max = 5;
        if (det.value > 5) det.value = 5;
        det.min = 2;
        if (det.value < 2) det.value = 2;
        cas(0);
        cas(1);
        cas(3);
    } else if (Personnalite.value === "FaCo") {
        minPro.innerHTML = 5;
        maxFp.innerHTML = 17;
        minPre.innerHTML = 2;
        maxPre.innerHTML = 3;
        det.max = 9;
        if (det.value > 9) det.value = 9;
        deter(1);
        cas(1);
        cas(2);
        cas(3);
        cas(4);
        cas(0);
    } else if (Personnalite.value === "FP") {
        minPro.innerHTML = 5;
        minFp.innerHTML = 18;
        maxFp.innerHTML = 19;
        det.max = 9;
        if (det.value > 9) det.value = 9;
        cas(0);
        cas(1);
        cas(2);
        cas(3);
    } else if (Personnalite.value === "Fo") {
        maxPro.innerHTML = 10;
        maxTemp.innerHTML = 4;
    } else if (Personnalite.value === "Fri") {
        minPro.innerHTML = 5;
        maxFp.innerHTML = 17;
        midPre.innerHTML = 1;
        det.max = 9;
        if (det.value > 9) det.value = 9;
        deter(1);
        cas(0);
        cas(1);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "Ho") {
        minPro.innerHTML = 5;
        midFp.innerHTML = 20;
        det.max = 9;
        if (det.value > 9) det.value = 9;
        cas(0);
        cas(1);
        cas(2);
        cas(3);
    } else if (Personnalite.value === "In") {
        minTemp.innerHTML = 5;
        midPro.innerHTML = 1;
        det.max = 9;
        if (det.value > 9) det.value = 9;
    } else if (Personnalite.value === "Jo") {
        maxPro.innerHTML = 10;
        maxFp.innerHTML = 14;
        minPre.innerHTML = 15;
        minTemp.innerHTML = 10;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(1);
        deter(2);
        deter(4);
        deter(5);
        deter(6);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "Le") {
        minPro.innerHTML = 1;
    } else if (Personnalite.value === "Lene") {
        minPro.innerHTML = 1;
        det.min = 20;
        if (det.value < 20) det.value = 20;
    } else if (Personnalite.value === "LeCh") {
        minFp.innerHTML = 18;
        minTemp.innerHTML = 18;
    } else if (Personnalite.value === "Lo") {
        minAmb.innerHTML = 6;
        maxAmb.innerHTML = 7;
        minFid.innerHTML = 18;
        maxFid.innerHTML = 19;
        det.min = 6;
        if (det.value < 6) det.value = 6;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        deter(5);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "Me") {
        minAmb.innerHTML = 16;
        maxFid.innerHTML = 3;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "Modpro") {
        midPro.innerHTML = 20;
        minTemp.innerHTML = 10;
    } else if (Personnalite.value === "Mot") {
        minAmb.innerHTML = 12;
        det.min = 18;
        if (det.value < 18) det.value = 18;
    } else if (Personnalite.value === "Ob") {
        maxAmb.innerHTML = 11;
        det.min = 18;
        if (det.value < 18) det.value = 18;
    } else if (Personnalite.value === "Per") {
        minAmb.innerHTML = 14;
        minPro.innerHTML = 14;
        maxTemp.innerHTML = 9;
        det.min = 14;
        if (det.value < 14) det.value = 14;
    } else if (Personnalite.value === "Pro") {
        minPro.innerHTML = 18;
        minTemp.innerHTML = 10;
    } else if (Personnalite.value === "Rea") {
        minFp.innerHTML = 2;
        maxFp.innerHTML = 4;
        det.min = 11;
        if (det.value < 11) det.value = 11;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        cas(0);
        cas(1);
        cas(2);
        cas(3);
    } else if (Personnalite.value === "Res") {
        minFp.innerHTML = 5;
        minPre.innerHTML = 17;
        maxPre.innerHTML = 19;
        det.min = 15;
        if (det.value < 15) det.value = 15;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        cas(0);
        cas(1);
        cas(2);
        cas(3);
        cas(4);
    } else if (Personnalite.value === "SAmb") {
        maxAmb.innerHTML = 5;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        minFid.innerHTML = 11;
        deter(2);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "TreAmb") {
        midAmb.innerHTML = 20;
        maxFid.innerHTML = 9;
        minFid.innerHTML = 7;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "TreLoy") {
        minAmb.innerHTML = 6;
        maxAmb.innerHTML = 7;
        midFid.innerHTML = 20;
        det.min = 6;
        if (det.value < 6) det.value = 6;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        deter(5);
        cas(0);
        cas(1);
    } else if (Personnalite.value === "Vers") {
        minAmb.innerHTML = 16;
        minFid.innerHTML = 4;
        maxFid.innerHTML = 6;
        det.max = 17;
        if (det.value > 17) det.value = 17;
        deter(2);
        cas(0);
        cas(1);
    }

    // Handle each media type
    if (Media.value === "ApMe") {
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        med(1);
        med(2);
        med(3);
        med(4);
    } else if (Media.value === "ApMeCon") {
        midTemp.innerHTML = 7;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        med(1);
    } else if (Media.value === "ApMeImp") {
        if (minTemp.innerHTML < 15) minTemp.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
    } else if (Media.value === "ApMeIr") {
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
        if (minPro.innerHTML < 11) minPro.innerHTML = 11;
        med(1);
    } else if (Media.value === "ApMeIrCon") {
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        if (minPro.innerHTML < 11) minPro.innerHTML = 11;
        med(1);
    } else if (Media.value === "ApMeRe") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        if (maxPol.innerHTML > 5) maxPol.innerHTML = 5;
        if (maxPre.innerHTML > 14) maxPre.innerHTML = 14;
        if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
        med(2);
        med(3);
    } else if (Media.value === "ApMeVer") {
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
        med(1);
    } else if (Media.value === "ApMeVerCon") {
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        med(1);
    } else if (Media.value === "Con") {
        midTemp.innerHTML = 7;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        if (minPro.innerHTML < 13) minPro.innerHTML = 13;
        med(1);
    } else if (Media.value === "Equi") {
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        med(1);
        med(2);
        med(3);
        med(4);
    } else if (Media.value === "Eva") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPol.innerHTML < 6) minPol.innerHTML = 6;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        if (maxTemp.innerHTML > 15) maxTemp.innerHTML = 15;
        med(2);
        med(3);
    } else if (Media.value === "EvaCon") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        midTemp.innerHTML = 7;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
    } else if (Media.value === "EvaImp") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        midTemp.innerHTML = 15;
    } else if (Media.value === "EvaIr") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
    } else if (Media.value === "EvaIrCon") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
    } else if (Media.value === "EvaRes") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 5) maxPol.innerHTML = 5;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (maxTemp.innerHTML > 15) maxTemp.innerHTML = 15;
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        med(2);
        med(3);
    } else if (Media.value === "EvaVer") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
    } else if (Media.value === "EvaVerCon") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
    } else if (Media.value === "Imp") {
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (minTemp.innerHTML < 15) minTemp.innerHTML = 15;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
    } else if (Media.value === "Ir") {
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        if (minPro.innerHTML < 11) minPro.innerHTML = 11;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
        med(1);
    } else if (Media.value === "IrCon") {
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        if (minPro.innerHTML < 13) minPro.innerHTML = 13;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        med(1);
    } else if (Media.value === "Re") {
        if (minPro.innerHTML < 15) minPro.innerHTML = 15;
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        if (maxPol.innerHTML > 5) maxPol.innerHTML = 5;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        med(1);
        med(2);
    } else if (Media.value === "Spo") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (minTemp.innerHTML < 7) minTemp.innerHTML = 7;
        med(2);
        med(3);
    } else if (Media.value === "SpoCon") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        midTemp.innerHTML = 7;
        med(2);
        med(3);
    } else if (Media.value === "SpoImp") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (minPre.innerHTML < 15) minPre.innerHTML = 15;
        if (minTemp.innerHTML < 15) minTemp.innerHTML = 15;
    } else if (Media.value === "SpoIr") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
        if (minPro.innerHTML < 11) minPro.innerHTML = 11;
    } else if (Media.value === "SpoIrCon") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (maxTemp.innerHTML > 2) maxTemp.innerHTML = 2;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        if (minPro.innerHTML < 11) minPro.innerHTML = 11;
    } else if (Media.value === "SpoVer") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
    } else if (Media.value === "SpoVerCon") {
        if (minPol.innerHTML < 15) minPol.innerHTML = 15;
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
    } else if (Media.value === "Ver") {
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (minFp.innerHTML < 8) minFp.innerHTML = 8;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        med(1);
    } else if (Media.value === "VerCon") {
        if (maxTemp.innerHTML > 6) maxTemp.innerHTML = 6;
        if (minTemp.innerHTML < 3) minTemp.innerHTML = 3;
        if (maxFp.innerHTML > 7) maxFp.innerHTML = 7;
        if (maxPol.innerHTML > 14) maxPol.innerHTML = 14;
        if (minFid.innerHTML < 11) minFid.innerHTML = 11;
        if (minPro.innerHTML < 13) minPro.innerHTML = 13;
        med(1);
    }
}innerHTML = 16;

// Adjusts values based on selected personality and media
function ajustement() {
    // Personality-based adjustments
    switch (Personnalite.value) {
        case "Amb":
        case "Me":
        case "Vers":
        case "TreAmb":
        case "TreLoy":
        case "SAmb":
        case "Lo":
        case "Dev":
            cas(0);
            cas(1);
            break;
        case "AsAmb":
            cas(0);
            cas(2);
            cas(5);
            break;
        case "AsDe":
            cas(0);
            cas(2);
            cas(3);
            cas(4);
            cas(5);
            break;
        case "AsFP":
            cas(0);
            cas(5);
            break;
        case "AsLo":
            cas(0);
            cas(4);
            cas(5);
            break;
        case "AsPro":
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            cas(5);
            break;
        case "Del":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            break;
        case "Det":
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            cas(5);
            break;
        case "Ef":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            break;
        case "Enj":
        case "Ent":
        case "Jo":
            cas(2);
            cas(3);
            cas(4);
            break;
        case "Eq":
            cas(0);
            cas(3);
            cas(5);
            break;
        case "Fac":
        case "FaDe":
            cas(0);
            cas(1);
            cas(3);
            break;
        case "FaCo":
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            cas(0);
            break;
        case "FP":
        case "Ho":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            break;
        case "Fri":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            break;
        case "Mot":
        case "Ob":
            cas(1);
            break;
        case "Rea":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            break;
        case "Res":
            cas(0);
            cas(1);
            cas(2);
            cas(3);
            cas(4);
            break;
    }

    // Media-based adjustments
    switch (Media.value) {
        case "ApMe":
            med(1);
            med(2);
            med(3);
            med(4);
            med(5);
            break;
        case "ApMeCon":
        case "ApMeIr":
        case "ApMeIrCon":
        case "ApMeVer":
        case "ApMeVerCon":
            med(1);
            med(5);
            break;
        case "ApMeImp":
            med(5);
            break;
        case "Con":
        case "Ir":
        case "IrCon":
        case "Ver":
        case "VerCon":
            med(1);
            break;
        case "ApMeRe":
            med(2);
            med(3);
            med(5);
            break;
        case "Equi":
            med(1);
            med(2);
            med(3);
            med(4);
            break;
        case "Eva":
        case "EvaRes":
        case "Spo":
        case "SpoCon":
            med(2);
            med(3);
            break;
        case "Re":
            med(1);
            med(2);
            break;
    }

    // Call all special adjustment functions
    ambition();
    AssezAmb();
    mercenaire();
    tresambitieux();
    versatile();
    realist();
    indololent();
    forteperso();
    forteperso1();
    pasperfection();
    loyal();
    assezfp();
    citoyenmodele();
    decontracte();
    deloyal();
    determine();
    effronte();
    devoue();
    enjoue();
    facil();
    modelepro();
    motive();
    perfection();
    resistant();
    uniq();
    color();
}

// Resets the state of all project checkboxes to unchecked
function rstcheck() {
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
}

// Displays or hides project-related UI elements based on attribute values
function affichprojet() {
    // Get references to relevant DOM elements
    let projetInfo = document.getElementById("projetinfo");
    let attri = document.getElementById("attri");

    // Hide the project info section and adjust margin
    projetInfo.style.display = "none";
    attri.style.marginBottom = "5%";

    // Show or hide project sections based on attribute thresholds
    if (maxAmb.innerHTML >= 14) {
        // Show the main project section and the secondary project 1
        document.getElementById("projet").style.display = "block";
        document.getElementById("proj1bis").style.display = "";

        if (maxPre.innerHTML < 14) {
            // If maxPre is less than 14, hide project 1
            document.getElementById("proj1").style.display = "none";

            if (det.value < 14) {
                // If determination is less than 14, hide project 2
                document.getElementById("proj2").style.display = "none";
                // Hide or show project 3 based on maxFid
                if (maxFid.innerHTML < 14) {
                    document.getElementById("proj3").style.display = "none";
                } else {
                    document.getElementById("proj3").style.display = "";
                }
            } else if (det.value >= 14) {
                // If determination is at least 14, show project 2
                document.getElementById("proj2").style.display = "";
                // Hide or show project 3 based on maxFid
                if (maxFid.innerHTML < 14) {
                    document.getElementById("proj3").style.display = "none";
                } else {
                    document.getElementById("proj3").style.display = "";
                }
            }
        } else if (maxPre.innerHTML >= 14) {
            // If maxPre is at least 14, show project 1
            document.getElementById("proj1").style.display = "";

            if (det.value < 14) {
                // If determination is less than 14, hide project 2
                document.getElementById("proj2").style.display = "none";
                // Hide or show project 3 based on maxFid
                if (maxFid.innerHTML < 14) {
                    document.getElementById("proj3").style.display = "none";
                } else {
                    document.getElementById("proj3").style.display = "";
                }
            } else if (det.value >= 14) {
                // If determination is at least 14, show project 2
                document.getElementById("projet").style.display = "block";
                document.getElementById("proj2").style.display = "";
                // Hide or show project 3 based on maxFid
                if (maxFid.innerHTML < 14) {
                    document.getElementById("proj3").style.display = "none";
                } else {
                    document.getElementById("projet").style.display = "block";
                    document.getElementById("proj3").style.display = "";
                }
            }
        }
    } else if (maxAmb.innerHTML < 14) {
        // If maxAmb is less than 14, hide the main project section
        document.getElementById("projet").style.display = "none";
    }

    // Additional hiding logic based on minimum values
    if (minAmb.innerHTML >= 14) {
        document.getElementById("proj1bis").style.display = "none";
    }
    if (minAmb.innerHTML >= 14 && minPre.innerHTML >= 14) {
        document.getElementById("proj1").style.display = "none";
    }
    if (minAmb.innerHTML >= 14 && minFid.innerHTML >= 14) {
        document.getElementById("proj3").style.display = "none";
    }
    if (minAmb.innerHTML >= 14 && det.min >= 14) {
        document.getElementById("proj2").style.display = "none";
    }

    // Hide project section if all sub-projects are hidden, and adjust UI
    hide();

    // Correct display for special cases
    correctaffich();
}
// Corrects the display of project sections for special cases
function correctaffich() {
    // Get the current media value
    let mediaValue = Media.value;
    // Get the minimum values for Pro, Fp, and Pre
    let minProValue = Number(minPro.innerHTML);
    let minFpValue = Number(minFp.innerHTML);
    let minPreValue = Number(minPre.innerHTML);

    // If the media value starts with "ApM"
    if (mediaValue.substring(0, 3) === "ApM") {
        // If minPro is greater than 12, hide project 3
        if (minProValue > 12) {
            document.getElementById("proj3").style.display = "none";
        }
        // If minFp is greater than 11, hide project 3
        if (minFpValue > 11) {
            document.getElementById("proj3").style.display = "none";
        }
    }

    // If minPre is greater than 13, hide project 1bis
    if (minPreValue > 13) {
        document.getElementById("proj1bis").style.display = "none";
    }
}

// Hides the main project section if all sub-projects are hidden,
// and adjusts the display of project info and attribute section accordingly
function hide() {
    // Get references to project-related DOM elements
    const proj1 = document.getElementById("proj1");
    const proj1bis = document.getElementById("proj1bis");
    const proj2 = document.getElementById("proj2");
    const proj3 = document.getElementById("proj3");
    const projet = document.getElementById("projet");
    const projetInfo = document.getElementById("projetinfo");
    const attri = document.getElementById("attri");

    // If all sub-projects are hidden, hide the main project section
    if (
        proj1.style.display === "none" &&
        proj1bis.style.display === "none" &&
        proj2.style.display === "none" &&
        proj3.style.display === "none"
    ) {
        projet.style.display = "none";
    }

    // If the main project section is hidden, show the project info section
    // and reset the margin of the attribute section
    if (projet.style.display === "none") {
        projetInfo.style.display = "";
        attri.style.marginBottom = "0%";
    }
}
// Adjusts attribute values for the "Res" (Resistant) personality based on the selected media type
function resistant() {
    if (Personnalite.value === "Res") {
        // If media is "EvaImp" and maxPro > 17, set maxPro to 17
        if (Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
            maxPro.innerHTML = 17;
        }
        // If media is "EvaIrCon" and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIrCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaCon" and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaVerCon" and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaVerCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaVer" and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaVer" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaIr" and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIr" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
    }
}
// Adjusts attribute values for the "Rea" (Realist) and "Del" (Disloyal) personalities based on the selected media type
function realist() {
    // For "Rea" personality
    if (Personnalite.value === "Rea") {
        // If media is "EvaImp" and maxPro > 17, set maxPro to 17
        if (Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
            maxPro.innerHTML = 17;
        }
        // If media is "Imp" and minPro < 13, set minPro to 13
        else if (Media.value === "Imp" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
        // If media is "EvaIrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIrCon" && det.value >= 14 && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaCon" && det.value >= 14 && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "EvaVerCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaVerCon" && det.value >= 14 && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
        // If media is "Equi" and minPro < 13, set minPro to 13
        else if (Media.value === "Equi" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
    }

    // For "Del" personality
    if (Personnalite.value === "Del") {
        // If media is "Imp" and minPro < 13, set minPro to 13
        if (Media.value === "Imp" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
        // If media is "Ir" and minPro < 13, set minPro to 13
        else if (Media.value === "Ir" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
        // If media is "Ver" and minPro < 13, set minPro to 13
        else if (Media.value === "Ver" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
        // If media is "Equi" and minPro < 13, set minPro to 13
        else if (Media.value === "Equi" && Number(minPro.innerHTML) < 13) {
            minPro.innerHTML = 13;
        }
    }
}
// Adjusts attribute values for the "Per" (Perfectionist) personality based on the selected media type
function perfection() {
    if (Personnalite.value === "Per") {
        // If the selected media type is one of the following, ensure maxFid does not exceed 10
        if (
            Media.value === "ApMe" ||
            Media.value === "ApMeCon" ||
            Media.value === "ApMeIr" ||
            Media.value === "ApMeIrCon" ||
            Media.value === "ApMeRe" ||
            Media.value === "ApMeVer" ||
            Media.value === "ApMeVerCon"
        ) {
            if (Number(maxFid.innerHTML) > 10) {
                maxFid.innerHTML = 10;
            }
        }
    }
}
// Adjusts attribute values for "Mot" (Motivated) and "Ob" (Obedient) personalities based on the selected media type
function motive() {
    if (Personnalite.value === "Mot") {
        // For "Mot" personality, adjust maxAmb or maxPro based on media
        if (Media.value === "EvaCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIr" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIrCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
            maxPro.innerHTML = 17;
        } else if (Media.value === "EvaVer" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVerCon" && Number(maxAmb.innerHTML) > 13) {
            maxAmb.innerHTML = 13;
        }
    }
    // For "Ob" personality, adjust maxPro if media is "EvaImp"
    if (Personnalite.value === "Ob" && Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
        maxPro.innerHTML = 17;
    }
}

// Adjusts attribute values for "Modpro" (Model Professional) and "Pro" (Professional) personalities based on the selected media type
function modelepro() {
    if (Personnalite.value === "Modpro") {
        if (Media.value === "ApMe" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeImp") {
            if (Number(maxFid.innerHTML) > 10) maxFid.innerHTML = 10;
            if (Number(minTemp.innerHTML) < 16) minTemp.innerHTML = 16;
        } else if (Media.value === "Imp" && Number(minTemp.innerHTML) < 16) {
            minTemp.innerHTML = 16;
        } else if (Media.value === "Equi") {
            if (Number(maxPre.innerHTML) > 14) maxPre.innerHTML = 14;
            if (Number(minPol.innerHTML) < 6) minPol.innerHTML = 6;
        }
    }
    if (Personnalite.value === "Pro") {
        if (Media.value === "ApMe" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeImp") {
            if (Number(maxFid.innerHTML) > 10) maxFid.innerHTML = 10;
            if (Number(minTemp.innerHTML) < 16) minTemp.innerHTML = 16;
        } else if (Media.value === "Imp" && Number(minTemp.innerHTML) < 16) {
            minTemp.innerHTML = 16;
        } else if (Media.value === "Equi") {
            if (Number(maxPre.innerHTML) > 14) maxPre.innerHTML = 14;
            if (Number(minPol.innerHTML) < 6) minPol.innerHTML = 6;
        }
    }
}

// Adjusts attribute values for "Fac" (Easygoing), "FaDe" (Easygoing/Disloyal), "FP" (Fair Play), and "Ho" (Honest) personalities based on the selected media type
function facil() {
    if (Personnalite.value === "Fac" && Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
        maxPro.innerHTML = 17;
    }
    if (Personnalite.value === "FaDe" && Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
        maxPro.innerHTML = 17;
    }
    if (Personnalite.value === "FP") {
        if (Media.value === "ApMe" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
            maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeImp" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeIr" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeVer" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        }
    }
    if (Personnalite.value === "Ho") {
        if (Media.value === "ApMe" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "EvaImp" && Number(maxPro.innerHTML) > 17) {
            maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeImp" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeIr" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeVer" && Number(maxFid.innerHTML) > 10) {
            maxFid.innerHTML = 10;
        }
    }
}
// Adjusts attribute values for the "Enj" (Enjoué) personality based on the selected media type
function enjoue() {
    if (Personnalite.value === "Enj") {
        if (Media.value === "ApMe") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeImp") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
        }
    }
}

// Adjusts attribute values for the "Dev" (Devoué) and "SAmb" (Suffisamment Ambitieux) personalities based on the selected media type
function devoue() {
    if (Personnalite.value === "Dev") {
        if (Media.value === "ApMe") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeImp") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeVer") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
    if (Personnalite.value === "SAmb") {
        if (Media.value === "ApMe") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeImp") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeVer") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
}

// Adjusts attribute values for the "Ef" (Effronté) personality based on the selected media type
function effronte() {
    if (Personnalite.value === "Ef") {
        if (Media.value === "ApMeVer") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "ApMeIr") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "ApMeIrCon") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "ApMeVerCon") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "Con") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "Ir") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "IrCon") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "Ver") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "VerCon") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        } else if (Media.value === "Equi") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
            if (maxTemp.innerHTML > 14) maxTemp.innerHTML = 14;
        } else if (Media.value === "EvaCon") {
            if (maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIr") {
            if (maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVer") {
            if (maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVerCon") {
            if (maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIrCon") {
            if (maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMeCon") {
            if (maxPro.innerHTML > 14) maxPro.innerHTML = 14;
        }
    }
}

// Adjusts attribute values for the "Det" (Déterminé) personality based on the selected media type
function determine() {
    if (Personnalite.value === "Det") {
        if (Media.value === "Con") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "SpoIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "SpoVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "SpoCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "SpoIr") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "SpoVer") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "IrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "VerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMe") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
        } else if (Media.value === "ApMeVer") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMeIr") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMeVerCon") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMeIrCon") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "ApMeCon") {
            if (maxFid.innerHTML > 10) maxFid.innerHTML = 10;
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "Ir") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "Eva") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaRes") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIr") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVer") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "Ver") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
    }
}

// Adjusts attribute values for the "Dec" (Décontracté) personality based on the selected media type
function decontracte() {
    if (Personnalite.value === "Dec") {
        if (Media.value === "Equi") {
            if (minFp.innerHTML < 12) minFp.innerHTML = 12;
        } else if (Media.value === "Ver") {
            if (minFp.innerHTML < 12) minFp.innerHTML = 12;
        }
    }
}

// Adjusts attribute values for the "Del" (Déloyal) personality based on the selected media type
function deloyal() {
    if (Personnalite.value === "Del") {
        if (Media.value === "Equi") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
            if (minPro.innerHTML < 13) minPro.innerHTML = 13;
        } else if (Media.value === "ApMeRe") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
        } else if (Media.value === "EvaRes") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
        } else if (Media.value === "EvaCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        } else if (Media.value === "Eva") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
        } else if (Media.value === "Spo") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "Re") {
            if (minTemp.innerHTML < 8) minTemp.innerHTML = 8;
        }
    }
}

// Adjusts attribute values for the "Amb" (Ambitieux) personality based on the selected media type
function ambition() {
    if (Personnalite.value === "Amb") {
        if (Media.value === "Eva") {
            if (det.value >= 14) {
                if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
                if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
            }
        } else if (Media.value === "ApMeRe") {
            if (det.value >= 14) {
                if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
                if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
            }
        } else if (Media.value === "ApMeIr") {
            if (det.value >= 14) {
                if (minPro.innerHTML < 11) minPro.innerHTML = 11;
                if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
            }
        } else if (Media.value === "ApMeIrCon") {
            if (det.value >= 14) {
                if (minPro.innerHTML < 11) minPro.innerHTML = 11;
                if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
            }
        } else if (Media.value === "SpoIr") {
            if (det.value >= 14) {
                if (minPro.innerHTML < 11) minPro.innerHTML = 11;
                if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
            }
        } else if (Media.value === "SpoIrCon") {
            if (det.value >= 14) {
                if (minPro.innerHTML < 11) minPro.innerHTML = 11;
                if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
            }
        } else if (
            Media.value === "ApMeVerCon" ||
            Media.value === "ApMeVer" ||
            Media.value === "ApMeCon" ||
            Media.value === "SpoVerCon" ||
            Media.value === "SpoVer" ||
            Media.value === "SpoCon"
        ) {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaRes") {
            if (det.value >= 14) {
                if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
                if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
            }
        } else if (Media.value === "EvaIr") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVer") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        }
    }
}
// Adjusts attribute values for the "Me" (Mercenary) personality based on the selected media type
function mercenaire() {
    if (Personnalite.value === "Me") {
        if (Media.value === "Eva" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeRe" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "ApMeIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (
            (Media.value === "ApMeVerCon" ||
            Media.value === "ApMeVer" ||
            Media.value === "ApMeCon" ||
            Media.value === "SpoVerCon" ||
            Media.value === "SpoVer" ||
            Media.value === "SpoCon") &&
            det.value >= 14
        ) {
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaRes" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaIr") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVer") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        }
    }
}

// Adjusts attribute values for the "TreAmb" (Very Ambitious) personality based on the selected media type
function tresambitieux() {
    if (Personnalite.value === "TreAmb") {
        if (Media.value === "Eva" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeRe" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "ApMeIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (
            (Media.value === "ApMeVerCon" ||
            Media.value === "ApMeVer" ||
            Media.value === "ApMeCon" ||
            Media.value === "SpoVerCon" ||
            Media.value === "SpoVer" ||
            Media.value === "SpoCon") &&
            det.value >= 14
        ) {
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaRes" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaIr") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVer") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        }
    }
}

// Adjusts attribute values for the "Vers" (Versatile) personality based on the selected media type
function versatile() {
    if (Personnalite.value === "Vers") {
        if (Media.value === "Eva" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeRe" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "ApMeIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIr" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "SpoIrCon" && det.value >= 14) {
            if (minPro.innerHTML < 11) minPro.innerHTML = 11;
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (
            (Media.value === "ApMeVerCon" ||
            Media.value === "ApMeVer" ||
            Media.value === "ApMeCon" ||
            Media.value === "SpoVerCon" ||
            Media.value === "SpoVer" ||
            Media.value === "SpoCon") &&
            det.value >= 14
        ) {
            if (maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        } else if (Media.value === "EvaImp") {
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaRes" && det.value >= 14) {
            if (minTemp.innerHTML < 10) minTemp.innerHTML = 10;
            if (maxPro.innerHTML > 17) maxPro.innerHTML = 17;
        } else if (Media.value === "EvaIr") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaIrCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVer") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaVerCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        } else if (Media.value === "EvaCon") {
            if (det.value > 13) det.value = 13;
            det.max = 13;
        }
    }
}
// Adjusts attribute values for the "AsAmb" (Assez Ambitieux) personality based on the selected media type
function AssezAmb() {
    if (Personnalite.value === "AsAmb") {
        // If media is "Con", "IrCon", or "VerCon" and determination >= 14, set midPro to 13
        if (
            Media.value === "Con" ||
            Media.value === "IrCon" ||
            Media.value === "VerCon"
        ) {
            if (det.value >= 14) midPro.innerHTML = 13;
        }
        // If media is one of the following and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (
            Media.value === "ApMeVer" ||
            Media.value === "ApMeIr" ||
            Media.value === "Ir" ||
            Media.value === "Ver" ||
            Media.value === "SpoIr" ||
            Media.value === "SpoVer"
        ) {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "ApMeVerCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "ApMeVerCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "ApMeIrCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "ApMeIrCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "ApMeCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "ApMeCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "SpoIrCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "SpoIrCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "SpoVerCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "SpoVerCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
        // If media is "SpoCon" and determination >= 14 and maxPro > 13, set maxPro to 13
        else if (Media.value === "SpoCon") {
            if (det.value >= 14 && maxPro.innerHTML > 13) maxPro.innerHTML = 13;
        }
    }
}

// Adjusts attribute values for the "AsPro" (Assez Perfectionniste) personality based on the selected media type
function pasperfection() {
    if (Personnalite.value === "AsPro") {
        // If media is "Con" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        if (Media.value === "Con") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "SpoIrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "SpoIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "SpoVerCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "SpoVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "SpoCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "SpoCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "SpoIr" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "SpoIr") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "SpoVer" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "SpoVer") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "IrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "IrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "VerCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "VerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "ApMeVer" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "ApMeVer") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "ApMeIr" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "ApMeIr") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "ApMeVerCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "ApMeVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "ApMeIrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "ApMeIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "ApMeCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "ApMeCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "Ir" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "Ir") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "Eva" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "Eva") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaRes" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaRes") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaIr" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIr") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaIrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaVerCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaVerCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaIrCon" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaIrCon") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "EvaVer" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "EvaVer") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
        // If media is "Ver" and determination >= 14 and maxAmb > 13, set maxAmb to 13
        else if (Media.value === "Ver") {
            if (det.value >= 14 && maxAmb.innerHTML > 13) maxAmb.innerHTML = 13;
        }
    }
}

// Adjusts maxFid for "AsFP" (Assez Fair-Play) personality and certain media types
function assezfp() {
    if (Personnalite.value === "AsFP") {
        // If media is "ApMe" and maxFid > 10, set maxFid to 10
        if (Media.value === "ApMe" && maxFid.innerHTML > 10) {
            maxFid.innerHTML = 10;
        }
        // If media is "ApMeIr" and maxFid > 10, set maxFid to 10
        else if (Media.value === "ApMeIr" && maxFid.innerHTML > 10) {
            maxFid.innerHTML = 10;
        }
        // If media is "ApMeVer" and maxFid > 10, set maxFid to 10
        else if (Media.value === "ApMeVer" && maxFid.innerHTML > 10) {
            maxFid.innerHTML = 10;
        }
    }
}
// Adjusts attribute values for "AsLo", "Lo", and "TreLoy" (Loyal) personalities based on the selected media type
function loyal() {
    // For "AsLo" personality
    if (Personnalite.value === "AsLo") {
        if (Media.value === "ApMe" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVer" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
    // For "Lo" personality
    if (Personnalite.value === "Lo") {
        if (Media.value === "ApMe" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVer" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeImp" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "EvaImp" && maxPro.innerHTML > 17) {
            maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
    // For "TreLoy" personality
    if (Personnalite.value === "TreLoy") {
        if (Media.value === "ApMe" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVer" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeImp" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "EvaImp" && maxPro.innerHTML > 17) {
            maxPro.innerHTML = 17;
        } else if (Media.value === "ApMeCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon" && maxPro.innerHTML > 12) {
            maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
}

// Adjusts minTemp for "CiMo" (Model Citizen) personality and certain media types
function citoyenmodele() {
    if (Personnalite.value === "CiMo") {
        if (Media.value === "Imp" && minTemp.innerHTML < 16) {
            minTemp.innerHTML = 16;
        } else if (Media.value === "SpoImp" && minTemp.innerHTML < 16) {
            minTemp.innerHTML = 16;
        }
    }
}

// Adjusts minFp for "In" (Indolent) and "Dec" (Relaxed) personalities and certain media types
function indololent() {
    // For "In" personality
    if (Personnalite.value === "In") {
        if (Media.value === "Imp" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Ir" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Ver" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Equi" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        }
    }
    // For "Dec" personality
    if (Personnalite.value === "Dec") {
        if (Media.value === "Imp" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Ir" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Ver" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Eq" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        }
    }
}
// Sets minimum professionalism to 1 and resets colors if personality is "Fo" (forte personnalité)
function forteperso() {
    if (Personnalite.value === "Fo") {
        minPro.innerHTML = 1;
        rstColor();
    }
}

// Adjusts minimum fair-play for "Fo" personality and certain media types
function forteperso1() {
    if (Personnalite.value === "Fo") {
        if (Media.value === "Ir" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        } else if (Media.value === "Ver" && minFp.innerHTML < 12) {
            minFp.innerHTML = 12;
        }
    }
}

/**
 * Adjusts attribute values based on determination and the provided case number.
 * @param {number} e - The case number to determine which adjustment to apply.
 */
function deter(e) {
    // Case 1: If determination is 5 or less and minAmbition is less than 10, set minAmbition to 10
    if (e === 1 && det.value <= 5 && minAmb.innerHTML < 10) {
        minAmb.innerHTML = 10;
    }
    // Case 2: If determination is 9 or less and minProfessionalism is less than 5, set minProfessionalism to 5
    else if (e === 2 && det.value <= 9 && minPro.innerHTML < 5) {
        minPro.innerHTML = 5;
    }
    // Case 3: If determination is 9 or less and minPressure is less than 4, set minPressure to 4
    else if (e === 3 && det.value <= 9 && minPre.innerHTML < 4) {
        minPre.innerHTML = 4;
    }
    // Case 4: If determination is 9 or less and maxFairPlay is more than 17, set maxFairPlay to 17
    else if (e === 4 && det.value <= 9 && maxFp.innerHTML > 17) {
        maxFp.innerHTML = 17;
    }
    // Case 5: If determination is 11 or more and minFairPlay is less than 5, set minFairPlay to 5
    else if (e === 5 && det.value >= 11 && minFp.innerHTML < 5) {
        minFp.innerHTML = 5;
    }
    // Case 6: If determination is 15 or more, set minPressure to 15 and maxPressure to 16
    else if (e === 6 && det.value >= 15) {
        minPre.innerHTML = 15;
        maxPre.innerHTML = 16;
    }
}
/**
 * Adjusts attribute values based on the provided case number.
 * @param {number} e - The case number to determine which adjustment to apply.
 */
function cas(e) {
    // Case 0: If maxTemp < 5 and minPro < 11, set minPro to 11.
    //         If maxPro < 11 and minTemp < 5, set minTemp to 5.
    if (e === 0) {
        if (maxTemp.innerHTML < 5 && minPro.innerHTML < 11) {
            minPro.innerHTML = 11;
        }
        if (maxPro.innerHTML < 11 && minTemp.innerHTML < 5) {
            minTemp.innerHTML = 5;
        }
    }
    // Case 1: If minPro > 17 and maxTemp > 9, set maxTemp to 9.
    //         If minTemp > 9 and maxPro > 17, set maxPro to 17.
    else if (e === 1) {
        if (minPro.innerHTML > 17 && maxTemp.innerHTML > 9) {
            maxTemp.innerHTML = 9;
        }
        if (minTemp.innerHTML > 9 && maxPro.innerHTML > 17) {
            maxPro.innerHTML = 17;
        }
    }
    // Case 2: If minAmb > 15 and minFid < 10, set minFid to 10.
    //         If maxFid < 10 and maxAmb > 15, set maxAmb to 15.
    else if (e === 2) {
        if (minAmb.innerHTML > 15 && minFid.innerHTML < 10) {
            minFid.innerHTML = 10;
        }
        if (maxFid.innerHTML < 10 && maxAmb.innerHTML > 15) {
            maxAmb.innerHTML = 15;
        }
    }
    // Case 3: If maxAmb < 6 and maxFid > 10, set maxFid to 10.
    //         If minFid > 10 and minAmb < 6, set minAmb to 6.
    else if (e === 3) {
        if (maxAmb.innerHTML < 6 && maxFid.innerHTML > 10) {
            maxFid.innerHTML = 10;
        }
        if (minFid.innerHTML > 10 && minAmb.innerHTML < 6) {
            minAmb.innerHTML = 6;
        }
    }
    // Case 4: If maxAmb < 8 and maxFid > 17, set maxFid to 17.
    //         If minFid > 17 and minAmb < 8, set minAmb to 8.
    else if (e === 4) {
        if (maxAmb.innerHTML < 8 && maxFid.innerHTML > 17) {
            maxFid.innerHTML = 17;
        }
        if (minFid.innerHTML > 17 && minAmb.innerHTML < 8) {
            minAmb.innerHTML = 8;
        }
    }
    // Case 5: If minTemp > 9 and maxPre > 14, set maxPre to 14.
    //         If minPre > 14 and maxTemp > 9, set maxTemp to 9.
    else if (e === 5) {
        if (minTemp.innerHTML > 9 && maxPre.innerHTML > 14) {
            maxPre.innerHTML = 14;
        }
        if (minPre.innerHTML > 14 && maxTemp.innerHTML > 9) {
            maxTemp.innerHTML = 9;
        }
    }
}

/**
 * Adjusts attribute values based on the provided media case number.
 * @param {number} e - The case number to determine which adjustment to apply.
 */
function med(e) {
    // Case 1: If minPre > 14 and maxPro > 14, set maxPro to 14.
    //         If minPro > 14 and maxPre > 14, set maxPre to 14.
    if (e === 1) {
        if (minPre.innerHTML > 14 && maxPro.innerHTML > 14) {
            maxPro.innerHTML = 14;
        }
        if (minPro.innerHTML > 14 && maxPre.innerHTML > 14) {
            maxPre.innerHTML = 14;
        }
    }
    // Case 2: If maxTemp < 8 and minFp < 8, set minFp to 8.
    //         If maxFp < 8 and minTemp < 8, set minTemp to 8.
    else if (e === 2) {
        if (maxTemp.innerHTML < 8 && minFp.innerHTML < 8) {
            minFp.innerHTML = 8;
        }
        if (maxFp.innerHTML < 8 && minTemp.innerHTML < 8) {
            minTemp.innerHTML = 8;
        }
    }
    // Case 3: If minTemp > 14 and maxPre > 14, set maxPre to 14.
    //         If minPre > 14 and maxTemp > 14, set maxTemp to 14.
    else if (e === 3) {
        if (minTemp.innerHTML > 14 && maxPre.innerHTML > 14) {
            maxPre.innerHTML = 14;
        }
        if (minPre.innerHTML > 14 && maxTemp.innerHTML > 14) {
            maxTemp.innerHTML = 14;
        }
    }
    // Case 4: If minPol > 14 and maxPro > 14, set maxPro to 14.
    //         If maxPol < 6 and maxPro > 14, set maxPro to 14.
    //         If minPro > 14 and minPol < 6 and maxPol > 14, set minPol to 6 and maxPol to 14.
    else if (e === 4) {
        if (minPol.innerHTML > 14 && maxPro.innerHTML > 14) {
            maxPro.innerHTML = 14;
        }
        if (maxPol.innerHTML < 6 && maxPro.innerHTML > 14) {
            maxPro.innerHTML = 14;
        }
        if (minPro.innerHTML > 14 && minPol.innerHTML < 6 && maxPol.innerHTML > 14) {
            minPol.innerHTML = 6;
            maxPol.innerHTML = 14;
        }
    }
    // Case 5: If minFid > 10, and maxFp > 11, set maxFp to 11, and if maxPro > 12, set maxPro to 12.
    //         Else if minFp > 11 and minPro > 12 and maxFid > 10, set maxFid to 10.
    else if (e === 5) {
        if (minFid.innerHTML > 10) {
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
        } else if (minFp.innerHTML > 11 && minPro.innerHTML > 12 && maxFid.innerHTML > 10) {
            maxFid.innerHTML = 10;
        }
    }
}

/**
 * Handles project checkboxes and adjusts attribute values accordingly.
 * Applies the correct combination of note and ajustement functions,
 * then enforces minimum values for Ambition, Pressure, Determination, and Fidelity.
 */
function proj() {
    // Single checkbox cases
    if (checkbox1.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
    }
    if (checkbox1b.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (maxPre.innerHTML > 13) maxPre.innerHTML = 13;
    }
    if (checkbox2.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
    }
    if (checkbox3.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }

    // Two-checkbox combinations
    if (checkbox1.checked && checkbox1b.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
    }
    if (checkbox1.checked && checkbox2.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
    }
    if (checkbox1b.checked && checkbox2.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (maxPre.innerHTML > 13) maxPre.innerHTML = 13;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
    }
    if (checkbox1.checked && checkbox3.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }
    if (checkbox1b.checked && checkbox3.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (maxPre.innerHTML > 13) maxPre.innerHTML = 13;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }
    if (checkbox2.checked && checkbox3.checked) {
        note();
        ajustement();
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }

    // Three-checkbox combinations
    if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }
    if (checkbox1b.checked && checkbox2.checked && checkbox3.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (maxPre.innerHTML > 13) maxPre.innerHTML = 13;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }
    if (checkbox1.checked && checkbox2.checked && checkbox1b.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
    }
    if (checkbox1.checked && checkbox3.checked && checkbox1b.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }

    // All four checkboxes
    if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox1b.checked) {
        note();
        ajustement();
        if (minAmb.innerHTML < 14) minAmb.innerHTML = 14;
        if (minPre.innerHTML < 14) minPre.innerHTML = 14;
        if (det.min < 14) det.min = 14;
        if (det.value < 14) det.value = 14;
        if (minFid.innerHTML < 14) minFid.innerHTML = 14;
    }

    // If no checkboxes are checked, just call note and ajustement
    if (
        !checkbox2.checked &&
        !checkbox1.checked &&
        !checkbox3.checked &&
        !checkbox1b.checked
    ) {
        note();
        ajustement();
    }

    // Apply media corrections, uniqueness, and color adjustments
    correctmedia();
    uniq();
    color();
}

/**
 * Corrects attribute values for certain media types when minFid >= 11.
 * If the current media is one of the "ApMe" types, ensures maxPro <= 12 and maxFp <= 11.
 */
function correctmedia() {
    if (minFid.innerHTML >= 11) {
        if (Media.value === "ApMe") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIr") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVer") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeImp") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeIrCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeRe") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        } else if (Media.value === "ApMeVerCon") {
            if (maxPro.innerHTML > 12) maxPro.innerHTML = 12;
            if (maxFp.innerHTML > 11) maxFp.innerHTML = 11;
        }
    }
}
// Resets all attribute values and colors to their default state
function rst() {
    // Reset all min, mid, and max values for each attribute
    minPro.innerHTML = 1;
    midPro.innerHTML = "-";
    maxPro.innerHTML = 20;

    minPre.innerHTML = 1;
    midPre.innerHTML = "-";
    maxPre.innerHTML = 20;

    minTemp.innerHTML = 1;
    midTemp.innerHTML = "-";
    maxTemp.innerHTML = 20;

    minAmb.innerHTML = 1;
    midAmb.innerHTML = "-";
    maxAmb.innerHTML = 20;

    minFid.innerHTML = 1;
    midFid.innerHTML = "-";
    maxFid.innerHTML = 20;

    minFp.innerHTML = 1;
    midFp.innerHTML = "-";
    maxFp.innerHTML = 20;

    minPol.innerHTML = 1;
    midPol.innerHTML = "-";
    maxPol.innerHTML = 20;

    // Reset colors and determination input
    rstColor();
    rstdeter();
}

// Resets the color of all min, mid, and max attribute table cells to white
function rstColor() {
    // Set color for all "min" and "mid" cells
    var cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id.substring(0, 2) === "mi") {
            cells[i].style.color = "#ffffff";
        }
    }
    // Set color for all "max" cells
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id.substring(0, 3) === "max") {
            cells[i].style.color = "#ffffff";
        }
    }
    // Reset table cell styles
    rstStyle();
}

// Resets the style of all "mid" attribute table cells to default
function rstStyle() {
    var cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id.substring(0, 3) === "mid") {
            var val = cells[i].id.substring(3);
            var minId = "min" + val;
            var maxId = "max" + val;
            var midId = "mid" + val;
            document.getElementById(midId).colSpan = "1";
            document.getElementById(minId).style.display = "";
            document.getElementById(maxId).style.display = "";
        }
    }
}
/**
 * Adjusts the mid value of each attribute if min and max are equal and not empty.
 * For each "mid" cell, if min == max and min is not empty, set mid to min.
 */
function adjust() {
    var cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        // Only process cells with id starting with "mid"
        if (cells[i].id.substring(0, 3) === "mid") {
            var val = cells[i].id.substring(3);
            var minId = "min" + val;
            var maxId = "max" + val;
            var midId = "mid" + val;
            var minCell = document.getElementById(minId);
            var maxCell = document.getElementById(maxId);
            var midCell = document.getElementById(midId);
            // If min and max are not empty and equal, set mid to min
            if (
                minCell.innerHTML !== "" &&
                minCell.innerHTML === maxCell.innerHTML
            ) {
                midCell.innerHTML = minCell.innerHTML;
            }
        }
    }
}

/**
 * Ensures uniqueness in the attribute table.
 * For each "mid" cell, if its value is not "-", clear the corresponding min and max cells.
 * Calls adjust() first to synchronize mid values.
 */
function uniq() {
    adjust();
    var cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id.substring(0, 3) === "mid" && cells[i].innerHTML !== "-") {
            var val = cells[i].id.substring(3);
            var minId = "min" + val;
            var maxId = "max" + val;
            document.getElementById(minId).innerHTML = "";
            document.getElementById(maxId).innerHTML = "";
        }
    }
}

/**
 * Colors the attribute table cells based on their values.
 * - For min/mid/max cells with value >= 10 (except "Pol"), set color to green.
 * - For "Pol" cells with value >= 10, set color to red.
 * - For min/mid/max cells with value < 10 (except "Pol"), set color to red.
 * - For "Pol" cells with value < 10, set color to green.
 */
function color() {
    var cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        // Color cells with id starting with "min" and value >= 10
        if (cells[i].id.substring(0, 2) === "mi" && Number(cells[i].innerHTML) >= 10) {
            var val = cells[i].id.substring(3);
            var minId = "min" + val;
            var maxId = "max" + val;
            var midId = "mid" + val;
            if (val !== "Pol") {
                document.getElementById(minId).style.color = "#26d274"; // green
                document.getElementById(midId).style.color = "#26d274";
                document.getElementById(maxId).style.color = "#26d274";
            } else {
                document.getElementById(minId).style.color = "#b62828"; // red
                document.getElementById(midId).style.color = "#b62828";
                document.getElementById(maxId).style.color = "#b62828";
            }
        }
        // Color mid or max cells with value < 10
        if (
            (cells[i].id.substring(0, 3) === "mid" && Number(cells[i].innerHTML) < 10) ||
            (cells[i].id.substring(0, 3) === "max" && Number(cells[i].innerHTML) < 10 && cells[i].innerHTML !== "")
        ) {
            var val = cells[i].id.substring(3);
            var minId = "min" + val;
            var maxId = "max" + val;
            var midId = "mid" + val;
            if (val !== "Pol") {
                document.getElementById(minId).style.color = "#b62828"; // red
                document.getElementById(midId).style.color = "#b62828";
                document.getElementById(maxId).style.color = "#b62828";
            } else {
                document.getElementById(minId).style.color = "#26d274"; // green
                document.getElementById(midId).style.color = "#26d274";
                document.getElementById(maxId).style.color = "#26d274";
            }
        }
    }
}
/**
 * Affiche uniquement la section correspondant à l'attribut passé en paramètre,
 * et masque toutes les autres sections d'attributs et la table des projets.
 * @param {string} e - L'ID de la section à afficher.
 */
function afficher(e) {
    // Masquer toutes les sections d'attributs et la table des projets
    document.getElementById("Professionnalisme").style.display = "none";
    document.getElementById("Pression").style.display = "none";
    document.getElementById("Tempérament").style.display = "none";
    document.getElementById("Ambition").style.display = "none";
    document.getElementById("Fidélité").style.display = "none";
    document.getElementById("Fair-play").style.display = "none";
    document.getElementById("Polémique").style.display = "none";
    document.getElementById("projetable").style.display = "none";
    // Afficher uniquement la section demandée
    document.getElementById(e).style.display = "block";
}

/**
 * Réinitialise toutes les étoiles d'évaluation des compétences à zéro étoile.
 */
function rststar() {
    Garret.src = zero;
    Gprise.src = zero;
    Deftec.src = zero;
    Deftac.src = zero;
    Attac.src = zero;
    Attec.src = zero;
    Postac.src = zero;
    Postec.src = zero;
    Puis.src = zero;
    Viva.src = zero;
    CouPA.src = zero;
}

/**
 * Évalue les compétences du staff à partir des valeurs des champs,
 * calcule les scores pour chaque poste, et met à jour les images d'étoiles correspondantes.
 */
function evalstaf() {
    // Réinitialise les étoiles
    rststar();

    // Calculs intermédiaires
    let DDM = (Number(CaM.value) + Number(Det.value) + Number(Ndd.value)) * 2;
    let AL = Number(AGB.value) * 9 + DDM;
    let PDB = Number(PGB.value) * 6 + Number(RGB.value) * 3 + DDM;
    let DTa = Number(Def.value) * 6 + Number(Tac.value) * 3 + DDM;
    let DTe = Number(Def.value) * 6 + Number(Tec.value) * 3 + DDM;
    let JoTa = Number(Off.value) * 6 + Number(Tac.value) * 3 + DDM;
    let JoTe = Number(Off.value) * 6 + Number(Tec.value) * 3 + DDM;
    let PTa = Number(Men.value) * 3 + Number(Tac.value) * 6 + DDM;
    let PTe = Number(Men.value) * 3 + Number(Tec.value) * 6 + DDM;
    let Phy = Number(CP.value) * 9 + DDM;

    // Attribution des étoiles pour chaque poste
    // Gardien arrêt
    if (AL >= 270) Garret.src = cinq;
    else if (AL >= 240) Garret.src = quatredemi;
    else if (AL >= 210) Garret.src = quatre;
    else if (AL >= 180) Garret.src = troisdemi;
    else if (AL >= 150) Garret.src = trois;
    else if (AL >= 120) Garret.src = deuxdemi;
    else if (AL >= 90) Garret.src = deux;
    else if (AL >= 60) Garret.src = undemi;
    else if (AL >= 30) Garret.src = un;
    else Garret.src = demi;

    // Gardien prise de balle
    if (PDB >= 270) Gprise.src = cinq;
    else if (PDB >= 240) Gprise.src = quatredemi;
    else if (PDB >= 210) Gprise.src = quatre;
    else if (PDB >= 180) Gprise.src = troisdemi;
    else if (PDB >= 150) Gprise.src = trois;
    else if (PDB >= 120) Gprise.src = deuxdemi;
    else if (PDB >= 90) Gprise.src = deux;
    else if (PDB >= 60) Gprise.src = undemi;
    else if (PDB >= 30) Gprise.src = un;
    else Gprise.src = demi;

    // Défenseur tacleur
    if (DTa >= 270) Deftac.src = cinq;
    else if (DTa >= 240) Deftac.src = quatredemi;
    else if (DTa >= 210) Deftac.src = quatre;
    else if (DTa >= 180) Deftac.src = troisdemi;
    else if (DTa >= 150) Deftac.src = trois;
    else if (DTa >= 120) Deftac.src = deuxdemi;
    else if (DTa >= 90) Deftac.src = deux;
    else if (DTa >= 60) Deftac.src = undemi;
    else if (DTa >= 30) Deftac.src = un;
    else Deftac.src = demi;

    // Défenseur technique
    if (DTe >= 270) Deftec.src = cinq;
    else if (DTe >= 240) Deftec.src = quatredemi;
    else if (DTe >= 210) Deftec.src = quatre;
    else if (DTe >= 180) Deftec.src = troisdemi;
    else if (DTe >= 150) Deftec.src = trois;
    else if (DTe >= 120) Deftec.src = deuxdemi;
    else if (DTe >= 90) Deftec.src = deux;
    else if (DTe >= 60) Deftec.src = undemi;
    else if (DTe >= 30) Deftec.src = un;
    else Deftec.src = demi;

    // Joueur attaque tacleur
    if (JoTa >= 270) Attac.src = cinq;
    else if (JoTa >= 240) Attac.src = quatredemi;
    else if (JoTa >= 210) Attac.src = quatre;
    else if (JoTa >= 180) Attac.src = troisdemi;
    else if (JoTa >= 150) Attac.src = trois;
    else if (JoTa >= 120) Attac.src = deuxdemi;
    else if (JoTa >= 90) Attac.src = deux;
    else if (JoTa >= 60) Attac.src = undemi;
    else if (JoTa >= 30) Attac.src = un;
    else Attac.src = demi;

    // Joueur attaque technique
    if (JoTe >= 270) Attec.src = cinq;
    else if (JoTe >= 240) Attec.src = quatredemi;
    else if (JoTe >= 210) Attec.src = quatre;
    else if (JoTe >= 180) Attec.src = troisdemi;
    else if (JoTe >= 150) Attec.src = trois;
    else if (JoTe >= 120) Attec.src = deuxdemi;
    else if (JoTe >= 90) Attec.src = deux;
    else if (JoTe >= 60) Attec.src = undemi;
    else if (JoTe >= 30) Attec.src = un;
    else Attec.src = demi;

    // Polyvalent tacleur
    if (PTa >= 270) Postac.src = cinq;
    else if (PTa >= 240) Postac.src = quatredemi;
    else if (PTa >= 210) Postac.src = quatre;
    else if (PTa >= 180) Postac.src = troisdemi;
    else if (PTa >= 150) Postac.src = trois;
    else if (PTa >= 120) Postac.src = deuxdemi;
    else if (PTa >= 90) Postac.src = deux;
    else if (PTa >= 60) Postac.src = undemi;
    else if (PTa >= 30) Postac.src = un;
    else Postac.src = demi;

    // Polyvalent technique
    if (PTe >= 270) Postec.src = cinq;
    else if (PTe >= 240) Postec.src = quatredemi;
    else if (PTe >= 210) Postec.src = quatre;
    else if (PTe >= 180) Postec.src = troisdemi;
    else if (PTe >= 150) Postec.src = trois;
    else if (PTe >= 120) Postec.src = deuxdemi;
    else if (PTe >= 90) Postec.src = deux;
    else if (PTe >= 60) Postec.src = undemi;
    else if (PTe >= 30) Postec.src = un;
    else Postec.src = demi;

    // Physique
    if (Phy >= 270) Puis.src = cinq;
    else if (Phy >= 240) Puis.src = quatredemi;
    else if (Phy >= 210) Puis.src = quatre;
    else if (Phy >= 180) Puis.src = troisdemi;
    else if (Phy >= 150) Puis.src = trois;
    else if (Phy >= 120) Puis.src = deuxdemi;
    else if (Phy >= 90) Puis.src = deux;
    else if (Phy >= 60) Puis.src = undemi;
    else if (Phy >= 30) Puis.src = un;
    else Puis.src = demi;

    // Vivacité (même calcul que Physique)
    if (Phy >= 270) Viva.src = cinq;
    else if (Phy >= 240) Viva.src = quatredemi;
    else if (Phy >= 210) Viva.src = quatre;
    else if (Phy >= 180) Viva.src = troisdemi;
    else if (Phy >= 150) Viva.src = trois;
    else if (Phy >= 120) Viva.src = deuxdemi;
    else if (Phy >= 90) Viva.src = deux;
    else if (Phy >= 60) Viva.src = undemi;
    else if (Phy >= 30) Viva.src = un;
    else Viva.src = demi;

    // Coups de pied arrêtés
    let CPAR = Number(NT.value) * 3 + Number(CPA.value) * 6 + DDM;
    if (CPAR >= 270) CouPA.src = cinq;
    else if (CPAR >= 240) CouPA.src = quatredemi;
    else if (CPAR >= 210) CouPA.src = quatre;
    else if (CPAR >= 180) CouPA.src = troisdemi;
    else if (CPAR >= 150) CouPA.src = trois;
    else if (CPAR >= 120) CouPA.src = deuxdemi;
    else if (CPAR >= 90) CouPA.src = deux;
    else if (CPAR >= 60) CouPA.src = undemi;
    else if (CPAR >= 30) CouPA.src = un;
    else CouPA.src = demi;
}
// Resets all staff skill input fields to "1" and resets the star ratings
function remisazero() {
    CaM.value = "1";
    Det.value = "1";
    Ndd.value = "1";
    AGB.value = "1";
    PGB.value = "1";
    RGB.value = "1";
    Def.value = "1";
    Off.value = "1";
    Men.value = "1";
    CP.value = "1";
    Tec.value = "1";
    Tac.value = "1";
    CPA.value = "1";
    rststar();
}

// Resets the minimum and maximum values for the determination input field
function rstdeter() {
    det.min = 1;
    det.max = 20;
}

// Adds click event listeners to each tab to handle tab switching
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Remove "active" class from all tab contents and tabs
        tabContents.forEach(content => {
            content.classList.remove("active");
        });
        tabs.forEach(t => {
            t.classList.remove("active");
        });
        // Add "active" class to the selected tab and its content
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });

    // On DOMContentLoaded, set the "adaptabilite" section as active
    document.addEventListener("DOMContentLoaded", function () {
        adaptabilite.classList.add("active");
    });
});
