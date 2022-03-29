describe('MyTestSuite', function(){
    it('wholesale user order',function(){
        cy.visit('https://react.simprocloud.com/build/index.html');
        cy.get("#radioselect1").click();
        cy.get(".bookoptions").select('Harry Potter').should('have.value','Harry Potter');
        cy.get('[name="units"]').type(50);
        cy.get('[name="price"]').type(12.50);
        cy.get('[name="submit"]').click();
        cy.get('#root > div > div.datacolumn1 > form > p').contains('Invalid price')
    })
    it('book-lover order', function(){
        cy.visit('https://react.simprocloud.com/build/index.html');
        cy.get('[value="Drama"]').click();
        cy.get(".bookoptions").select('The Rainbow').should('have.value','The Rainbow');
        cy.get('[name="units"]').type(1);
        cy.get('[name="price"]').type(125);
        cy.get('[name="discount"]').click();
        cy.get('[name="discountvalue"]').type(10);
        cy.get('[name="submit"]').click();
        cy.get('tr').eq(0).should('contain','The Rainbow');
        cy.get('tr').eq(0).should('contain','125');
    })
})