let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let day;
let mes;


// Carregar compromissos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentMonth, currentYear); // Gerar o calendário para o mês atual
});

// Função para gerar o calendário
function generateCalendar(month, year) {
    mes = month;
    const monthYearElement = document.getElementById('monthYear');
    monthYearElement.innerText = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let date = 1;
    let nextDate = 1;
    let hasCurrentMonthDays = false;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        hasCurrentMonthDays = false; // Reset for each row

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                const prevMonthDate = daysInPrevMonth - firstDay + j + 1;
                const button = document.createElement('button');
                button.innerText = prevMonthDate;
                button.classList.add('prev-month');
                button.disabled = true; // Optional: Disable buttons for previous month
                cell.appendChild(button);
            } else if (date > daysInMonth) {
                const button = document.createElement('button');
                button.innerText = nextDate;
                button.classList.add('next-month');
                button.disabled = true; // Optional: Disable buttons for next month
                cell.appendChild(button);
                nextDate++;
            } else {
                const button = document.createElement('button');
                button.innerText = date;

                // Verifica se o dia atual é igual ao dia gerado e destaca com a cor azul
                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    button.style.backgroundColor = 'blue'; // Define a cor de fundo azul para o dia atual
                    button.style.color = 'white'; // Opcional: Define a cor do texto como branca para melhor contraste
                }

                button.addEventListener('click', () => {
                    horarios.innerHTML = "";
                    const selectedButton = document.querySelector('.selected');
                    if (selectedButton) {
                        selectedButton.classList.remove('selected');
                    }
                    button.classList.add('selected');
                    day = +button.textContent;
                });

                cell.appendChild(button);
                date++;
                hasCurrentMonthDays = true; // Set to true when there's a day from the current month
            }
            row.appendChild(cell);
        }
        // Only append the row if it contains at least one current month day
        if (hasCurrentMonthDays) {
            calendarBody.appendChild(row);
        }
    }
}

// Função para avançar para o próximo mês
function nextMonth() {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    generateCalendar(currentMonth, currentYear);
}

// Função para voltar para o mês anterior
function prevMonth() {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    generateCalendar(currentMonth, currentYear);
}

// Adicionar event listeners para os botões de próxima e anterior mês
document.getElementById('nextMonth').addEventListener('click', nextMonth);
document.getElementById('prevMonth').addEventListener('click', prevMonth);

// as

// Função para abrir o modal e escurecer o fundo
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Mostra a janela modal
    document.body.style.overflow = 'hidden'; // Evita rolar a página ao fundo
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta a janela modal
    document.body.style.overflow = 'auto'; // Restaura a rolagem da página
}

// Event listener para abrir o modal ao clicar em um dia do calendário
document.querySelectorAll('.calendar button').forEach(button => {
    button.addEventListener('click', openModal);
});

// Event listener para fechar o modal ao clicar no botão "X"
document.getElementById('closeModal').addEventListener('click', closeModal);

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});
