const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itelefone = document.querySelector(".tel");

function Cadastrar(){
	fetch("http://localhost:8080/usuarios",
		{
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({
				nome: Inome.value,
				email: Iemail.value,   
				senha: Isenha.value,   
				telefone: Itelefone.value
			})
		})
		.then(function(res) { console.log(res) })
		.catch(function(res) { console.log(res) })
};

function VisualizarUsuarios() {
    fetch("http://localhost:8080/usuarios", {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Erro ao recuperar usuários');
        }
        return response.json();
    })
    .then(function(data) {
        // Limpa o conteúdo existente da tabela
        document.getElementById("usuariosTable").getElementsByTagName('tbody')[0].innerHTML = "";

        // Loop pelos dados e adiciona uma linha para cada usuário na tabela
        data.forEach(function(usuario) {
            var tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.telefone}</td>
            `;
            document.getElementById("usuariosTable").getElementsByTagName('tbody')[0].appendChild(tableRow);
        });
    })
    .catch(function(error) {
        console.error('Erro:', error);
    });
}

function Limpar(){
	Inome.value = "",
	Iemail.value = "",   
	Isenha.value = "",   
	Itelefone.value = "";
};


document.getElementById("Cadastrar").addEventListener('click', function(event){
	event.preventDefault();
	Cadastrar();
	Limpar();
});

document.getElementById("visualizarUsuariosBtn").addEventListener('click', function(event){
    event.preventDefault(); // Evita o comportamento padrão de redirecionamento do link
	VisualizarUsuarios();
});