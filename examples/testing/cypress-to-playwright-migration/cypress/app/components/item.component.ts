export class ItemComponent {
  itemByNth = (eq: number) => cy.getByTestId("inventory-item").eq(eq);
  imgLinkByNumber = (num: number) => cy.getByTestId(`item-${num}-img-link`);
  titleLinkByNumber = (num: number) => cy.getByTestId(`item-${num}-title-link`);
  descByNumber = (num: number) => cy.get(`[data-test="item-${num}-title-link"] ~ inventory-item-desc`);
  itemByName = (name: string) => cy.get(`[data-test="inventory-item-name"]`).contains(name);
  addToCartByName = (name: string) => this.itemByName(name).parent().parent().parent().find("button").click();
  priceByName = (name: string) => this.itemByName(name).parent().parent().parent().find('[data-test="inventory-item-price"]');
}
