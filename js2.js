
document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var points = parseFloat(document.getElementById("points").value);
    var assignment = parseFloat(document.getElementById("assignment").value);
    var notebook = parseFloat(document.getElementById("notebook").value);

    if (isNaN(points) || isNaN(assignment) || isNaN(notebook)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    var average = (points + assignment + notebook) / 3;
    var mention;

    if (average <= 4) {
        mention = "I - Insuficiente";
    } else if (average >= 4.1 && average <= 5.9) {
        mention = "R - Regular";
    } else if (average >= 6 && average <= 9.4) {
        mention = "B - Bom";
    } else if (average >= 9.5 && average <= 10) {
        mention = "MB - Muito Bom";
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Sua Média foi: " + average.toFixed(2) + "</p><p>Menção: " + mention + "</p>";
});


// JavaScript
function adicionarTarefa() {
    var novaTarefaInput = document.getElementById('novaTarefa');
    var novaTarefa = novaTarefaInput.value;

    if (novaTarefa.trim() !== '') {
        var listaTarefas = document.getElementById('listaTarefas');
        var novaTarefaItem = document.createElement('li');
        novaTarefaItem.innerText = novaTarefa;
        novaTarefaItem.onclick = function() {
            this.classList.toggle('completed');
        };
        listaTarefas.appendChild(novaTarefaItem);
        novaTarefaInput.value = '';
    }
}

function removerTarefa() {
    var tarefas = document.querySelectorAll('#listaTarefas li');

    for (var i = 0; i < tarefas.length; i++) {
        if (tarefas[i].classList.contains('completed')) {
            tarefas[i].parentNode.removeChild(tarefas[i]);
        }
    }
}


 function addToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    

    function calculate() {
        let expression = document.getElementById('display').value;
        try {
            let result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
