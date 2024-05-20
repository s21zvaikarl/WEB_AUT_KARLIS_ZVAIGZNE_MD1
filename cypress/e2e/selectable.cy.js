import { selectablePage } from '../support/page_objects/selectablePage';

describe('Selectable Grid', () => {
  before(() => {
    selectablePage.visit();
  });

  it('highlights Two, Four, Six, Eight when clicked', () => {
    selectablePage.clickGrid();

    const numbersToSelect = ['Two', 'Four', 'Six', 'Eight'];
    numbersToSelect.forEach(number => {
      selectablePage.clickNumber(number);
    });

    selectablePage.verifyHighlighted(numbersToSelect);

    const numbersNotToSelect = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    selectablePage.verifyNotHighlighted(numbersNotToSelect);
  });
});
