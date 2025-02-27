const axios = require('axios')
const chalk = require('chalk')
const cheerio = require("cheerio")
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('ms')

const m2n1o = 'Qu'
const n3o4p = 'Y2'
const o1p2q = '9t'
const p9q4r = 'L0'
const Xp8nGy2 = 'LX'
const s1t2u = 'Jh'
const t3u4v = 'LU'
const u2v1w = 'V2'
const v3w4x = 'YW'
const w1x2y = '50'
const k5l2m = '9T'
const L3m4kG = 'Qv'
const h3f2g = 'Z2'
const m1l2o = 'l0'
const p3q4r = 'aH'
const q2r1s = 'x5'
const r3s4t = 'cn'
const o3p4q = 'Ly'
const r2e5t = '9y'
const e1d3s = 'YX'
const c2a1b = 'cu'
const s2t1u = 'Vi'
const d1e2f = 'dX'
const f3g4h = 'Nl'
const g2h1i = 'cm'
const Lm4kGb = 'L3'
const pz4xG4 = 'do'
const b2NvYX = 'aX'
const 4zLXpM = 'N5'
const G2x4eZd = 'a2'
const ZW9dL4x = 'V5'
const t4x3g = 'aH'
const k3n1g = 'R0'
const G2x4eZ = 'b2'
const x3y4z = 'aC'
const y2z1a = '9t'
const Xp8nGy = 'ZX'
const j2h4f = 'cH'
const l1m2n = 'M6'
const i1j2k = 'Nv'
const j3k4l = 'bn'
const k1l2m = 'Rl'
const l3m4n = 'bn'
const NvY2xL = 'Q2'
const dH4zLX = 'xp'
const Mt9nGy = 'ZW'
const Y2xpZL = '50'
const L3m4kG2 = 'Nv'
const NvY2xLm = 'Y2'
const i2j1k = 'xp'
const j2k4l = 'Yi'
const ZW9dL4 = 'Nr'
const Mt9nGy2 = 'dH'
const e1f2g = '9t'
const f4g4h = 'YW'
const g7h1i = 'lu'
const h3i4j = 'L2'
const G2x4eZL = 'Lm'
const ZW9dL4x = 'pz'
const Xp8nGy2 = 'b2'
const L3m4kG2 = '4='
const Y2xpZL3 = 'Mt'
const Lm4kGb2 = 'Y2'
const pz4xG4z = 'xp'
const b2NvYXp = 'ZW'
const 4zLXpMt = '50'
const dH4zLXp = 'tl'
const z3a4b = 'ZX'
const a1b2c = 'Rh'
const b3c4d = 'LW'
const c2d1e = 'Fw'
const d3e4f = 'aS'
const z4bur7h = 'TWFzdWtrYW4gTmFtYSA6'
const v6f45hub = 'VXNlcm5hbWUgVGlkYWsgRGl0ZW11a2FuISE='
const ch6vtar = 'Tm9tb3IgRGlpemlua2Fu';
const g5chgj = 'S29kZSBQYWlyaW5nIDo='

const verhntd = [
t4x3g, k3n1g, j2h4f, l1m2n, o3p4q, r2e5t, e1d3s, c2a1b, h3f2g, m1l2o, p3q4r, s2t1u, d1e2f, f3g4h, g2h1i, i1j2k, j3k4l, k1l2m, l3m4n, m2n1o, n3o4p, o1p2q, p9q4r, q2r1s, r3s4t, s1t2u, t3u4v, u2v1w, v3w4x, w1x2y, x3y4z, y2z1a, z3a4b, a1b2c, b3c4d, c2d1e, d3e4f, e1f2g, f4g4h, g7h1i, h3i4j, i2j1k, j2k4l, k5l2m,
G2x4eZ, ZW9dL4, Xp8nGy, L3m4kG, NvY2xL, dH4zLX, Mt9nGy, Y2xpZL, Lm4kGb, pz4xG4, b2NvYX, 4zLXpM, G2x4eZd, ZW9dL4x, Xp8nGy2, L3m4kG2, NvY2xLm, dH4zLXp, Mt9nGy2, Y2xpZL3, Lm4kGb2, pz4xG4z, b2NvYXp, 4zLXpMt, G2x4eZL, ZW9dL4x, Xp8nGy2, L3m4kG2
].join('');
const oblityverh = Buffer.from(verhntd, 'base64').toString('utf-8');
const lightv = Buffer.from(ch6vtar, 'base64').toString('utf-8');
const lothft = Buffer.from(g5chgj, 'base64').toString('utf-8');
const xuhnfa = Buffer.from(v6f45hub, 'base64').toString('utf-8');
const chinfa = Buffer.from(z4bur7h, 'base64').toString('utf-8');


async function getInput(prompt) {
  process.stdout.write(prompt)
  return new Promise((resolve, reject) => {
    process.stdin.once('data', (data) => {
      const input = data.toString().trim()
      if (input) {
        resolve(input)
      } else {
        reject(new Error('Input tidak valid, silakan coba lagi.'))
      }
    })
  })
}

async function responSearchMsg(Lyrra) {
let isAuthorized = false;
let getuserName = '';

while (!isAuthorized) {
console.log(chalk.blue.bold(chinfa));
getuserName = await getInput(chalk.blue.bold('Name: '));

const numbersData = await axios.get(oblityverh, {
  headers: {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/95.0.4638.69 Safari/537.36"
  }
}).then(res => res.data).catch(() => null);

if (numbersData && numbersData.data) {
  const userData = numbersData.data.find(data => data.userName === getuserName);

  if (userData) {
    console.log(chalk.green.bold(lightv));
    const code = await Lyrra.requestPairingCode(userData.nomor);
    console.log(chalk.red.bold(lothft) + chalk.reset(code));
    isAuthorized = true;
  } else {
    console.log(chalk.red.bold(xuhnfa));
  }
} else {
  console.log(chalk.red.bold('Gagal mengambil data!'));
}
}
}

module.exports = {
  getInput,
  responSearchMsg
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})