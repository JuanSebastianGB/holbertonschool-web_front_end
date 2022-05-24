/**
 * Creates a blank table with header and bdy template
 */
const createFamilyTree = () => {
  const table = `
  <table>
    <thead>
      <tr>
          <th>Firstname</th>
          <th>Lastname</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  `;

  $('body').append(table);
};

/**
 * Add a new row to the table's body
 */
const addNewMember = (firstName, lastName) => {
  $('table tbody').append([
    $('<tr/>').append([
      $('<td/>', { text: firstName }),
      $('<td/>', { text: lastName }),
      $('<td/>').append([$('<span/>', { text: '(x)' }).addClass('element')]),
    ]),
  ]);
};

/**
 * Delete a selected row
 */
const deleteRow = () => {
  $('.element').click(function () {
    $(this).closest('tr').remove();
  });
};

$(document).ready(function () {
  createFamilyTree();
  addNewMember('Guillaume', 'Salva');
  addNewMember('Arielle', 'Snizt');
  addNewMember('Fanette', 'Snizt');
  addNewMember('Gerard', 'Snizt');
  addNewMember('Victor', 'Salva');

  deleteRow();
});
