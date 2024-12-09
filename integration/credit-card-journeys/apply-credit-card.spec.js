describe('Apply for Credit Card', () => {
    it('Should successfully submit a credit card application', () => {
        cy.visit('/apply-credit-card');
        cy.get('#name').type('John Doe');
        cy.get('#dob').type('1990-01-01');
        cy.get('#ssn').type('123-45-6789');
        cy.get('#submit').click();
        cy.contains('Application submitted successfully').should('be.visible');
    });
});
