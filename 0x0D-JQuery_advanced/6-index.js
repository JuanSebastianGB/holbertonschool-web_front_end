/**
 * Creates a blank table with header and bdy template
 */
const createFamilyTree = () => {
  const table = `
  <div class='table-container'>
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
  </div>
  `;

  $('body').append(table);
};

/**
 * Add a new row to the table's body
 */
const addNewMember = (firstName, lastName, position) => {
  if (position === 'before')
    $('table tbody').prepend([
      $('<tr/>').append([
        $('<td/>', { text: firstName }),
        $('<td/>', { text: lastName }),
        $('<td/>').append([$('<span/>', { text: '(x)' }).addClass('element')]),
      ]),
    ]);
  else
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

const createForm = () => {
  $('.table-container').prepend([
    $('<input id="name"/>').attr('type', 'text'),
    $('<input id="lastName"/>').attr('type', 'text'),
    $('<select id="position"/>').append([
      $('<option value="before"/>').text('Before'),
      $('<option value="after"/>').text('After'),
    ]),
    $(`<input type="submit"/>`).text('Submit'),
  ]);

  $("input[type='submit']").click(function () {
    const position = $('#position').val();
    const firstName = $('#name').val();
    const lastName = $('#lastName').val();
    if (firstName && lastName) addNewMember(firstName, lastName, position);
    else alert('Data required');
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
  createForm();
});
