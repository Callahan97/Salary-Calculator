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
        <td class="salary">${annualSalary}</td>
        <td><button onclick="removeEmployee(event)"> Remove </button></td>
     `
     monthlyWageReport();
};   

function removeEmployee(event){
    event.target.parentElement.parentElement.remove();
    monthlyWageReport();
};

function monthlyWageReport(){
    let sum = 0;
    let salaries = document.querySelectorAll('.salary');
    for (let i = 0; i < salaries.length; i++){
        sum += Number(salaries[i].textContent);
    
    }
    let monthlyPay = Math.floor(sum/12);
    let totalSalary = document.querySelector(".over-budget");
    let monthly =`Total Monthly Budget: $${monthlyPay}`
    document.querySelector(".over-budget").textContent = monthly;
    if (monthlyPay > 20000){
        totalSalary.style.backgroundColor = 'red';
    }
};

