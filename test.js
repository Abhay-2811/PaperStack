let avatarId = 'Binx Bond.png'
fetch('https://api.multiavatar.com/'
+JSON.stringify(avatarId))
  .then(res => res.text())
  .then(console.log)