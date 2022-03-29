import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
let bPrice=0;
let bUnits =0;
let bName = null;
let bDiscount = 0;

Given('The user launch chrome broswer with {string}', (url) => {
    cy.visit(url)
})

When('The user select category as {string}',(category)=>{
    if (category=="Fiction")
        cy.get('[id="radioselect1"]').click()
    else{
        cy.get('[value="Drama"]').click()
    }
})
And('The user select {string} from the dropdown list',(name)=>{
    bName = name;
    cy.get(".bookoptions").select(name).should('have.value',name);
})

And('The user enters the units as {string}',(units)=>{
    bUnits = units;
    cy.get('[name="units"]').type(units);
})

And('The user enters the price as {string}',(price)=>{
    bPrice = price;
    cy.get('[name="price"]').type(price);
})
And('The user select discount checkbox',()=>{
    cy.get('[name="discount"]').click();
})
And ('The user enters {string} in discount',(discount)=>{
    bDiscount = discount;
    cy.get('[name="discountvalue"]').type(10);
}) 

And('The user click the submit button',()=>{
    cy.get('[name="submit"]').click();

})
Then('The transaction record will be generated', ()=>{
    let amount = bPrice*bUnits;
    let fAmount = amount;
    if(bDiscount!=0){
        fAmount = amount*(100-bDiscount)/100;
    }
    cy.get('tr').eq(0).should('contain',bName);
    cy.get('tr').eq(0).should('contain',bPrice);
    cy.get('tr').eq(0).should('contain',amount);
    cy.get('tr').eq(0).should('contain',fAmount);
})
Then('The user delete the transaction record',()=>{
    cy.get('[class="removeRecord"]').click();
})

Then('The user confirm to delete the record',()=>{
    cy.get('#deletedialog > button:nth-child(4)').click()
})