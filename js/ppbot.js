const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://telegra.ph/file/66b734acd7eb7778bb8f6.jpg`// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})