# 📋 StudentTable

O **StudentTable** é um componente React com Tailwind CSS que exibe uma tabela de alunos de forma dinâmica e estilosa! 🎉 Ele mostra nomes, status e notas, com renderização condicional para badges e notas finais. Perfeito para gerenciar turmas! 😊

---

## ✨ O que faz?

Mostra uma tabela com:
- **Nome** e **email** com avatar.
- **Status**: Badge verde ("Ativo") ou vermelho ("Inativo").
- **Nota 1** e **Nota 2**.
- **Nota Final**: Média arredondada (0 a 5) para alunos ativos; `--` para inativos.

**Condições**:
- **Status**: Verde se `active: true`, vermelho se `false`.
- **Nota Final**: Calcula `(grade1 + grade2) / 2`, limita entre 0 e 5, arredonda com `Math.round`.

---

## 💻 Código

```jsx
export const StudentTable = ({ students }) => {
  return (
    <div>
      <table className="w-full border border-gray-600 rounded-md overflow-hidden">
        <thead>
          <tr className="text-left border-b border-gray-600 bg-gray-800">
            <th className="p-3">Nome</th>
            <th>Status</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <tr
              key={item.id}
              className="text-gray-800 bg-white/90 border-b border-b-gray-600"
            >
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
              <td>{item.grade1}</td>
              <td>{item.grade2}</td>
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