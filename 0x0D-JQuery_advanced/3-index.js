const createFamilyTree = () => {
  $('body').append([
    $('<table/>').append(
      [
        $('<thead/>').append([
          $('<tr/>').append([
            $('<th/>', {
              text: 'firstname',
            }),
            $('<th/>', {
              text: 'Lastname',
            }),
          ]),
        ]),
      ],
      $('<tbody/>').append([
        $('<tr/>').append([
          $('<td/>', {
            text: 'Guillaume',
          }),
          $('<td/>', {
            text: 'Salva',
          }),
        ]),
        $('<tr/>').append([
          $('<td/>', {
            text: 'Paulette',
          }),
          $('<td/>', {
            text: 'Salva',
          }),
        ]),
        $('<tr/>').append([
          $('<td/>', {
            text: 'Antoine',
          }),
          $('<td/>', {
            text: 'Salva',
          }),
        ]),
      ])
    ),
  ]);
};
$(document).ready(function () {
  createFamilyTree();
});
