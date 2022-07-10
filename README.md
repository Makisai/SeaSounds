# Sea Sounds - Frontend

## Einleitung
In dem Modul Mobile Systeme sollen Studierende ein IT-System mit medien-technischem Bezug in Gruppenarbeit umsetzen. Unser Projekt Sea Sounds hat das Ziel eine Anwendung zu erstellen, in welcher Nutzer:innen die Möglichkeit haben verschiedene Soundeffekte der Unterwasserwelt abzuspielen. 

Im ersten Schritt der Entwicklung stand die Entwicklung des Frontends. Um eine angenehme User Experience zu gewährleisten, wurde zuerst ein UX Mockup erstellt und dieses im Programmierprozess umgesetzt. 

## Web-App
In diesem Projekt wurde sich gegen die Programmierung einer Applikation in React Native entschieden. Der Hauptgrund dafür war, dass das Abspielen auf iOS-Geräten nur sehr umständlich möglich wäre und den Besucher:innen das Installieren der Expo App erspart bleiben sollte. Außerdem ist unsere Applikation auf keine der Sensoren im Handy angewiesen, so dass es keine Notwendigkeit für React Native gab. Aus Gründen der systemübergreifenden Kompatibilität sowie einfacher Mobilmachung hat das Team entschieden eine Web-App im normalen React Framework zu erstellen. Um die Weboberfläche optisch abzurunden wurde auf die Bootstrap Erweiterung für React zurückgegriffen.

## Versionsverwaltung
Da für eine gemeinsame Arbeit eine gute Versionsverwaltung essentiell ist, wurde ein Github Repositories erstellt: 

https://github.com/Makisai/seasounds  

## Aufbau
Die Webanwendung bietet dem User nur eine einzelne Übersichtsseite. Diese besteht aus einer Listenansicht, in welche für jeden Eintrag eine selbst erstellte Komponente gespeist wird. 

Die Komponenten beziehen die anzuzeigenden Informationen aus der entityContent.json. Bei einem Klick auf eine Komponente öffnet sich ein Modal, welches dem User alle Informationen für den entsprechenden Eintrag aufzeigt. Über einen Klick auf einen Button kann dann der entsprechende Sound im Raum abgespielt, bzw. zur Warteschlange hinzugefügt werden. Die Kommunikation zum Server läuft hier über einen WebSocket.

Nach dem Hinzufügen des Sounds zur Warteschlange erhält der User durch einen Countdown optisch Feedback darüber, wann sein gewählter Sound abgespielt wird.

## Bibliotheken
**Bootstrap**
- CSS-Framework
- Gestaltungsvorlagen für Buttons, Typografie und Co. 
- Erspart Designarbeit schafft mehr Raum für Backendprogrammierung

**React**
- Komponentenbasierte JavaScript Bibliothek zum Erstellen von (Web)Benutzeroberflächen

**SocketIO**
- Library zur Kommunikation zwischen Client(Website) und Server(seasounds-api Backend)
- Weniger Overhead als reines WebSocket und dadurch eine niedrigere Technische Einstiegshürde

## Inhalte
Alle Inhalte unserer Applikationen sind, wie bereits erwähnt, in einer JSON Datei organisiert. Dadurch sind die Inhalte unserer App strukturiert einsehbar und ggf. leicht zu erweitern. In seiner allgemeinen Struktur ist ein Eintrag im  JSON File wie folgt aufgebaut:

```
"Pottwal": {
        "name": "Der Pottwal",
        "imagePath": "Pottwal.PNG",
        "infoText": "Der Pottwal ist in der Lage ungewöhnliche höhe Töne zu erzeugen. Diese können einen Schalldruckpegel von bis zu 230 dB erreichen. Zum Vergleich ein Kanonenschuss hat in etwa 150 dB.",
        "soundName": "06_Sperm_Whale.wav",
        "marginLeft": "10%",
        "width": "70%"
    },
```

## Hosting
Anfänglich war angedacht, dass das Frontend und Backend über externe Server gehostet werden sollten. Diese Idee wurde aber schlussendlich verworfen, da das Netzwerk der Ausstellung lediglich als Intranet diente und der mobile Datenempfang teilweise gar nicht oder nur sehr schlecht vorhanden war. Aus diesem Grund wurde sowohl das Frontend als auch der Warteschlangen-Server auf lokaler Ebene gehostet. Die Besucher:innen konnten unabhängig vom Hosting die Web-App mittels QR-Code auf dem eigenen Smartphone öffnen. 

