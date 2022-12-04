Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    
    cy.get('#firstName').type('Amanda')
    cy.get('#lastName').type('castro')
    cy.get('#email').type('amandacsi@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
    

})