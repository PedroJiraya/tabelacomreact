📚 Componente StudentTable
Bem-vindo ao StudentTable! 🎉 Este é um componente React elegante e responsivo, estilizado com Tailwind CSS, que exibe uma tabela de alunos com informações dinâmicas. A renderização condicional dá vida ao componente, mostrando badges de status e notas finais com base na atividade do aluno. Perfeito para gerenciar turmas ou criar interfaces modernas! 😎



Espaço reservado para uma captura de tela da tabela em ação.

🚀 O que ele faz?
O StudentTable renderiza uma tabela com informações de alunos, incluindo:

Nome e Email com um avatar para um toque pessoal.
Status como um badge colorido (Ativo ou Inativo).
Nota 1 e Nota 2 para desempenho acadêmico.
Nota Final, calculada como a média arredondada das duas notas (limitada entre 0 e 5), exibida apenas para alunos ativos.
Mágica Condicional ✨:

Status: Mostra um badge verde "Ativo" se active for true, ou vermelho "Inativo" se false.
Nota Final: Para alunos ativos, calcula a média arredondada (Math.round(Math.min(5, Math.max(0, (grade1 + grade2) / 2)))); para inativos, exibe --.
🛠️ Estrutura do Código
Aqui está o código completo do componente com comentários explicativos:

jsx

Copiar
export const StudentTable = ({ students }) => {
  return (
    <div>
      {/* Contêiner da tabela com largura total, borda e cantos arredondados */}
      <table className="w-full border border-gray-600 rounded-md overflow-hidden">
        <thead>
          {/* Linha do cabeçalho com fundo escuro e borda */}
          <tr className="text-left border-b border-gray-600 bg-gray-800">
            <th className="p-3">Nome</th>
            <th>Status</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia o array de alunos para criar as linhas */}
          {students.map(item => (
            <tr
              key={item.id}
              className="text-gray-800 bg-white/90 border-b border-b-gray-600"
            >
              {/* Célula do nome com avatar, nome e email */}
              <td className="flex p-3 items-center">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src={item.avatar}
                  alt={item.name}
                />
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div>{item.email}</div>
                </div>
              </td>
              {/* Célula do status: Badge condicional */}
              <td>
                {item.active && (
                  <div className="p-1 bg-green-600 text-center rounded-md text-xs inline-block border-green-800 text-white">
                    Ativo
                  </div>
                )}
                {!item.active && (
                  <div className="p-1 bg-red-600 text-center rounded-md text-xs inline-block border-red-800 text-white">
                    Inativo
                  </div>
                )}
              </td>
              {/* Células das notas */}
              <td>{item.grade1}</td>
              <td>{item.grade2}</td>
              {/* Nota Final: Renderização condicional */}
              <td className="font-bold">
                {item.active &&
                  Math.round(
                    Math.min(5, Math.max(0, (item.grade1 + item.grade2) / 2))
                  )}
                {!item.active && '--'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Principais Recursos
Props: Recebe um array students, onde cada aluno tem id, name, email, avatar, active, grade1 e grade2.
Renderização Condicional:
Status: Badge verde para active: true, vermelho para active: false.
Nota Final: Para alunos ativos, calcula a média (grade1 + grade2) / 2, limita entre 0 e 5, e arredonda para o inteiro mais próximo. Para inativos, mostra --.
Estilização:
Usa Tailwind CSS para um design moderno e responsivo.
Tabela com cantos arredondados, bordas e fundo sutil.
Badges compactos com cores contrastantes.
Avatares circulares alinhados com o texto.
🎨 Estilização com Tailwind CSS
A tabela usa Tailwind CSS para um visual limpo e profissional:

Tabela: w-full border border-gray-600 rounded-md overflow-hidden garante largura total, borda cinza, cantos arredondados e sem transbordo.
Cabeçalho: bg-gray-800 border-b border-gray-600 cria um fundo escuro com borda separadora.
Linhas: bg-white/90 border-b border-b-gray-600 adiciona um fundo branco levemente transparente e bordas entre linhas.
Célula do Nome: flex items-center alinha o avatar e o texto de forma harmoniosa.
Badges de Status:
Ativo: bg-green-600 border-green-800 text-white para um verde vibrante.
Inativo: bg-red-600 border-red-800 text-white para um vermelho chamativo.
Nota Final: font-bold destaca o resultado calculado.
Isso torna a tabela responsiva, acessível e visualmente atraente! 😍

🧠 Renderização Condicional em Ação
O componente brilha com sua lógica condicional:

Badges de Status
jsx

Copiar
<td>
  {item.active && (
    <div className="p-1 bg-green-600 text-center rounded-md text-xs inline-block border-green-800 text-white">
      Ativo
    </div>
  )}
  {!item.active && (
    <div className="p-1 bg-red-600 text-center rounded-md text-xs inline-block border-red-800 text-white">
      Inativo
    </div>
  )}
</td>
Se item.active for true, exibe um badge verde "Ativo".
Se item.active for false, exibe um badge vermelho "Inativo".
Usa && para renderização condicional concisa.
Nota Final
jsx

Copiar
<td className="font-bold">
  {item.active &&
    Math.round(Math.min(5, Math.max(0, (item.grade1 + item.grade2) / 2)))}
  {!item.active && '--'}
</td>
Para active: true:
Calcula a média: (grade1 + grade2) / 2.
Limita entre 0 e 5 com Math.min(5, Math.max(0, ...)).
Arredonda para o inteiro mais próximo com Math.round.
Para active: false, exibe --.
Exemplo:

Aluno ativo com grade1 = 4.2, grade2 = 3.8:
Média: (4.2 + 3.8) / 2 = 4.0.
Limites: Math.max(0, 4.0) = 4.0, Math.min(5, 4.0) = 4.0.
Arredonda: Math.round(4.0) = 4.
Resultado: 4.
Aluno inativo: Mostra --.
🧪 Experimente Você Mesmo!
Quer ver o StudentTable em ação? Copie o código abaixo para um projeto React com Tailwind CSS e teste com seus próprios dados! 🚀

jsx

Copiar
import { StudentTable } from './StudentTable';

const sampleStudents = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@email.com',
    avatar: 'https://via.placeholder.com/40',
    active: true,
    grade1: 4.7,
    grade2: 3.9,
  },
  {
    id: 2,
    name: 'Maria Souza',
    email: 'maria@email.com',
    avatar: 'https://via.placeholder.com/40',
    active: false,
    grade1: 2.5,
    grade2: 3.0,
  },
];

function App() {
  return <StudentTable students={sampleStudents} />;
}

export default App;
Desafio Interativo
Adicione mais alunos ao array sampleStudents.
Teste notas fora do intervalo (ex.: grade1 = 7.0) e veja como a nota final é limitada a 5.
Mude o limite de arredondamento (ex.: use Math.round para >= 0.7) e observe o efeito.
Dica: Para configurar o Tailwind CSS, siga o guia oficial.

📋 Como Usar
Pré-requisitos:
Projeto React configurado.
Tailwind CSS instalado.
Estrutura dos Dados:
Passe um array students como prop, onde cada aluno tem:
javascript

Copiar
{
  id: number,
  name: string,
  email: string,
  avatar: string,
  active: boolean,
  grade1: number,
  grade2: number
}
Exemplo de Uso:
jsx

Copiar
<StudentTable students={yourStudentsArray} />
Personalização:
Modifique as classes Tailwind para ajustar cores, tamanhos ou layout.
Altere a lógica de arredondamento (ex.: use Math.floor para arredondar para baixo).
🌟 Por que é Incrível?
Dinâmico: A renderização condicional adapta a tabela ao status do aluno.
Bonito: Tailwind CSS garante um design moderno e consistente.
Flexível: Fácil de personalizar para outros casos de uso.
Educativo: Perfeito para aprender sobre React, Tailwind e lógica condicional!
