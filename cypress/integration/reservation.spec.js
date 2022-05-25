describe('Turing cafe reservation main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the main page view when the user visits', () => {
    cy.contains('Turing Cafe Reservations')
    cy.get('form')
      .find('input[type=text]')
    cy.get('form')
      .find('button')
      .first()
      .should('contain', 'Make Reservation')
    cy.get('.reservationCard')
      .should('have.length', 9)
      .last()
      .should('contain', 'Brittany')
      .should('contain', '9/9')
      .should('contain', '7:30 pm')
      .should('contain', 'Number of Guests: 3')
      .should('contain', 'Cancel')
  })

  it('should have a form where the user can input data', () => {
    cy.get('form')
      .find('input[placeholder=name]')
      .type('Joe')
      .should('have.value','Joe')
    cy.get('form')
      .find('input[placeholder=date]')
      .type('6/27')
      .should('have.value','6/27')
    cy.get('form')
      .find('input[placeholder=time]')
      .type('9:00')
      .should('have.value','9:00')
    cy.get('form')
      .find('input[placeholder=number]')
      .type('10')
      .should('have.value','10')
  })

  it('should allow the user to submit a reservation that is then displayed on the page', () => {
    cy.get('form')
      .find('input[placeholder=name]')
      .type('Joe')
    cy.get('form')
      .find('input[placeholder=date]')
      .type('6/27')
    cy.get('form')
      .find('input[placeholder=time]')
      .type('9:00')
    cy.get('form')
      .find('input[placeholder=number]')
      .type('10')

    cy.get('button')
      .first()
      .click()
    
    cy.get('.reservationCard')
      .should('have.length', 10)
      .first()
      .should('contain', 'Joe')
      .should('contain', '6/27')
      .should('contain', '9:00 pm')
      .should('contain', 'Number of Guests: 10')
  })

})