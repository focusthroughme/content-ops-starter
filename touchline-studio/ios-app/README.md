# Touchline Studio – iPhone-App (Expo)

Diese App packt die Web-App (`../index.html`) in eine echte iPhone-App. Die Daten liegen nur auf dem Gerät
(kein Sync mit der Web-Version); Sichern und Übertragen geht über „Data & backup“ → Export / Import.

## Auf dem eigenen iPhone testen
1. `npm install`
2. `npm start` (packt die Web-App automatisch neu und zeigt einen QR-Code)
3. Auf dem iPhone „Expo Go“ installieren und den QR-Code scannen.

## In den App Store bringen
Voraussetzungen, die nur du selbst erledigen kannst:
- Apple Developer Program (99 USD pro Jahr), unter 18 nur über ein Elternteil
- Kostenloses Expo-Konto
- In App Store Connect eine App mit der Bundle-ID aus `app.json` anlegen
  (`lu.miguelebrahimi.touchlinestudio`, bei Bedarf dort und in `app.json` ändern)

Dann:
```bash
npm install -g eas-cli
eas login
eas build --platform ios --profile production   # baut und signiert in der Cloud, fragt nach dem Apple-Login
eas submit --platform ios                       # lädt den Build zu App Store Connect hoch
```
Danach in App Store Connect Screenshots, Beschreibung und Datenschutzangaben ausfüllen und zur Prüfung einreichen.
Zum Verteilen an dich selbst oder Freunde ohne öffentliche Prüfung reicht TestFlight.

## Nach Änderungen an der Web-App
`npm run bundle-web` ausführen (passiert bei `npm start` automatisch), dann neu bauen.
