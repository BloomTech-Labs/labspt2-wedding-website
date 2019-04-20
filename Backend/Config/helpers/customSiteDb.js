const db = require('../dbConfig')

module.exports = {
  getSiteInfoByUrl: url => {
    //RETURNS custom site table and userInfo
    return db('customSite')
      .select(
        'customSite',
        'users.partnerName1',
        'users.partnerName2',
        'users.weddingDate',
        'users.weddingParty',
        'users.venueLocation',
        'users.isPremium'
      )
      .where('userUrl', url)
      .leftJoin('users', 'customSite.userId', '=', 'users.id')
      .options({ nestTables: true })
  },

  addSiteInfo: siteInfo => {
    return db('customSite').insert(siteInfo)
  },

  editSiteInfo: (userId, siteInfo) => {
    return db('customSite')
      .where('userId', userId)
      .update(siteInfo)
  },

  removeSiteInfo: userId => {
    return db('customSite')
      .where('userId', id)
      .del()
  },
}
