// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display when number buttons are pressed', () => {
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '30')
  })

  it('should update display with result of operation', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '30')
    
  })
  it('should be able to chain multiple operations together', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '30')
  })

  it('should calculate negative result', () => {
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should calculate decimal result', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should calculate large result', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '9.991556073851864e+24')
  })

  it('should return undefined when divided by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'undefined')
  })
  
})
