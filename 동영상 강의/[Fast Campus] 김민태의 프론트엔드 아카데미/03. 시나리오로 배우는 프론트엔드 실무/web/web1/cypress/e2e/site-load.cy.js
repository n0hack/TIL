describe('12shop', () => {
  context('아이폰X 뷰포트', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
    })

    it('load', () => {
      cy.visit('http://www.12shop.com:7070')
    })
  
    it('displays full header', () => {
      cy.title().should('eq', '12shop.com 으로 오세요')
    })

    it('og tag', () => {
      cy.get('meta[property="og:url"]')
      cy.get('meta[property="og:type"]')
      cy.get('meta[property="og:title"]')
      cy.get('meta[property="og:description"]')
      cy.get('meta[property="og:image"]')
    })

    it('twitter card', () => {
      cy.get('meta[name="twitter:card"]')
      cy.get('meta[name="twitter:site"]')
      cy.get('meta[name="twitter:creator"]')
    })
  })
})