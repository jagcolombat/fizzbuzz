export const getApp = () => cy.visit('/');
export const getAppTitle = () => cy.get('h1');
export const getSectionTitle = () => cy.get('h2');
export const getItems = (selector) => cy.get(selector);
