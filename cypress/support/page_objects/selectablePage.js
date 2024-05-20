class SelectablePage {
    visit() {
      cy.visit('https://demoqa.com/selectable');
    }
  
    clickGrid() {
      cy.contains('Grid').click();
    }
  
    clickNumber(number) {
      cy.contains(number).click();
    }
  
    verifyHighlighted(numbers) {
      numbers.forEach(number => {
        cy.contains(number).should('have.class', 'active');
      });
    }
  
    verifyNotHighlighted(numbers) {
      numbers.forEach(number => {
        cy.contains(number).should('not.have.class', 'active');
      });
    }
  }
  
  export const selectablePage = new SelectablePage();
  