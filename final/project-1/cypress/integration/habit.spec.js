/// <reference types ="cypress" />

describe("habit dashboard", ()=>{

    beforeEach(()=> {

        cy.visit('http://localhost:3000/habits')
    })
  it("should shw pop up",() =>{
      cy.contains("button", "Add").click()
      cy.contains("Add a new habit").should("be.visible")

  })
  it("should dipslya hbait card when card added",()=>{
    cy.get("#habit-add-btn").click()
    cy.get(".form-control").type("love my wife")
    cy.get(".btn-primary").click()
    cy.contains("love my wife").should("be.visible")

  })
  it("show toggle when habit card is clicked",() =>{
    cy.get("#habit-add-btn").click()
    cy.get(".form-control").type("love my wife")
    cy.contains("Save Changes").click()
    cy.get("[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']").should("be.visible")
    cy.contains("ove my wife").click()
    cy.get("[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']").should("be.visible")
  })

  //it("showld not save when nothing is typed", ()=>{
   
    


  //})
  /*it("cancel", ()=>{
    cy.get("#habit-add-btn").click()
    cy.contains("Add a new habit").should("be.visible")
    cy.get(".btn-secondary").click()
    cy.contains("Add a new habit").should("not.be.visible")
  })
  */

    })
