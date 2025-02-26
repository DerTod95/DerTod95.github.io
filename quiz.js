let punktestand = 0;
let aktuelleFrage = 0;

let fragen = [
    {
        frage: "Was macht das Leben deiner Meinung nach so sinnlos?",
        antworten: ["Die Vergänglichkeit von allem", "Die vielen schönen Momente.", "Die Möglichkeit, sich selbst zu verwirklichen.", "Die Aussicht auf eine bessere Zukunft."],
        richtigeAntwort: 0
    },
    {
        frage: "Wann hast du zuletzt daran gezweifelt, dass sich überhaupt irgendetwas lohnt?",
        antworten: ["Als ich mal einen schlechten Tag hatte.", "Noch nie, das Leben ist voller Chancen!", "Heute Morgen, als ich aufgewacht bin.", "Eigentlich selten, ich bin optimistisch."],
        richtigeAntwort: 2
    },
    {
        frage: "Wie gehst du damit um, dass am Ende sowieso alles scheitert?",
        antworten: ["Ich akzeptiere es und tue trotzdem nichts.", "Ich versuche es trotzdem, man kann ja gewinnen.", "Ich ignoriere die Möglichkeit des Scheiterns.", "Ich lerne aus meinen Fehlern und mache weiter."],
        richtigeAntwort: 0
    },
    {
        frage: "Was war dein größter Misserfolg – und warum war er vorhersehbar?",
        antworten: ["Eigentlich hatte ich bisher keine großen Misserfolge.", "Alles, was ich je versucht habe, ist gescheitert. ", "Einmal habe ich etwas vermasselt, aber daraus gelernt.", "Misserfolge gehören zum Leben, aber sie definieren mich nicht."],
        richtigeAntwort: 1
    },
    {
        frage: "Wie lange hältst du es aus, mit der Hoffnungslosigkeit anderer umzugehen?",
        antworten: ["Ich versuche, andere zu motivieren.", "Ich umgebe mich nur mit positiven Menschen.", "Ewig, da ich selbst keine Hoffnung habe.", "Hoffnungslosigkeit gibt es nur im Kopf."],
        richtigeAntwort: 2
    },
    {
        frage: "Was motiviert dich morgens aufzustehen, obwohl alles den Bach runtergeht?",
        antworten: ["Die Freude auf einen neuen Tag.", "Die Erkenntnis, dass Liegenbleiben auch nichts ändert.", "Die Menschen, die mir wichtig sind.", "Die Hoffnung, dass es besser wird."],
        richtigeAntwort: 1
    },
    {
        frage: "Wie würdest du einen Neuling davon überzeugen, dass Glück nur eine Illusion ist?",
        antworten: ["Indem ich ihm zeige, dass alles Schöne vergeht.", "Indem ich ihn an seine schönsten Momente erinnere.", "Glück ist echt, es gibt viele Gründe, sich zu freuen.", "Ich würde ihn nicht überzeugen, jeder soll glauben, was er will."],
        richtigeAntwort: 0
    },
    {
        frage: "Welche Strategien hast du entwickelt, um mit der ständigen Enttäuschung des Lebens klarzukommen?",
        antworten: ["Einfach weitermachen und positiv bleiben.", "Keine Erwartungen mehr haben.", "Ich suche nach neuen Wegen, um Dinge zu verbessern.", "Enttäuschung gehört dazu, aber es gibt immer Hoffnung."],
        richtigeAntwort: 1
    },
    {
        frage: "Was war der schlimmste Moment deines Lebens – und warum ist das erst der Anfang?",
        antworten: ["Ich hatte schlimme Momente, aber ich habe mich erholt.", "Jeder Tag ist ein neuer Tiefpunkt.", "Es gibt schlimme Zeiten, aber sie gehen vorüber.", "Es wird immer besser, man wächst daran."],
        richtigeAntwort: 1
    },
    {
        frage: "Wie gehst du mit dem Wissen um, dass nichts, was du tust, langfristig von Bedeutung sein wird?",
        antworten: ["Ich tue es trotzdem, weil es mir Freude macht.", "Jeder kann die Welt ein bisschen verändern.", "Ich ignoriere diese Gedanken und mache weiter.", "Ich tue einfach nichts mehr."],
        richtigeAntwort: 3
    }
];

function zeigeFrageAn() {
    if(aktuelleFrage >= fragen.length) {
        let prozent = 100 / fragen.length * punktestand;
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('ergebniss').hidden = false;
        document.getElementById('prozent').textContent = prozent;
        return;
    }

    let frage = fragen[aktuelleFrage];

    document.getElementById('frage').textContent = frage.frage;

    let antwortenDiv = document.getElementById("antworten");
    antwortenDiv.innerHTML = "";

    frage.antworten.forEach((antwort, index) => {
        let antwortsKnopf = document.createElement('button');
        antwortsKnopf.classList.add("btn", "btn-danger", "me-2");
        antwortsKnopf.textContent = antwort;
        antwortsKnopf.onclick = () => überprüfeAntwort(index);
        antwortenDiv.appendChild(antwortsKnopf);
    });
}

zeigeFrageAn();

function überprüfeAntwort(benutzerAntwort) {
    let richtigeAntwort = fragen[aktuelleFrage].richtigeAntwort;

    if(benutzerAntwort == richtigeAntwort) {
        punktestand++;
    }

    aktuelleFrage++;
    zeigeFrageAn();
}
