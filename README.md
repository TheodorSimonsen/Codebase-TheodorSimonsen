# kodebase-TheodorSimonsen

## Projektbeskrivelse

En kodebase til fremtidige projekter, for hjemmesider. 
projektet er til server baseret sider, med smooth URL strukture.

Kodebase er ikke defineret fra start, den kan defineres ved hjælp a .env fil. Hvis .env ikke findes laver du den selv i mappens rod. 
Når mappen er lavet kopiere du følgende tekst:
```
DB_USER=root
DB_PSWD=
DB_HOST=localhost
DB_DTBS=

PORT=1337
SITE_HOST=localhost
```
Databasen defineres ved DB_DTBS.

## NPM Pakker

* express
* nodemon
* fs
* bcryptjs
* pjson
* debug
* express-session
* mysql
* morgan
* express-formidable

## Kommandoer

* Start projektet `npm init` 
* Download pakker `npm i / npm install`
* Start med noedmon: `npm run dev`
* Start server officielt `npm start`

## Relevante kode-eksempler

```javascript
app.get('/URL', (req, res, next) => {
    res.render('template fil');
});
```

## Maintainers

* Theodor Snedker Simonsen