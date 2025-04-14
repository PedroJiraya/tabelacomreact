# 📋 StudentTable: Uma Tabela Dinâmica para Alunos

Bem-vindo ao **StudentTable**! 🎉 Esta é uma tabela estilosa que exibe informações de alunos de forma clara e interativa. Feita com React e Tailwind CSS, ela usa **renderização condicional** para adaptar o que mostra com base no status do aluno. Ideal para gerenciar turmas com um toque moderno! 😎

---

## 🌟 O que ela faz?

A tabela apresenta:
- **Nome e Email**: Com um avatar redondinho para cada aluno.
- **Status**: Um badge colorido indicando se o aluno está **Ativo** (verde) ou **Inativo** (vermelho).
- **Nota 1 e Nota 2**: As notas individuais do aluno.
- **Nota Final**: A média das notas, arredondada e limitada entre 0 e 5, mas só para alunos ativos!

---

## ✨ Como funciona?

A mágica está na **renderização condicional**:

### 🟢 Status
- **Aluno Ativo**: Aparece um badge verde brilhante com "Ativo".
- **Aluno Inativo**: Um badge vermelho avisa "Inativo".
- Tudo automático, dependendo do status do aluno!

### 📊 Nota Final
- Para **alunos ativos**:
  - Calcula a média: soma as duas notas e divide por 2.
  - Limita o resultado entre **0 e 5**.
  - Arredonda para o número inteiro mais próximo.
  - Exemplo: Notas 4.7 e 3.3 → Média 4.0 → Mostra **4**.
- Para **alunos inativos**:
  - Exibe apenas `--`, mantendo a tabela limpa.

---

## 🎨 Visual Incrível

Com **Tailwind CSS**, a tabela é um show à parte:
- **Design Moderno**: Bordas suaves, cantos arredondados e fundo claro.
- **Badges Vivos**: Verde para ativos, vermelho para inativos, com texto branco para contraste.
- **Alinhamento Perfeito**: Avatares e textos organizados para fácil leitura.
- **Responsiva**: Fica ótima em qualquer tela, do celular ao desktop!

---

## 🧪 Por que é especial?

- **Dinâmica**: Muda o conteúdo com base no status do aluno.
- **Intuitiva**: Mostra só o que importa, sem complicar.
- **Prática**: Ideal para sistemas escolares ou projetos educacionais.

---

## 🚀 Como experimentar?

Basta ter um projeto com React e Tailwind CSS! Passe uma lista de alunos com nome, email, avatar, status e notas, e a tabela faz o resto. Teste com notas altas ou baixas para ver como ela limita a nota final a 5 ou 0! 😊

---

Feito com 💙 por Pedro Pinheiro em Abril de 2025!
