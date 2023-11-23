class companyPage {
    elements = {
        aboutUsBtn: () => cy.get('a[href="/about-us"]'),
        headerMenuCompanyBtn: () => cy.get('[data-cy="dropdown-company"]')
    }

    hoverHeaderCompany() {
        this.elements.headerMenuCompanyBtn().should("be.visible").trigger('mouseover');
    }

    clickAboutUs() {
        this.elements.aboutUsBtn().first().click();
    }
}

module.exports = new companyPage();