// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
    cy.visit('./src/index.html')
    })



    it('verifica o título da aplicação', function() {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
       
    })

    it('Preenche os campos obrigatorios e envia o formulario', function(){
        const longText = 'Teste,test.test.teste,test,test,teste,este,test.test.teste,test,test,testeeste,test.test.teste,test,test,testeeste,test.test.teste,test,test,teste'
        cy.get('#firstName').type('Amanda')
        cy.get('#lastName').type('castro')
        cy.get('#email').type('amandacsi@gmail.com')
        cy.get('#open-text-area').type(longText,{ delay:0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
   
    it('exibe a mensagem de erro ao submeter o formulario com um email com formatação', function(){

        cy.get('#firstName').type('Amanda')
        cy.get('#lastName').type('castro')
        cy.get('#email').type('amandacsi@gmail,com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')

    })

    it('Campo telefone continua vazio quando nao preenchido com valores nao numericos',function(){
    cy.get('#phone')
    .type('abc')
    .should('have.value','')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatorio mas nao é preenchido',function(){
    cy.get('#firstName').type('Amanda')
    cy.get('#lastName').type('castro')
    cy.get('#email').type('amandacsi@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')

    })

    it('prenche e limpa os campos nome,sobrenome,email e telefone',function(){
    cy.get('#firstName').type('Amanda').should('have.value','Amanda').clear().should('have.value','')
    cy.get('#lastName').type('castro').should('have.value','castro').clear().should('have.value','')
    cy.get('#email').type('amandacsi@gmail.com').should('have.value','amandacsi@gmail.com').clear().should('have.value','')
    cy.get('#open-text-area').type('teste').should('have.value','teste').clear().should('have.value','')
   
    })

    it('mensagem de erro ao submenter sem campos obrigatorios',function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formulario com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')

    

    })


    it('exibe mensagem de erro quando o telefone se torna obrigatorio mas nao é preenchido,usando o contains' ,function(){
        cy.get('#firstName').type('Amanda')
        cy.get('#lastName').type('castro')
        cy.get('#email').type('amandacsi@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    
        })

    it('seleciona um produto (YouTube) por seu texto',function(){
        cy.get('#product').select('YouTube') 
        .should('have.value', 'youtube')
    })  
        
        it ('seleciona um produto pelo seu valor',function(){
            cy.get('#product').select('Mentoria') 
            .should('have.value', 'mentoria')
       
        })
        it ('seleciona um produto pelo seu valor',function(){
            cy.get('#product').select('Mentoria') 
            .should('have.value', 'mentoria')
        

    })   
         
    it('arca o tipo de atendimento "Feedback"',function(){
        cy.get('input[type="radio"][value="feedback"]').check() 
        .should('be.checked')
    
    }) 

    it('marca  todos tipos de atendimentos',function(){
        cy.get('input[type="radio"]')
        .should('have.length',3)
        .each(function($radio){
            cy.wrap($radio).check()//encapisula os dados
        cy.wrap($radio).should('be.checked')

        })
    
    }) 
 
    it('marca ambos checkboxes, depois desmarca o último',function(){
        cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')   
        
         
    }) 
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',function(){
        cy.get('#privacy a')
        .should('have.attr', 'target','_blank')   
        
         
    }) 
    
    it('acessa a página da política de privacidade removendo o target e então clicando no link',function(){
        cy.get('#privacy a')
        .invoke('removeAttr', 'target').click()
        
         
    }) 
     
    it.only('acessa a página da política de privacidade removendo o target e então clicando no link',function(){
        cy.get('#privacy a')
        .invoke('removeAttr', 'target').click()
        cy.contains('Talking About Testing').should('be.visible')
         
    }) 

})  





