describe('Process Checkout Glitzi', () => {
  it('Open page Glitzi', () => {
    //Step 1: Acceder al sitio: https://li41-183.members.linode.com/
    cy.visit('https://li41-183.members.linode.com/')
    cy.wait(5000)
    cy.get('body').type('{esc}');

  })

  it('Login in Glitzi', () => {
    cy.wait(5000)
    //Step 2: Iniciar sesión con: mail17764@irondev.com.mx / 123456
    cy.get('#log-in-link_').click()
    cy.wait(5000)
    cy.get('#email').type('mail17764@irondev.com.mx');
    cy.get('#password').type('123456');
    cy.get('#submit-login').click()
  })

  it('Enter to module Servicios', () => {
    cy.wait(5000)
    cy.get("a.dropdown-toggle.nav-link.font-weight-bold.dropdown_services.d-none.d-md-block.d-lg-block.d-xl-block").click()
    cy.wait(5000)
    cy.get('body').type('{esc}');
  })


  it('Validation massage DIVA NAILS', () => {
    cy.wait(5000)
    //Step 3: Buscar el siguiente masaje: DIVA NAILS
    cy.get('body > div.main.main-raised > div > div:nth-child(2) > div > div > div > div > div:nth-child(6) > a > div > div.card-body.card-image-body > div > h3').click()
    cy.wait(5000)
    cy.get('body').type('{esc}');
    cy.wait(5000)
    cy.get("#service-606 > div > div.card-footer.justify-content-between").click()
    cy.wait(5000)
    cy.get("#view_more").click()
    //Step 4: Confirmar que la descripción del servicio se incluye ‘técnica brasileña’
    cy.contains("técnica brasileña")
    cy.wait(5000)
    //step 5: Agregar dos unidad al carrito
    cy.get("#service-selected > div > div.card-body > div:nth-child(2) > div.container > div > div > div > button.btn.btn-warning.btn-link.button-add-one.btn-sm.ml-2").click()
    cy.wait(5000)
    //Step 6: Reducir a una unidad el carrito y confirmar el cambio en el total
    cy.get("button.btn.btn-warning.btn-link.button-remove-one.btn-sm.mr-2").click()
    cy.get("#service-count").contains(1)
    cy.wait(5000)
    cy.get("#add-service").click()
    cy.get('body').type('{esc}');
    cy.get("ul.navbar-nav.h-auto.main_navbar.justify-content-center.d-none.d-md-flex.d-lg-flex.d-xl-flex.ml-auto > li:nth-child(4)").click()
    cy.get("#create-appointment").click()
    //Step 7: Programar la cita utilizando la dirección actual
    cy.get("#address-user > div > div > div > label > span").click()
    cy.get("#next").click()
    //Step 8 y 9: Seleccionar el día que quieras de Febrero como fecha, Seleccionar “Noche”
    cy.get("#li-night-tab-pane > a > i").click()
    cy.get("div:nth-child(4) > div.pignose-calendar-unit.pignose-calendar-unit-date.pignose-calendar-unit-mon").click()
    //Step 10: El horario debe ser 9:30 am (si no está disponible, cambia de día) y presiona seguir
    cy.get("#time-7 > div > button").click()
    cy.get("#next").click()
    //Step 11: Sin concluir la compra, ahora abre ‘Tu Bolsa’
    cy.get(" ul.navbar-nav.h-auto.main_navbar.justify-content-center.d-none.d-md-flex.d-lg-flex.d-xl-flex.ml-auto > li:nth-child(4) > a > div").click()
    //Step 12: Eliminar el servicio que agregaste con el botón ‘bote de basura’
    cy.get("#ml-service-606 > div.container-title.service.my-2 > div > div.col.d-flex.justify-content-between > div > div > button").click()
    cy.wait(5000)
    //Step 13: Abre nuevamente ‘Tu Bolsa’ para confirmar que no hay nada con el mensaje ‘TU BOLSA ESTÁ
    //VACÍA’
    cy.get(".container-empty-bag").should('not.contain', 'TU BOLSA ESTÁ VACÍA')
    cy.wait(4000)
    cy.get("ul.navbar-nav.h-auto.main_navbar.justify-content-center.d-none.d-md-flex.d-lg-flex.d-xl-flex.ml-auto > li:nth-child(5)").click()
    cy.get(" li.dropdown.nav-item.show > div > a:nth-child(3)").click()

  })



  
})