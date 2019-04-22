const helper = require('../helpers/customSiteDb')

module.exports = server => {
  server.get('/customSite/:siteUrl', siteByUrl)
  server.post('/customSite/:userId', addSiteInfo)
  server.put('/customSite/:userId', editSite)
  server.delete('/customSite/:userId', removeSiteInfo)
}

siteByUrl = (req, res) => {
  const { siteUrl } = req.params
  console.log(siteUrl)
  helper
    .getSiteInfoByUrl(siteUrl)
    .then(siteInfo => {
      if (siteInfo) {
        res.status(200).json(siteInfo)
      } else {
        res.status(404).json({ message: 'no Site under that url' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'getting site info failed' })
    })
}

addSiteInfo = (req, res) => {
  const { userId } = req.params
  const siteInfo = req.body
  siteInfo.userId = userId
  console.log(siteInfo)
  helper
    .addSiteInfo(siteInfo)
    .then(newSite => {
      res.status(201).json(newSite)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed adding site info' })
    })
}

editSite = (req, res) => {
  const { userId } = req.params
  const siteInfo = req.body
  siteInfo.userId = userId

  helper
    .editSiteInfo(userId, siteInfo)
    .then(count => {
      res.status(200).json(count)
    })
    .catch(() => {
      res.status(500).json({ message: 'edit site failed' })
    })
}

removeSiteInfo = (req, res) => {
  const { userId } = req.params

  helper.removeSiteInfo(userId).then(count => {
    if (count) {
      res.status(200).json({ message: 'site Removed' })
    } else {
      res.status(404).json({ message: 'No sit found under that user id' })
    }
  })
}
