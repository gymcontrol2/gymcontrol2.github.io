function gerarAlunosIniciais() {
  const nomes = [
    "Ana Silva", "Bruno Souza", "Carla Oliveira", "Daniel Pereira", "Eduardo Costa",
    "Fernanda Gomes", "Gabriel Martins", "Helena Rocha", "Igor Alves", "Júlia Lima",
    "Karla Santos", "Lucas Ferreira", "Mariana Dias", "Natan Melo", "Olívia Barros",
    "Paulo Ribeiro", "Quésia Fernandes", "Rafael Carvalho", "Sabrina Monteiro", "Tiago Moreira",
    "Úrsula Duarte", "Vitor Henrique", "Wesley Castro", "Xavier Pacheco", "Yara Mendonça",
    "Zé Carlos", "Alice Moretti", "Bruna Faria", "Caio Henrique", "Débora Luz",
    "Emanuel Costa", "Fabiana Prado", "Gustavo Almeida", "Heloísa Rocha", "Isabela Nunes",
    "João Pedro", "Karen Silva", "Leonardo Gomes", "Marta Vasconcelos", "Nelson Reis",
    "Patrícia Fonseca", "Ricardo Alves", "Sandra Lima", "Thiago Barbosa", "Vanessa Santos",
    "Wagner Moura", "Ximena Rocha", "Yuri Ferreira", "Zilda Costa", "André Luiz",
    "Bianca Lopes", "César Moura", "Diana Paiva", "Eduarda Ribeiro", "Felipe Souza",
    "Giovana Mendes", "Henrique Barros", "Isadora Lima", "Júlio César", "Kátia Melo",
    "Leonor Figueiredo", "Márcio Tavares", "Natália Couto", "Otávio Martins", "Priscila Fernandes",
    "Rômulo Silva", "Sônia Pereira", "Tiago Santos", "Valéria Almeida", "William Dias"
  ];

  const alunos = nomes.map((nome, index) => {
    const email = nome.toLowerCase().replace(/ /g, '.') + '@exemplo.com';
    const telefone = '(11) 9' + String(Math.floor(Math.random() * 90000000) + 10000000);
    const frequencia = Math.floor(Math.random() * 51) + 50; // 50% a 100%
    const mensalidadePaga = Math.random() < 0.8;  // 80% chance de true
    const ativo = Math.random() < 0.85;           // 85% chance de true

    return {
      id: `AL${index + 1}`,
      nome,
      email,
      telefone,
      frequencia,
      mensalidadePaga,
      ativo
    };
  });

  return alunos;
}

function inicializarAlunos() {
  if (!localStorage.getItem('listaAlunos')) {
    const alunosIniciais = gerarAlunosIniciais();
    localStorage.setItem('listaAlunos', JSON.stringify(alunosIniciais));
    console.log('Lista inicial de 70 alunos salva no localStorage.');
  }
}

inicializarAlunos();
