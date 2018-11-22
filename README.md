# kodebase-TheodorSimonsen

## Projektbeskrivelse

En kodebase til fremtidige projekter, for hjemmesider. 
projektet er til server baseret sider, med smooth URL strukture.

## NPM Pakker

* express
* nodemon
* fs
* bcrypt
* pjson
* debug
* express-session
* mysql
* morgan
* body-parser

## Kommandoer

* Start projektet `npm init` 
* Download pakker `npm i / npm install`
* Start server: `npm run dev`

## Relevante kode-eksempler

```javascript
app.get('/URL', (req, res, next) => {
    res.render('EjsNavn');
});
```

## Maintainers

* Theodor Simonsen