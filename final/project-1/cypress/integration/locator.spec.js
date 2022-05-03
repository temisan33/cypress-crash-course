/// <reference types ="cypress" />


describe ("locatoe", ()=> {

    beforeEach(() =>{
cy.visit('http://localhost:3000/elements')
    })
    it("locating elements", ()=>{
        // get all element by tag name 
        cy.get("button")  
      // get all element with calssname
        cy.get(".btn-with-class")
       // get all emement with specific classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes' ]")
        cy.get("[class='Elements-btn btn-with-class' ]")

        // get all element by id
        cy.get ('#btn-with-id')

        // get all element by specific attribute
        cy.get("[type = 'submit']")
        //get all elemeent with specific dara  test id

        cy.get("[data-cy = 'btn-id-1']")
    })
    it("locating item with contain", ()=>{
     // get element by text

     cy.contains("Unique Text")
     cy.contains("Not Unique Text")
     //contain using selector
     cy.contains("[type='submit']", "Not Unique Text")

     cy.get("[type='submit']") . contains('Not Unique Text')
     cy.get("#form-1").find(".btn-1")

    })
})