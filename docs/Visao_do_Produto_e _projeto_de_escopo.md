# Omega (Ω) - Visão do Produto e Projeto

## Versão 1.1

---

## Equipe

| Matrícula   | Nome                                 | Função                     |
|--------------|--------------------------------------|----------------------------|
| 231011892    | Arthur Sismene Carvalho             | Desenvolvedor Frontend     |
| 221022480    | Carlos Henrique de Paiva Munis      | Desenvolvedor Frontend     |
| 231030691    | Guilherme Ferreira Brandao          | Desenvolvedor Backend      |
| 232002996    | Heyttor Augusto de Assis Silva      | Desenvolvedor Backend      |
| 202045348    | Ingrid Alves Rocha                  | Dono do Produto            |
| 232003661    | João Pedro Araujo de Freitas Lyra   | Líder e Dono do Produto    |
| 222022135    | Letícia de Carvalho dos Santos      | Analista de Qualidade      |
| 211045178    | Luis Guilherme Borges Monteiro      | Analista de Qualidade      |
| 221007608    | Nayra Silva Nery                    | Analista de Testes         |
| 211031440    | Pedro Gomes Oliveira                | Analista de Testes         |
| 232024026    | Rivadalvio Joaquim da Silva Filho   | Cliente                    |
| 232014271    | Yasmin Sousa Abdon                  | Cliente                    |

---

## Sumário

1. [Visão Geral do Produto](#visão-geral-do-produto)  
   1.1 [Problema](#problema)  
   1.2 [Declaração de Posição do Produto](#declaração-de-posição-do-produto)  
   1.3 [Objetivos do Produto](#objetivos-do-produto)  
   1.4 [Tecnologias Utilizadas](#tecnologias-utilizadas)  
2. [Visão Geral do Projeto](#visão-geral-do-projeto)  
   2.1 [Ciclo de Vida](#ciclo-de-vida)  
   2.2 [Organização do Projeto](#organização-do-projeto)  
   2.3 [Planejamento das Fases](#planejamento-das-fases)  
   2.4 [Matriz de Comunicação](#matriz-de-comunicação)  
   2.5 [Gerenciamento de Riscos](#gerenciamento-de-riscos)  
   2.6 [Critérios de Replanejamento](#critérios-de-replanejamento)  
3. [Processo de Desenvolvimento de Software](#processo-de-desenvolvimento-de-software)  
4. [Declaração de Escopo do Projeto](#declaração-de-escopo-do-projeto)  
5. [Métricas e Medições](#métricas-e-medições)  
6. [Testes de Software](#testes-de-software)  
7. [Referências Bibliográficas](#referências-bibliográficas)  

---

## Visão Geral do Produto

### Problema

A aplicação busca enfrentar o problema da falta de alfabetização e domínio de matemática básica entre jovens e adultos de 15 a 21 anos, um desafio significativo segundo o IBGE (2022) e o PISA (2023).

### Declaração de Posição do Produto

- **Para:** Jovens de 15 a 21 anos com dificuldades de alfabetização e matemática.  
- **Nosso produto:** Um app mobile chamado Omega (Ω) para ensino básico.  
- **Necessidade:** Contribuir para o combate ao analfabetismo e anumerismo.  
- **Diferencial:** Solução prática, acessível, lúdica e de fácil acesso por smartphone.

### Objetivos do Produto

- **Principal:** Reduzir o analfabetismo e anumerismo.  
- **Secundário:** Motivar o retorno aos estudos de forma divertida e acessível.

### Tecnologias Utilizadas

- **Frontend:** React Native + TypeScript  
- **Backend:** Node.js + TypeScript + SQL  
- **Ambiente:** GitHub, VSCode, Docker

---

## Visão Geral do Projeto

### Ciclo de Vida

Utilização de metodologias ágeis (Scrum + XP) com desenvolvimento incremental, sprints, backlog e testes contínuos.

### Organização do Projeto

| Papel                 | Atribuições                                  | Responsáveis                           |
|-----------------------|----------------------------------------------|-----------------------------------------|
| Desenvolvedor Frontend | UI, integração com API, acessibilidade      | Arthur, Carlos                         |
| Desenvolvedor Backend  | APIs, banco de dados, autenticação          | Guilherme, Heyttor                     |
| Dono do Produto        | Escopo, priorização, validação das entregas | João Pedro, Ingrid                     |
| Analista de Qualidade  | Garantia da qualidade                      | Letícia, Luis                          |
| Analista de Testes     | Testes manuais e automáticos               | Nayra, Pedro                           |
| Cliente                | Definir requisitos, feedback, validação     | Rivadalvio, Yasmin                     |

### Planejamento das Fases

- **Sprint 1:** Definição do app, documentação inicial.  
- **Sprint 2:** MVP e planejamento.  
- **Sprint 3:** Estruturação de repositório e organização inicial.  
- **Sprint 4+:** Desenvolvimento contínuo.

### Matriz de Comunicação

- **Reuniões semanais:** acompanhamento das atividades e riscos.  
- **Relatórios:** situação do projeto, atas e feedbacks.  
- **Equipe:** comunicação constante com professores e monitores.

### Gerenciamento de Riscos

- **Principais Riscos:** atrasos, bugs, baixa participação da equipe, má gestão do tempo.  
- **Mitigações:** cronograma realista, testes constantes, reuniões frequentes.

### Critérios de Replanejamento

- **Atraso de Sprint:** < 70% entregue → revisão de escopo.  
- **Débito técnico elevado:** >20% → sprint para correção.  
- **Baixa usabilidade:** feedback negativo → redesenho da UI.  
- **Problemas técnicos:** alternativas ou refatoração.  

---

## Processo de Desenvolvimento de Software

- **Metodologias:** Scrum + XP  
- **Backend:** Node.js + TypeScript + PostgreSQL  
- **Frontend:** React Native + Expo  
- **Ferramentas:** GitHub, VSCode, Docker

---

## Declaração de Escopo do Projeto

### Perfis

| Perfil        | Permissões                                                       |
|----------------|------------------------------------------------------------------|
| **Aluno**      | Acesso às aulas e exercícios                                    |
| **Administrador** | Gerenciar usuários e conteúdos educacionais                  |

### Cenários

| Nº | Cenário                   | Sprint |
|----|----------------------------|--------|
| 01 | Cadastro e Login           | 1      |
| 02 | Realização de Atividades   | 2      |
| 03 | Sistema de Progresso       | 2      |
| 04 | Gerenciamento de Conteúdo  | 3      |
| 05 | Testes e Geração do APK    | 4      |

### Backlog

| Nº  | Sprint | Requisito               | Tipo        | Priorização | Descrição                                                                              |
|-----|--------|--------------------------|-------------|-------------|----------------------------------------------------------------------------------------|
| 1.1 | 1      | Cadastro de Usuário      | Funcional   | Must        | Cadastro por e-mail e senha                                                            |
| 1.2 | 1      | Login                    | Funcional   | Must        | Login por e-mail e senha                                                               |
| 2.1 | 2      | Questões de Português    | Funcional   | Must        | Três níveis: gramática, pontuação e interpretação                                     |
| 2.2 | 2      | Questões de Matemática   | Funcional   | Must        | Três níveis: tabuada, fração/divisão, expressões numéricas                            |
| 3.1 | 3      | Sistema de Progresso     | Funcional   | Must        | Salvar progresso do usuário                                                            |
| 3.2 | 3      | Sistema de Correção      | Funcional   | Must        | Feedback de acertos/erros com cores e repetição se necessário                          |
| 4.1 | 4      | Painel do Administrador  | Funcional   | Should      | Gerenciar conteúdos                                                                    |
| 4.2 | 4      | Aba de Créditos          | Não Funcional | Should      | Informações sobre as fontes das questões                                               |
| 5.1 | 5      | Testes Finais / APK      | Funcional   | Must        | Testes gerais, geração do APK                                                          |
| 5.2 | 5      | Modo Offline             | Não Funcional | Could       | Funcionamento parcial sem internet                                                     |

---

## Métricas e Medições

- **Taxa de conclusão de atividades**  
- **Tempo médio por sessão**  
- **Palavras e operações aprendidas semanalmente**  
- **Churn rate (tempo até abandono)**  
- **Feedback qualitativo de usuários e educadores**

---

## Testes de Software

- **Níveis:** Unitário, Integração, Sistema, Aceitação  
- **Tipos:** Funcionais, Usabilidade, Desempenho, Segurança, Acessibilidade  
- **Ambientes:** Local, CI/CD, Pré-produção, Dispositivos físicos  

### Métricas do SonarQube

- **Cobertura de Código:** ≥ 80%  
- **Bugs Críticos:** 0  
- **Vulnerabilidades:** 0  
- **Code Smells:** < 20 por 1000 linhas  
- **Duplicação de Código:** < 5%  

---

## Referências Bibliográficas

- IBGE. Censo 2022: [link](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/40098-censo-2022-taxa-de-analfabetismo-cai-de-9-6-para-7-0-em-12-anos-mas-desigualdades-persistem)  
- TOKARNIA, Mariana. Pisa e Matemática no Brasil: [link](https://agenciabrasil.ebc.com.br/educacao/noticia/2023-12/resultados-do-pisa-reforcam-gargalo-no-ensino-de-matematica-no-brasil)

---
