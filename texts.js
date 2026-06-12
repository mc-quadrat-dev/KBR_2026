/* ============================================================================
   NÄCHSTER HALT: MITBESTIMMUNG — Zentrale Textverwaltung
   ----------------------------------------------------------------------------
   Diese Datei enthält ALLE Texte des Spiels. Sie wird in index.html einfach
   per <script src="texts.js"></script> eingebunden (keine JSON-Datei, damit
   das Spiel ohne Webserver direkt aus dem Dateisystem läuft).

   ► Texte ändern: Einfach die Strings in Anführungszeichen anpassen.
   ► Platzhalter:  {FARBE}  wird im Spiel durch das Farbadjektiv des
                   jeweiligen Kontinents ersetzt (z. B. "blauen").
                   {WERT}   wird durch einen Zahlenwert ersetzt.
   ► HTML:         In Start-/Endscreen-Texten ist einfaches HTML erlaubt
                   (z. B. <br> für Zeilenumbrüche).
   ============================================================================ */

const GAME_TEXTS = {

  /* --------------------------------------------------------------------------
     UI: Startscreen, HUD, Buttons, allgemeine Beschriftungen
     -------------------------------------------------------------------------- */
  ui: {
    title: "Nächster Halt: Mitbestimmung",
    version: "2.0",
    subtitle: "Ein Liniennetz für gute Arbeit in Magentara",
    intro: "Verbinde Stationen mit Linien in der passenden Farbe und transportiere alle Anliegen.<br>Bleiben Anliegen liegen, sinkt die Netzstabilität.<br><strong>Du hast 2 Minuten – nimm alle mit!</strong>",
    startBtn: "Spiel starten",
    restartBtn: "Neustart",
    playAgainBtn: "Nochmal spielen",
    toStartBtn: "Zum Start",

    stabilityLabel: "Netzstabilität",
    influenceLabel: "Einfluss",
    timeLabel: "Zeit",

    demoBadge: "DEMO",
    demoHint: "Bildschirm berühren, um selbst zu spielen",

    /* Beschriftung des Stations-Platzierers im Linienmenü, wenn gerade
       keine Station zum Platzieren ansteht (ausgegrauter Zustand) */
    dockIdle: "Nächste Station",

    /* Abfahrtstafel (einklappbares Panel oben links) */
    boardTitle: "Abfahrtstafel",
    boardEmpty: "Keine wartenden Anliegen",
    boardWild: "Freies Anliegen",

    /* Kurze Toast-Meldungen (kleine Hinweise unten) */
    continentToast: "Nächste Station erscheint bevorzugt auf diesem Kontinent.",
    autoPlacedToast: "Station wurde automatisch platziert.",
    duplicateToast: "Diese Verbindung gibt es schon in dieser Farbe.",

    /* Namen der vier Linien (Anzeige im Linienmenü) */
    lineNames: {
      blue:    "Mitbestimmung",
      magenta: "Beschäftigung",
      coral:   "Personalentwicklung",
      green:   "Arbeitszeitpolitik"
    },

    /* Farbadjektive der Kontinente — werden in Tutorialtexte eingesetzt */
    continentAdjectives: {
      blue:    "blauen",
      magenta: "magenta",
      coral:   "orangenen",
      green:   "grünen"
    }
  },

  /* --------------------------------------------------------------------------
     INFO-PANEL: kleine Anleitung hinter dem "i" auf dem Startscreen
     ----------------------------------------------------------------------------
     Die Platzhalter in geschweiften Klammern ({TRANSPORT}, {HEILUNG}, …)
     werden im Spiel automatisch durch die aktuellen Balancing-Werte aus
     index.html ersetzt — die Anleitung bleibt also immer aktuell.
     -------------------------------------------------------------------------- */
  info: {
    title: "So funktioniert's",
    howTo: [
      "Wähle unten eine Linienfarbe – sie muss zur Farbe der Anliegen bzw. des Kontinents passen.",
      "Tippe eine Station an und ziehe zur anderen, um eine Linie zu bauen. Jede Linie kostet Einfluss.",
      "Anliegen (farbige Punkte) fahren automatisch mit – Die Lienienfarbe muss dem Anliegen entsprechen",
      "Freie Anliegen auf den Kontinenten brauchen eine Station oder Linie in ihrer Nähe.",
      "Halte die Netzstabilität 2 Minuten lang über 0 %."
    ],
    scoringTitle: "Punkte & Abzüge",
    plusHeader: "Das bekommst du",
    minusHeader: "Das verlierst du",
    /* Zwei Themenblöcke, jeweils mit Plus- und Minus-Spalte */
    stability: {
      title: "Netzstabilität",
      plus: [
        "+{TRANSPORT} % je korrekt transportiertem Anliegen",
        "+{HEILUNG} % pro Sekunde (passive Erholung)"
      ],
      minus: [
        "−{FALSCH} % bei falscher Linienfarbe",
        "−{STAU} % pro Sekunde je überlasteter Station (ab {STAU_AB} wartenden Anliegen)",
        "−{OHNE} % pro Sekunde je wartendem Anliegen ohne Verbindung",
        "−{FREI} % pro Sekunde je nicht abgeholtem freien Anliegen"
      ]
    },
    influence: {
      title: "Einfluss",
      plus: [
        "+{EINFLUSS} je korrekt transportiertem Anliegen"
      ],
      minus: [
        "−{KOSTEN_MIN} bis −{KOSTEN_MAX} je gebauter Linie, abhängig von der Länge"
      ]
    },
    closeBtn: "Alles klar"
  },

  /* --------------------------------------------------------------------------
     TUTORIAL: kontextuelle Hinweise direkt am Spielgeschehen
     -------------------------------------------------------------------------- */
  tutorial: {
    /* An der ersten Station */
    firstStation: "Hier startet dein Netz. Verbinde es mit der nächsten Station",

    /* An der zweiten Station */
    secondStation: "Station antippen und zur anderen ziehen.",
    secondStationSwitch: "Diese Station braucht eine andere Farbe. Wähle zuerst unten die passende Linie.",

    /* Zwischen zwei unverbundenen Stationen, wenn noch keine Linie gebaut wurde */
    drawLine: "Ziehe eine Linie zwischen den Stationen.",

    /* Am Linienmenü, wenn eine neue Farbe gebraucht wird */
    lineMenu: "Neue Farbe benötigt. Wechsle deine Linie hier unten.",

    /* Wenn die ersten Punkte auf einer Linie fahren */
    firstTransport: "Diese Punkte sind Anliegen und müssen ALLE mitgenommen werden.",

    /* Wenn das erste Anliegen an einer Station erscheint */
    newPoint: "Neues Anliegen wartet. Punktfarbe = Linienfarbe.",

    /* Wenn sich an einer Station 2+ Anliegen stauen */
    congestion: "Stau! Baue eine passende Verbindung.",

    /* Beim ersten freien Punkt auf einem Kontinent */
    wildPoint: "Achtung: Dieses Anliegen braucht eine Station! Zieh sie von unten hierher!",

    /* An der frei platzierbaren Station rechts */
    freeStation: "Zieh diese Station auf die Karte – du kannst sie frei platzieren.",

    /* Wenn der Einfluss unter 100 fällt */
    influenceLow: "Einfluss ist dein Bau-Budget. Kurze Linien kosten weniger – Transporte bringen Einfluss zurück."
  },

  /* --------------------------------------------------------------------------
     FEHLERMELDUNGEN (rote Hinweise)
     -------------------------------------------------------------------------- */
  errors: {
    /* Erste falsche Linienfarbe: ausführlich */
    wrongLine: "Falsche Linienfarbe! Punktfarbe und Linienfarbe müssen zusammenpassen. Stabilität sinkt.",
    /* Weitere falsche Linienfarben: kurz */
    wrongLineShort: "Falsche Linienfarbe: Stabilität sinkt.",

    noInfluence: "Nicht genug Einfluss. Baue kürzer.",
    invalidDrop: "Bitte auf einem Kontinent platzieren – Station wurde automatisch gesetzt.",
    stranded: "Ein Anliegen wartet ohne Verbindung. Baue eine Linie in der Farbe des Punktes."
  },

  /* --------------------------------------------------------------------------
     ENDSCREENS: Sieg & Niederlage
     -------------------------------------------------------------------------- */
  end: {
    winTitle: "Endstation Erfolg!",
    loseTitle: "Netz zusammengebrochen",

    /* Anzeige des Endwerts, {WERT} wird ersetzt */
    stabilityResult: "Netzstabilität: {WERT} %",

    loseText: "Die Netzstabilität ist auf 0 % gefallen. Zu viele Anliegen blieben liegen oder fuhren auf der falschen Linie. Beim nächsten Versuch: Punktfarbe und Linienfarbe zusammenbringen – und niemanden zurücklassen.",

    /* Botschaft, die auf beiden Endscreens steht */
    eventMessage: "Dieses Spiel ist ein Vibe-Coding-Prototyp. Es zeigt: Aus einer Idee kann schnell ein testbares Werkzeug entstehen.",

    /* Siegtexte je Netzstabilität. Es gilt der erste Eintrag, dessen "min"
       kleiner oder gleich der erreichten Stabilität ist (von oben geprüft).
       Texte sind Platzhalter und können frei ersetzt werden. */
    winByStability: [
      { min: 100, text: "Perfekt! 100 % Stabilität – dein Netz hat alle mitgenommen. So sieht gelebte Mitbestimmung aus." },
      { min: 90,  text: "Stark! Dein Netz lief fast fehlerfrei. Ein paar Ruckler, aber alle kamen ans Ziel." },
      { min: 80,  text: "Sehr gut! Ein stabiles Netz mit kleinen Wacklern – darauf lässt sich aufbauen." },
      { min: 70,  text: "Gut gemacht! Das Netz hielt, auch wenn es stellenweise eng wurde." },
      { min: 60,  text: "Ordentlich! Dein Netz stand – mit etwas Übung nimmst du noch mehr Anliegen mit." },
      { min: 50,  text: "Geschafft! Die Hälfte der Stabilität ist übrig. Mitbestimmung braucht manchmal einen langen Atem." },
      { min: 40,  text: "Knapp gehalten! Einige Anliegen blieben zu lange liegen – aber das Netz steht noch." },
      { min: 30,  text: "Das war eng! Dein Netz hat geächzt, aber es ist nicht gerissen." },
      { min: 20,  text: "Haarscharf! Kurz vor dem Kollaps gerettet – beim nächsten Mal früher verbinden." },
      { min: 10,  text: "Mit letzter Kraft! Das Netz hing am seidenen Faden – aber aufgegeben hast du nicht." },
      { min: 1,   text: "Uff – gerade so überlebt! Fast wäre das Netz gekippt. Der nächste Versuch wird besser." }
    ]
  },

  /* --------------------------------------------------------------------------
     STATIONEN: Namen + kurzer Platzhaltertext
     ----------------------------------------------------------------------------
     "info" wird aktuell nicht im Spiel angezeigt, ist aber vorbereitet —
     die Texte können später z. B. für Info-Popups genutzt und hier
     jederzeit ersetzt werden.
     -------------------------------------------------------------------------- */
  stations: [
    { name: "Kompetenz-Kreuz",  info: "Platzhalter: Wo Qualifizierung und Praxis sich treffen." },
    { name: "Tarifstraße",      info: "Platzhalter: Hier wird über gute Löhne verhandelt." },
    { name: "Dialogforum",      info: "Platzhalter: Zuhören, aushandeln, gemeinsam entscheiden." },
    { name: "Kollegiumstraße",  info: "Platzhalter: Zusammenhalt im Team beginnt hier." },
    { name: "Skillwerk",        info: "Platzhalter: Neue Fähigkeiten für die Transformation." },
    { name: "Dienstplanplatz",  info: "Platzhalter: Arbeitszeitpolitik, die zum Leben passt." },
    { name: "Beschlussallee",   info: "Platzhalter: Hier werden Entscheidungen gemeinsam getragen." },
    { name: "Rückhaltbrücke",   info: "Platzhalter: Beschäftigungssicherung verbindet Ufer." },
    { name: "Lernfelde",        info: "Platzhalter: Weiterbildung wächst auf gutem Boden." },
    { name: "Spar-Damm",        info: "Platzhalter: Wo Sparprogramme auf Gegenwehr treffen." },
    { name: "Tarifzone",        info: "Platzhalter: Gute Arbeit hat ihren Geltungsbereich." },
    { name: "LOST & FOUND",     info: "Platzhalter: Hier wird niemand vergessen." },
    { name: "Zukunftsallee",    info: "Platzhalter: Transformation aktiv gestalten." },
    { name: "Arbeitsplatz",     info: "Platzhalter: Der Ort, um den sich alles dreht." },
    { name: "KI-Kontrollpunkt", info: "Platzhalter: KI & Automatisierung brauchen Mitbestimmung." },
    { name: "Seilschaft-Hof",   info: "Platzhalter: Gemeinsam zieht es sich leichter." },
    { name: "Bildungstor",      info: "Platzhalter: Qualifizierung öffnet Türen." },
    { name: "Bestandsallee",    info: "Platzhalter: Beschäftigung sichern, Zukunft bauen." },
    { name: "StimmTor",         info: "Platzhalter: Jede Stimme zählt." },
    { name: "Solidar-Straße",   info: "Platzhalter: Solidarität ist die kürzeste Verbindung." },
    { name: "Wahlkreuz",        info: "Platzhalter: Demokratie beginnt im Betrieb." },
    { name: "Wir Allee",        info: "Platzhalter: Aus vielen Ich wird ein Wir." },
    { name: "Verhandlungshof",  info: "Platzhalter: Hart in der Sache, fair im Ton." },
    { name: "Abstimmungsplatz", info: "Platzhalter: Mehrheiten entstehen im Gespräch." },
    { name: "Mitwirkungsufer",  info: "Platzhalter: Datenschutz und gute Arbeit am selben Fluss." }
  ]
};

/* Texte global verfügbar machen (bitte nicht entfernen) */
window.GAME_TEXTS = GAME_TEXTS;
