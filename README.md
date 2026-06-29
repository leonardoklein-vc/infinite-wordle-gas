# 🕹️ Dito Infinito (Infinite Word Game)

![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Um jogo de adivinhação de palavras inspirado nos clássicos "Wordle", "Termo" e "Palavra do Dia", mas com uma diferença fundamental: **sem limite de uma palavra por dia**. Jogue quantas vezes quiser.

---

## 🎯 A Motivação

Jogos de palavras diários são excelentes para o raciocínio, mas a limitação de "uma jogada a cada 24 horas" pode ser frustrante para quem quer apenas passar o tempo. 

O **Dito Infinito** foi desenvolvido como um *pet project* para quebrar essa barreira, utilizando exclusivamente o ecossistema do Google Workspace como infraestrutura (Serverless), provando que é possível criar interfaces bonitas, responsivas e gamificadas dentro do Google Sheets.

---

## ✨ Funcionalidades (Features)

*   **Gameplay Infinito:** Acertou ou errou? Clique em "Próxima Palavra" e o jogo sorteia instantaneamente outro desafio.
*   **Banco de Dados Integrado (10k+ Palavras):** O backend se conecta a um repositório Git externo, baixa e filtra mais de 10.000 palavras em português (com exatamente 5 letras) e as armazena no Google Sheets.
*   **Temas Dinâmicos (CSS Variables):** Troque a interface em tempo real sem recarregar a página. Modos disponíveis: *Midnight*, *Glass*, *Neon* e *Coffee*.
*   **Animações Nativas:** Efeitos de *flip* nas letras, *shake* para palavras inválidas e *pop* ao digitar, construídos inteiramente com CSS keyframes para máxima performance.
*   **Teclado Virtual e Físico:** Jogue pelo celular tocando na tela ou pelo desktop usando o teclado físico (Event Listeners integrados).

---

## ⚙️ Arquitetura e Stack Tecnológico

O projeto utiliza o padrão de separação de responsabilidades (HTML, CSS e JS modularizados) mesmo dentro das limitações do Google Apps Script.

| Tecnologia | Aplicação no Projeto |
| :--- | :--- |
| **Google Apps Script (GAS)** | Backend serverless, sorteio de palavras e validação de existência. |
| **Google Sheets** | Atua como um banco de dados NoSQL leve (`BD_Palavras`). |
| **Vanilla JavaScript** | Lógica do frontend (controle de tentativas, cronômetro e renderização do grid). |
| **CSS3** | Glassmorphism, CSS Grid para o layout e variáveis (`:root`) para troca de temas. |

---

## 📸 Screenshots
<img width="456" height="641" alt="dito5" src="https://github.com/user-attachments/assets/47949d50-0500-4437-815c-cdd6be08a153" />
<img width="450" height="628" alt="dito4" src="https://github.com/user-attachments/assets/15258d33-8ded-4f01-bc3a-741d474f3877" />
<img width="440" height="647" alt="dito2" src="https://github.com/user-attachments/assets/4a17bab6-e940-4156-804a-b3a94189589a" />
<img width="456" height="641" alt="dito3" src="https://github.com/user-attachments/assets/e615a526-7f2f-4381-9aeb-316c02f3b0dd" />

