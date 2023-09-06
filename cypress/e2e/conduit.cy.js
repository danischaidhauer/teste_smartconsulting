describe('conduit', () => {
  it('cadastro um novo usuario', () => {
    cy.visit('http://localhost:4200/');
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
    cy.get('input[formcontrolname="username"]').type('borabora123');
    cy.get('input[formcontrolname="email"]').type('borabora@yopmail.com');
    cy.get('input[formcontrolname="password"]').type('teste123');
    cy.get('button[type="submit"]').click();

  })

  it('logar na plataforma', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(3000);
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(2) > .form-control').type('borabora@yopmail.com');
    cy.get(':nth-child(3) > .form-control').type('teste123');
    cy.get('.btn').click();
  })

  it('logout na plataforma', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(3000);
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(2) > .form-control').type('borabora@yopmail.com');
    cy.get(':nth-child(3) > .form-control').type('teste123');
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
    cy.get('.btn-outline-danger').scrollIntoView().click();
  })

  it('criar post', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(3000);
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(2) > .form-control').type('borabora@yopmail.com');
    cy.get(':nth-child(3) > .form-control').type('teste123');
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('teste');
    cy.get(':nth-child(2) > .form-control').type('teste1');
    cy.get(':nth-child(3) > .form-control').type('teste11');
    cy.get(':nth-child(4) > .form-control').type('teste');
    cy.get('.btn').click(); 

  })

  it('deletar post', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(3000);
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(2) > .form-control').type('borabora@yopmail.com');
    cy.get(':nth-child(3) > .form-control').type('teste123');
    cy.get('.btn').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(4) > .nav-link').click();
    cy.wait(2000);
    cy.get('.article-preview').click();
    cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger').click();

  })
  
})