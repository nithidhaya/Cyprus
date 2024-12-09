describe('Make a Credit Card Payment', () => {
    it('Should successfully process payment', () => {
        cy.visit('/make-payment');
        cy.get('#card-number').type('4111111111111111');
        cy.get('#amount').type('100');
        cy.get('#submit').click();
        cy.contains('Payment successful').should('be.visible');
    });
});
