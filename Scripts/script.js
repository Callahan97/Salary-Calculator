function addEmployee(event){
    event.preventDefault();
    const form = document.querySelector('form');
    const firstName = form.querySelector('[data-testid="firstNameInput"]').value;
    const lastName = form.querySelector('[data-testid="lastNameInput"]').value;
    const idCode = form.querySelector('[data-testid="idInput"]').value;
    const jobTitle = form.querySelector('[data-testid="titleInput"]').value;
    const annualSalary = Number(form.querySelector('[data-testid="annualSalaryInput"]').value);


    const table = document.querySelector('table');
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idCode}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onclick="removeEmployee(event)"> Remove </button></td>
     `
};   

function removeEmployee(event){
    event.target.parentElement.parentElement.remove();
};