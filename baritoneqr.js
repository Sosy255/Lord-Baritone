const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Lord_Baritone,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function LORD_BARITONE_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Lord_Baritonr = Lord_Baritone({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Lord_Baritone.ev.on('creds.update', saveCreds)
			Qr_Code_By_Lord_Baritone.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Lord_Baritone.sendMessage(Qr_Code_By_Lord_Baritone.user.id, { text: '' + b64data });
	
				   let LORD_BARITONE_TEXT = `
*_Session Connected By BARITONE*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 AMAZING YOU'VE CHOSEN LORD BARITONE V1.0 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://https://youtube.com/@lord_baritone?si=yiipEY3XWgoCtdZH
║❒ *Owner:* https://wa.me/255782365586_
║❒ *Repo:* _https://github.com/Sosy255/Lord-Baritone.git_
║❒ *WaGroup:* _https://chat.whatsapp.com/C3GFThC0tIpGaJY9D
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VahusSh0QeaoFzH
║❒ *Plugins:* _https://github.com/Sosy255/Lord-Baritone.git 
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Lord_Baritone.sendMessage(Qr_Code_By_Lord_Baritone.user.id,{text:LORD_BARITONE_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await LORD_BARITONE_QR_CODE()
});
module.exports = router
