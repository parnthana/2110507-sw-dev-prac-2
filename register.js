function newRegister(
  companyName,
  boothSize,
  numChairs,
  tableCheckbox,
  contactName,
  contactNumber
) {
  this.companyName = companyName;
  this.boothSize = boothSize;
  this.numChairs = numChairs;
  this.includeTable = tableCheckbox;
  this.contactName = contactName;
  this.contactNumber = contactNumber;
}
document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    companyName = registrationForm["companyName"].value;
    boothSize = registrationForm["boothSize"].value;
    numChairs = parseInt(registrationForm["numChairs"].value);
    tableCheckbox = registrationForm["tableCheckbox"].checked;
    contactName = registrationForm["contactName"].value;
    contactNumber = registrationForm["contactNumber"].value;
    if (companyName === "") {
      alert("Please fill the Company Name");
      return;
    }
    if (numChairs != NaN && (numChairs < 1 || numChairs > 10)) {
      alert("Please fill number of the Chairs minimum 1 and maximum 10");
      return;
    }
    if (contactName === "" || /\d/.test(contactName)) {
      alert("Please fill the Contact Name or Correct the Contact Name");
      return;
    }
    if (contactNumber === "" || /[a-z]/i.test(contactNumber)) {
      alert("Please fill the Contact Number or Correct the Contact Number");
      return;
    }
    newReg = new newRegister(
      companyName,
      boothSize,
      numChairs || 0,
      tableCheckbox,
      contactName,
      contactNumber
    );
    console.log(newReg);
  });
});
