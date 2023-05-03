$('#gModal').on('shown.bs.modal', function () {
    if ($('#gModalFocus').length) {
        $('#gModalFocus').trigger('focus')
    } else {
        $('#gModalBody').trigger('focus')
    }

})

function gModalShow(title='', body='', nBtnLabel='Close', yBtnLabel='Ok', yBtnOnClick='') {
    footer = [
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${nBtnLabel}</button>`,
            `<button type="button" class="btn btn-primary" onclick="${yBtnOnClick}">${yBtnLabel}</button>`
        ].join('')
    $('#gModalTitle').html(title)
    $('#gModalBody').html(body)
    $('#gModalFooter').html(footer)
    $('#gModal').modal('show')
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}