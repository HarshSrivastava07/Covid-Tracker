const { application } = require('express')
const express=require('express')
const covid= require('novelcovid')
const exp= require('express-handlebars')

// covid.all()
// .then(console.log(covid))

//covid.countries().then((response) => console.log(response))

const app= express()

app.set('view engine', 'hbs');

app.engine('hbs', exp({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname+ '/views/layouts/'
}))

app.get('/countries',(req,res) =>{

    covid.countries()
    .then((response) => {
        res.render('home',{info : response})
    })

 
})


app.listen(4000, () => {
    console.log("App is listening")
})