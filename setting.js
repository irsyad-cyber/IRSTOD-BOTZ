const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6281586783372'] // pakai nomor owner
global.ownernomer = "6281586783372" // pakai nomor owner
global.socialmedia = "-" // ini ig buat di ownerjy
global.yutub = "-"// sama
global.lokasi = "Indonesia, Tangerang Selatan, Pondok Aren"//

global.packgename = "by" 
global.author = "Irstod-Botz" 

global.title = 'Irstod-Botz'//Tittle reply 
global.body = 'Irsyad' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})