/// <reference types ="cypress" />

describe("accomplishment dashboard", ()=> {
beforeEach(() => {

    cy.visit('http://localhost:3000/accomplishments')

})

 it("shoudl show error", ()=>{
    cy.get("[data-cy='accomplishment-title-input']").type("my football skills")
    cy.get("[data-cy='accomplishment-input']").type("playing ball")
    cy.contains("Submit Accomplishment").click()
    cy.contains("Complete the items above to continue").should("be.visible");

 })

 it("should display sucess page",()=> {
    cy.get("[data-cy='accomplishment-title-input']").type("my football skills")
    cy.get("[data-cy='accomplishment-input']").type("playing ball")
    cy.get ("[type ='checkbox']").click()
    cy.contains("Submit Accomplishment").click()
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")

 })

 it("should return to accomplishment homepage",()=> {
    cy.get("[data-cy='accomplishment-title-input']").type("my football skills")
    cy.get("[data-cy='accomplishment-input']").type("playing ball")
    cy.get ("[type ='checkbox']").click()
    cy.contains("Submit Accomplishment").click()
    cy.contains("Go Back").click()
    cy.contains("h2", "Accomplishment").should("be.visible")
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
    cy.get("[data-cy='accomplishment-input']").should("have.value", "")
    cy.get("[type='checkbox']").should("not.be.checked")
})
})