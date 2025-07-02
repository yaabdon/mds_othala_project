# Documento de Arquitetura - Omega (Ω)

## Versão 1.0

---

## Histórico de Revisão

| Data       | Versão | Descrição                                      | Autor(es)                                                                                                  |
|-------------|--------|------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| 22/05/2025  | 0.1    | Início do documento                            | João Pedro, Heyttor, Leticia, Pedro, Yasmin, Luis, Guilherme, Ingrid, Rivadalvio, Nayra, Carlos           |
| 26/05/2025  | 1.0    | Tópico 1.1 Propósito                           | Leticia                                                                                                    |
| 26/05/2025  | 1.0    | Tópico 1.2 Escopo                              | Leticia                                                                                                    |
| 26/05/2025  | 1.0    | Tópico 2.1 Definições                           | Guilherme                                                                                                  |
| 26/05/2025  | 1.0    | Tópico 2.2 Justificativa                         | Guilherme                                                                                                  |
| 26/05/2025  | 1.0    | Tópico 2.3 Detalhamento                          | Yasmin                                                                                                     |
| 26/05/2025  | 1.0    | Tópico 2.4 Metas e Restrições                    | Yasmin, Guilherme                                                                                          |
| 26/05/2025  | 1.0    | Tópico 2.5 Visão de Casos de uso                 | Heyttor                                                                                                    |
| 26/05/2025  | 1.0    | Tópico 2.6 Visão Lógica                          | Nayra                                                                                                      |
| 26/05/2025  | 1.0    | Tópico 2.7 Visão de Implementação                | Pedro                                                                                                      |
| 26/05/2025  | 1.0    | Tópico 2.8 Visão de Implantação                  | João Pedro                                                                                                 |
| 26/05/2025  | 1.0    | Tópico 2.9 Restrições adicionais                 | Leticia, Luis                                                                                              |
| 27/05/2025  | 1.1    | Tópico 2.3 - Diagrama do Detalhamento            | Yasmin, Ingrid                                                                                             |

Fonte: os autores

---

## Autores

| Matrícula   | Nome                                  | Papel                         | Contribuição (%) |
|--------------|---------------------------------------|-------------------------------|-------------------|
| 231011892    | Arthur Sismene Carvalho              | Desenvolvedor Frontend        | 8%             |
| 221022480    | Carlos Henrique de Paiva Munis       | Desenvolvedor Frontend        | 8%             |
| 231030691    | Guilherme Ferreira Brandao           | Desenvolvedor Backend         | 9%             |
| 232002996    | Heyttor Augusto de Assis Silva       | Desenvolvedor Backend         | 8%             |
| 202045348    | Ingrid Alves Rocha                   | Dono do Produto               | 8%             |
| 232003661    | João Pedro Araujo de Freitas Lyra    | Líder e Dono do Produto       | 9%             |
| 222022135    | Leticia de Carvalho dos Santos       | Analista de Qualidade         | 9%            |
| 211045178    | Luis Guilherme Borges Monteiro       | Analista de Qualidade         | 8%            |
| 221007608    | Nayra Silva Nery                     | Analista de Testes            | 8%            |
| 211031440    | Pedro Gomes Oliveira                 | Analista de Testes            | 8%             |
| 232024026    | Rivadalvio Joaquim da Silva Filho    | Cliente                       | 8%            |
| 232014271    | Yasmin Sousa Abdon                   | Cliente                       | 9%           |

---

## Sumário

1. [Introdução](#1-introducao)  
   1.1 [Propósito](#11-proposito)  
   1.2 [Escopo](#12-escopo)  

3. [Representação Arquitetural](#2-representacao-arquitetural)  
   2.1 [Definições](#21-definicoes)  
   2.2 [Justificativa](#22-justificativa)  
   2.3 [Detalhamento](#23-detalhamento)  
   2.4 [Metas e Restrições](#24-metas-e-restricoes-arquiteturais)  
   2.5 [Visão de Casos de Uso](#25-visao-de-casos-de-uso-escopo-do-produto)  
   2.6 [Visão Lógica](#26-visao-logica)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.1 [Organização dos Módulos](#261-organizacao-dos-modulos)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.2 [Comunicação entre Módulos](#262-comunicacao-entre-modulos)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.3 [Frontend ↔ Banco de Dados (PostgreSQL)](#263-frontend--banco-de-dados-postgresql)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.4 [Componentes Internos do Frontend](#264-componentes-internos-do-frontend)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.5 [Diagrama de Estados](#265-diagrama-de-estados)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.6 [Diagrama de Atividades da Aplicação](#266-diagrama-de-atividades-de-aplicacao)  
&nbsp;&nbsp;&nbsp;&nbsp;2.6.7 [Diagrama de Classes](#267-diagrama-de-classes)  
   2.7 [Visão de Implementação](#27-visao-de-implementacao)  
   2.8 [Visão de Implantação](#28-visao-de-implantacao)  
   2.9 [Restrições Adicionais](#29-restricoes-adicionais)  

5. [Bibliografia](#bibliografia)



---

## 1 Introdução

### 1.1 Propósito

Este documento descreve a arquitetura do sistema sendo desenvolvido pelo grupo, na disciplina de MDS – Métodos de Desenvolvimento de Software – edição do primeiro semestre de 2025, para o sistema Omega, a fim de fornecer uma visão abrangente do sistema para desenvolvedores, testadores e demais interessados em aspectos relacionados às tecnologias a serem usadas no desenvolvimento.

### 1.2 Escopo

O detalhamento do escopo se encontra no documento  MDS-2025.1 -Visão do Produto e Projeto Escopo juntamente com o documento de Visão do produto e do projeto. Porém, em linhas gerais o escopo do produto compreende o desenvolvimento de um aplicativo móvel educativo voltado para jovens e adultos entre 15 e 21 anos que apresentam dificuldades em regras da língua portuguesa, interpretação de texto, multiplicação, divisão, fração e expressões numéricas . Pois de acordo com a Organização das Nações Unidas (ONU), o acesso à educação básica é um dos pilares mais importantes para romper ciclos de pobreza, ampliar oportunidades no mercado de trabalho, garantir participação ativa na sociedade e fomentar o desenvolvimento sustentável (ONU, 2015; UNESCO, 2019).O app contará com atividades interativas organizadas em níveis progressivos ( de 1 a 3), para um total de 3 assuntos, cada um com 3 questões. O sistema acompanhará o progresso do usuário, promovendo um aprendizado acessível, inclusivo e motivador. Não estão previstos recursos avançados como chat, funcionalidades offline complexas ou integração com sistemas externos, com exceção de um arquivo de texto.

---

## 2 Representação Arquitetural

### 2.1 Definições

O aplicativo utiliza uma Arquitetura Monolítica em Camadas, na qual todo o código é executado no client, utilizando React Native. Embora seja uma arquitetura monolítica, há uma organização clara das responsabilidades dentro do sistema. A interface do usuário é composta por telas e componentes visuais, enquanto a lógica de negócio é tratada por meio de funções, hooks e manipulação de dados. O armazenamento é realizado utilizando o PostgreSQL, com o backend integrado ao mesmo projeto, porém organizado em uma pasta separada denominada "API". A comunicação entre o frontend e o backend ocorre através do uso da biblioteca Axios, permitindo a troca eficiente de informações entre as camadas da aplicação.

### 2.2 Justificativa

De acordo com Fowler (2006), a arquitetura monolítica é adequada para sistemas com baixa complexidade, onde a escalabilidade não é uma prioridade imediata. Essa escolha é justificada pela simplicidade e facilidade de manutenção que o projeto Omega (Ω) oferece. Também levamos em conta sua agilidade e simplicidade, facilitando o desenvolvimento e a manutenção de um aplicativo simples A integração entre frontend e backend em um único repositório torna o fluxo de trabalho mais rápido. 

**Matriz de Responsabilidade**

A matriz de responsabilidades, mais conhecida pelo acrônimo RACI (Responsible, Accountable, Consulted, Informed), é um instrumento estratégico para a gestão de projetos que elimina ambiguidades ao definir com precisão os papéis e as responsabilidades de cada membro da equipe. Ao mapear todas as tarefas e entregas, ela garante que nenhuma atividade fique sem um dono claro, otimizando a comunicação e a tomada de decisão.<br>
Em essência, a matriz RACI transforma o caos potencial de um projeto em um trabalho bem orquestrado, onde cada membro sabe seu dever. É uma ferramenta proativa para garantir que o trabalho flua de maneira suave e eficaz.

Quadro 1 - Matriz de responsabilidade

| Tarefa/Atividade                                           | Responsável (R)                          | Responsável Final (A) | Consultado (C)                                | Informado (I)                              |
|-----------------------------------------------------------|------------------------------------------|------------------------|-----------------------------------------------|--------------------------------------------|
| Desenvolvimento Frontend (React Native)                   | Arthur Sisneme, Carlos Munis             | João Pedro Lyra        | Guilherme Brandão                             | Letícia dos Santos, Yasmin Abdon           |
| Desenvolvimento Backend (Node.js, Express, PostgreSQL)    | Guilherme Brandão, Heyttor Silva         | João Pedro Lyra        | Letícia dos Santos, Nayra Nery                | Ingrid Rocha, Rivaldavio Silva             |
| Desenvolvimento de APIs                                   | Guilherme Brandão                        | João Pedro Lyra        | Heyttor Silva                                 | Ingrid Rocha                                |
| Autenticação de Usuários                                  | Guilherme Brandão                        | João Pedro Lyra        | Letícia dos Santos                            | Rivaldavio Silva, Yasmin Abdon             |
| Gestão de Banco de Dados                                  | Guilherme Brandão, Heyttor Silva         | João Pedro Lyra        | Letícia dos Santos                            | Ingrid Rocha, Nayra Nery                   |
| Teste e Validação de Funcionalidades                      | Nayra Nery, Pedro Oliveira               | Letícia dos Santos     | Guilherme Brandão, Heyttor Silva              | João Pedro Lyra                             |
| Gerenciamento do Backlog e Planejamento de Sprints        | Letícia dos Santos                       | João Pedro Lyra        | Guilherme Brandão                             | Ingrid Rocha, Nayra Nery                   |
| Desenvolvimento de Protótipos de Interface (UI/UX)        | Arthur Sisneme, Carlos Munis             | João Pedro Lyra        | Letícia dos Santos                            | Rivaldavio Silva, Yasmin Abdon             |
| Teste de Usabilidade e Acessibilidade                     | Nayra Nery                               | Letícia dos Santos     | Pedro Oliveira                                | João Pedro Lyra                             |
| Monitoramento e Gerenciamento de Riscos                   | João Pedro Lyra                          | Letícia dos Santos     | Guilherme Brandão, Rivaldavio Silva           | Yasmin Abdon, Nayra Nery                   |
| Implementação do Sistema de Progresso do Usuário          | Guilherme Brandão, Heyttor Silva         | João Pedro Lyra        | Letícia dos Santos                            | Rivaldavio Silva, Yasmin Abdon             |

Fonte: Os autores

Dentro da  matriz são dividido em quatro papéis são eles: 

Responsável (R): A pessoa diretamente responsável por realizar a tarefa.<br>
Responsável Final (A): A pessoa que tem a responsabilidade final sobre a tarefa e a quem as decisões finais sobre a atividade são atribuídas.<br>
Consultado (C): Pessoas consultadas durante o processo de execução da tarefa, geralmente para fornecer informações.<br>
Informado (I): Pessoas que devem ser mantidas informadas sobre o progresso e os resultados da tarefa, mas não são envolvidas diretamente na execução.

### 2.3 Detalhamento

Foi escolhida a utilização da Arquitetura Monolítica em Camadas (ou N-Camadas) em razão das características da aplicação mobile desenvolvida pela equipe. Trata-se de um sistema com baixa complexidade e sem a necessidade de escalabilidade independente entre funcionalidades — requisitos típicos de arquiteturas baseadas em microsserviços. A Arquitetura Limpa (Robert C. Martin, 2019) sugere que sistemas sejam organizados em camadas bem definidas, com a separação clara das responsabilidades de cada parte do sistema, o que facilita a manutenção e a evolução do software sem comprometer a estabilidade.<br>
A arquitetura monolítica foi escolhida por sua simplicidade e integração forte entre as camadas, o que é adequado para o contexto deste projeto, que não exige inovação contínua nem rápida evolução tecnológica.As camadas do sistema são organizadas de forma a garantir que cada parte do software tenha uma responsabilidade bem definida. O sistema, portanto, segue o princípio da separação de responsabilidades, que favorecem a coerência e a manutenibilidade do código. As camadas se comunicam de forma interna, por meio de chamadas diretas através de rotas, respeitando a lógica de dependências unidirecionais entre as camadas.<br>
Desta forma, o frontend (camada de apresentação) se comunica com a camada de lógica e funções (onde as regras de negócios e integrações com o backend são processadas), que, por sua vez, acessa a camada de dados para persistir as informações. Isso garante que o sistema seja modular o suficiente para futuras alterações e manutenção, mas sem a complexidade associada a arquiteturas mais distribuídas.<br>
Como a arquitetura do software foi dividida em três camadas principais, seguindo os princípios de coesão e separação de responsabilidades, favorecendo a manutenibilidade e testabilidade do sistema. A camada de interface do usuário, por exemplo, não deve ter conhecimento da lógica de negócios ou da forma como os dados são persistidos, garantindo que alterações na interface não impactem diretamente a lógica de negócios ou o acesso aos dados. Isso promove uma evolução tranquila do sistema, sem necessidade de grandes refatorações. Como pode ser visto na figura 1.


![image](https://github.com/user-attachments/assets/96e1a053-2674-431c-8e55-fa7559fede99)

Figura 1 - Camadas do Sistema Monolítico Mobile Fonte: Os autores

A **camada de Interface do Usuário** responsável pela parte visual do aplicativo, é composta por telas, botões, campos de formulário e outros componentes gráficos desenvolvidos com React Native, responsável por interagir diretamente com o usuário, sendo assim, qualquer e toda ação iniciada pelo usuário, como pressionar um botão de envio ou preencher um campo de resposta, é captada por essa camada e, logo após, encaminhada diretamente para a segunda camada de Funções Lógicas e Integrações, que como o nome aponta é feito por callbacks.

A **camada de Funções Lógicas e Integrações** (também conhecida por lógica do negócio) é responsável pelo processamento das ações executadas pelo usuário na camada de interface, essa segunda camada aplica as “regras de negócio”, ou seja, valida as ações e controla o fluxo de execução do sistema. Por exemplo, após o envio sucedido de uma resposta a um questionário feito pelo usuário, essa camada executa uma verificação que valida se a resposta está correta ou incorreta, enviando o resultado dessa validação de volta para a camada de Interface. Dessa forma, além de responder às interações captadas pela camada de interface do usuário, a segunda camada também executa por meio de lógica programada uma reação a cada situação, portanto, é nessa camada que ocorrem cálculos, decisões condicionais e o controle sobre os dados que devem ser acessados ou modificados.

A **camada de Banco de Dados** responsável por manipular os dados persistentes localmente no dispositivo por meio da tecnologia PostgreSQL para armazenamento e gerenciamento das informações. Essa camada executa operações CRUD (criação, leitura, atualização e exclusão) com base nas instruções recebidas da camada anterior de Funções Lógicas, executando alterações nas informações repassadas pelas tarefas regidas na aplicação, no momento em que o usuário acerta uma nova questão e essa operação é valiWdada, essa informação é repassada e armazenada para camada de banco de dados. Essa organização permite que as operações de acesso e manipulação dos dados sejam centralizadas promovendo maior modularidade e facilidade de manutenção do sistema.<br>
Ao utilizar esse sistema em camadas com separação clara entre responsabilidades que interagem entre si, esse modelo organizacional permite um desenvolvimento ideal para a aplicação mobile escolhida que facilita futuras manutenções, refatorações ou expansões do aplicativo.


### 2.4 Metas e Restrições Arquiteturais

Esta seção define os pilares que guiarão o desenvolvimento e a estrutura do sistema. As metas arquiteturais são os objetivos de alto nível que a arquitetura do software deve alcançar, como escalabilidade, segurança e manutenibilidade. As restrições arquiteturais, por outro lado, são as limitações e condições que devem ser seguidas, como o uso de tecnologias específicas, conformidade com padrões ou limitações de prazo. Juntas, elas garantem que o produto final não apenas atenda aos requisitos funcionais, mas também seja robusto, eficiente e alinhado às necessidades estratégicas do projeto.

**Métricas de Qualidade e performance**

As métricas de qualidade e performance são indicadores quantitativos essenciais para avaliar a eficiência técnica e a experiência do usuário em uma aplicação. Elas permitem monitorar e garantir que o sistema opere dentro dos padrões desejados, impactando diretamente a satisfação do usuário e a confiabilidade do serviço. As principais métricas aqui definidas são:<br>
*Tempo de resposta*: Mede a agilidade com que a API processa e retorna uma resposta a uma solicitação. Um tempo de resposta baixo é crucial para uma experiência de usuário fluida e interativa.<br>
*Tempo de carregamento da tela inicial*: Indica a rapidez com que o aplicativo é iniciado e se torna funcional para o usuário. Um carregamento rápido é fundamental para reter a atenção do usuário e evitar frustrações.<br>
*Taxa de erro*: Reflete a estabilidade e a confiabilidade do sistema, medindo a frequência com que as requisições à API falham. Manter uma taxa de erro baixa é vital para a confiança do usuário no aplicativo.<br>
- Tempo de resposta: 95% das requisições da API devem ser respondidas em até 2 segundos.
- Tempo de carregamento da tela inicial: O APP deve ser iniciado em um tempo de 3 segundos ou menos.
- Taxa de erro: A taxa de erros das requisições HTTP  para API devem ser inferiores  a 5% das requisições totais.

**Métricas de Uso e Funcionais**

As métricas de uso e funcionais focam em como os usuários interagem com a aplicação e se as funcionalidades principais estão sendo executadas conforme o esperado. Elas fornecem percepções valiosas sobre o engajamento do usuário e a eficácia das funcionalidades implementadas. As métricas destacadas são:<br>
*Taxa de conclusão das questões*: Avalia a eficácia do fluxo principal do aplicativo, medindo quantos usuários conseguem completar a tarefa de responder às questões com sucesso.<br>
*Tempo médio de sessão*: Monitora o tempo que os usuários permanecem ativos no aplicativo em uma única sessão, servindo como um forte indicador de engajamento e interesse.<br>
*Autenticação*: Garante que todas as ações sensíveis ou personalizadas sejam realizadas por um usuário devidamente autenticado, sendo um pilar para a segurança e a integridade dos dados do usuário.<br>
- Taxa de conclusão das questões: Percentual de questões respondidas .
- Tempo médio de sessão: Monitorar quanto os usuários passam no app em média.
- Autenticação: 100% das ações devem exigir o usuário autenticado

### 2.5 Visão de Casos de Uso (escopo do produto)

  Nosso projeto, de maneira geral, busca auxiliar jovens de 15 a 21 anos nos estudos básicos de português e matemática. Como inspiração para esta iniciativa, utilizamos o objetivo estabelecido pela ODS 4.6 — Objetivo de Desenvolvimento Sustentável 4, meta 6, que visa garantir que, até 2030, todos os jovens estejam alfabetizados e possuam conhecimentos básicos em matemática. Essa meta reforça a importância da educação como base para o desenvolvimento pessoal e social, sendo um norteador essencial para as ações do nosso projeto.<br>
O aplicativo será desenvolvido em plataforma mobile, oferecendo aos usuários a possibilidade de se cadastrar com login e senha para acessar atividades interativas de português e matemática básica. A proposta inclui exercícios organizados em módulos, abordando conteúdos como:<br>
*Matemática*: operações fundamentais como multiplicação, divisão, frações e ordem dos operadores.<br>
*Português*: estruturas gramaticais, uso da pontuação e interpretação de texto.<br>
O app contará com um sistema de progressão, onde os exercícios se adaptam ao nível do usuário — iniciando com questões mais simples e evoluindo conforme os acertos. Além disso, o aplicativo acompanha uma cartilha digital didática, com explicações claras e exemplos visuais, para auxiliar o aprendizado de forma acessível e eficaz.<br>
A arquitetura escolhida para esse projeto foi Monolítica em Camadas, pois devido a experiência de alguns dos membros com a mesma, assim como a simplicidade oferecida para projetos de pequena escala, seria melhor para o time trabalhar com ela, além de ser um arquitetura com uma boa sinergia com as linguagens React Native e typescript.A interação com usuário do app pode ser melhor observada na figura 2. 

![image](https://github.com/user-attachments/assets/702fa889-b81e-45f2-862a-d9f735bb9e6e)<br>
Figura 2 :Diagrama de caso de uso para o usuário. Fonte: os autores 

---

## 2.6 Visão Lógica

A Visão Lógica do sistema descreve como o código-fonte está estruturado e como os principais módulos se interconectam, destacando suas responsabilidades. O objetivo dessa organização modular é facilitar o desenvolvimento, a manutenção e a escalabilidade do sistema, permitindo que cada módulo tenha uma responsabilidade bem definida e bem isolada das outras camadas. Essa abordagem facilita a adição de novas funcionalidades, o teste de unidades e a correção de erros, além de permitir uma melhor gestão da base de código, seguindo os princípios de separação de responsabilidades e coerência.<br>
Responsabilidades dos Módulos<br>
1. Frontend (React Native):<br>
A camada de Frontend é responsável pela interface do usuário (UI) do sistema. O React Native foi escolhido para garantir uma experiência nativa em dispositivos móveis, permitindo que o sistema seja executado em Android com uma base de código compartilhada. O sistema de navegação entre telas será baseado em React Navigation, permitindo que o usuário navegue de maneira fluida entre as diferentes páginas do aplicativo. Cada tela será um componente funcional que interage diretamente com o Backend para enviar dados e processar as respostas.

Responsabilidades do Frontend:<br>
- Exibir informações e interagir com o usuário.
- Enviar dados para o Backend e processar as respostas.
- Validar as entradas do usuário antes de enviar ao Backend.
- Gerenciar o estado da aplicação (como a navegação entre as telas e o progresso do usuário).
  
2. Backend (Node.js, Express, PostgreSQL):
O Backend é responsável por gerenciar a lógica de negócios do sistema, autenticar os usuários, e interagir com o banco de dados. Desenvolvido com Node.js e Express, o backend expõe APIs REST que permitem a comunicação com o Frontend. Essas APIs são utilizadas para enviar e receber dados, processando todas as interações do usuário e controlando o fluxo de informações no sistema. O PostgreSQL foi escolhido como banco de dados relacional para garantir a integridade e escalabilidade dos dados. Ele permite o gerenciamento de informações como usuários, questões, progresso do usuário e estatísticas.

Responsabilidades do Backend:<br>
- Processar as requisições vindas do Frontend.
- Validar e armazenar os dados dos usuários no banco de dados.
- Gerenciar o progresso do usuário, suas respostas e as estatísticas de desempenho.
- Garantir que os dados sejam seguros, utilizando práticas de autenticação e autorização adequadas.
- Expor APIs REST para comunicação entre o Frontend e o Banco de Dados.

3. Banco de Dados (PostgreSQL):
O Banco de Dados é o componente responsável por armazenar todos os dados persistentes do sistema. No caso deste projeto, foi escolhido o PostgreSQL, que oferece a robustez necessária para lidar com dados estruturados e realizar consultas complexas de maneira eficiente. A principal responsabilidade do banco de dados é garantir a consistência e a integridade dos dados armazenados, utilizando chaves estrangeiras e constraints para evitar dados corrompidos ou inconsistentes.

Responsabilidades do Banco de Dados:<br>
- Armazenar dados de usuários de forma segura.
- Armazenar o progresso do usuário e suas respostas de forma estruturada.
- Garantir a consistência e integridade dos dados, utilizando práticas como normalização e constraints.
- Realizar operações CRUD (criar, ler, atualizar e excluir) de maneira eficiente, utilizando o Prisma ou Sequelize como ORM.

### 2.6.1 Organização dos Módulos

A organização interna do código-fonte segue uma estrutura modular, onde cada módulo tem uma responsabilidade bem definida e interage com os outros de maneira controlada. Isso facilita a compreensão da arquitetura e a manutenção do código ao longo do tempo. Abaixo, destacamos os principais arquivos e pastas do Frontend, explicando suas funções no contexto da arquitetura da aplicação:

1. Estrutura do Frontend:
   
- src/Components/: Contém os componentes reutilizáveis da interface, como botões, cards, formulários, e outros elementos visuais.
- src/Screens/: Define as telas principais da aplicação, como a tela de login, tela de cadastro, tela de questões e tela de progresso.
- src/Services/: Gerencia a comunicação entre o Frontend e o Backend, fazendo requisições HTTP utilizando o Axios.
- src/Routes/: Contém a definição das rotas da aplicação, organizando a navegação entre as diferentes telas.

2. Estrutura do Backend:

- src/controllers/: Gerencia as requisições HTTP, recebendo os dados do Frontend e chamando as funções apropriadas para processar as informações.
- src/models/: Define as entidades do banco de dados, mapeando as tabelas e seus relacionamentos.
- src/repositories/: Responsável pela interação com o banco de dados, realizando operações CRUD através do ORM Prisma.
- src/routes/: Define os endpoints da API, conectando os controllers com as rotas e métodos HTTP.
- src/services/: Contém a lógica de negócio da aplicação, como a validação dos dados recebidos do Frontend e o processamento de respostas.

### 2.6.2 Comunicação entre Módulos

A comunicação entre o Frontend, Backend e Banco de Dados segue uma arquitetura bem definida, utilizando APIs REST para garantir que as partes do sistema se comuniquem de maneira eficiente e desacoplada. O fluxo de dados é o seguinte:

- Frontend ↔ Backend: O Frontend faz requisições HTTP para o Backend usando a biblioteca Axios, recebendo dados em formato JSON e atualizando a interface conforme necessário. Isso garante que a lógica de negócio seja isolada no Backend, mantendo a interface do usuário mais simples e focada apenas na apresentação.
- Backend ↔ Banco de Dados: O Backend utiliza a ORM Prisma (ou Sequelize) para realizar operações no Banco de Dados. Isso permite que o Backend acesse, armazene e manipule dados sem precisar escrever comandos SQL diretamente, promovendo um desenvolvimento mais eficiente e seguro.

Essa organização modular e clara, com responsabilidades bem definidas para cada módulo, segue os princípios fundamentais da Arquitetura Limpa (MARTIN,2019), que preconiza a separação de responsabilidades, coesão e desacoplamento entre as camadas do sistema. Com isso, o sistema se torna mais fácil de manter, expandir e testar, permitindo que novas funcionalidades sejam adicionadas sem afetar negativamente as partes existentes.

### 2.6.3 Frontend ↔ Banco de Dados (PostgreSQL)

A interação entre o backend e o banco de dados é o que permite a persistência, recuperação e manipulação dos dados da aplicação. Esta seção descreve como o backend se comunicará com o banco de dados PostgreSQL, que foi escolhido para armazenar as informações do sistema.
Para facilitar e padronizar o acesso aos dados, a comunicação não será feita com comandos SQL puros, mas sim através de uma camada de abstração chamada ORM (Object-Relational Mapping). Utilizando tecnologias como Prisma (ou Sequelize como alternativa), o backend poderá interagir com o banco de dados manipulando objetos JavaScript. A função do ORM é traduzir esses comandos de alto nível (como criar ou atualizar um objeto) em instruções SQL seguras e otimizadas que o PostgreSQL executa. Essa abordagem aumenta a produtividade do desenvolvimento e reduz os riscos de segurança.<br>
  - Interface: ORM (Object-Relational Mapping)
  - Tecnologia: Prisma (ou Sequelize)
  - Formato de dados: Objetos JavaScript (internamente convertidos para SQL)
  - Função: O backend acessa, insere, atualiza ou remove dados no PostgreSQL usando comandos que o ORM converte para SQL de forma segura e otimizada.

### 2.6.4 Componentes Internos do Frontend

Esta seção aborda a arquitetura interna da interface do usuário (Frontend), que será construída de forma modular utilizando a tecnologia React. O React organiza a interface em componentes independentes e reutilizáveis, e é crucial definir como esses componentes se comunicam e compartilham informações entre si para construir uma aplicação funcional.<br>
A interface de comunicação entre os componentes será gerenciada por mecanismos nativos do React:
- Props: para passar dados de um componente pai para um componente filho.
- Context API: para compartilhar dados considerados "globais" entre múltiplos componentes sem a necessidade de passar props manualmente em todos os níveis.
- Eventos: para capturar e reagir às interações do usuário, como cliques e preenchimento de formulários.
Os dados trocados entre os componentes serão Objetos e Arrays JavaScript. Essa estrutura permite que os componentes compartilhem estado, reajam a mudanças e criem uma experiência de usuário dinâmica e responsiva.

Interface: Props, Context API, Eventos<br>
Tecnologia: React<br>
Formato de dados: Objetos/Arrays JS<br>
Função: Os componentes compartilham dados via props ou contextos globais, reagindo a interações do usuário.

### 2.6.5 diagrama de estados

O diagrama de estados ilustra como o sistema reage a diferentes eventos ou ações do usuário e como ele transita de um estado para outro, é possível ver mais na figura 3.

![Diagrama Fluxo (4)](https://github.com/user-attachments/assets/fda407d9-7c6e-45fa-ab13-08e80b5e5c40)

Figura 3 - Diagrama de estados. Fonte: Os autores

### 2.6.6 diagrama de atividades de aplicação

O diagrama de estados de aplicação ilustra como a aplicação se comporta em diferentes estados durante sua execução.Esse comportamento pode ser observado na figura 4.

![diagrama de atividades de aplicação 1](https://github.com/user-attachments/assets/48d71587-8815-4307-8fb7-461b95df3aa2)

Figura 4 - Diagrama de atividade de aplicação. Fonte: Os autores

### 2.6.7 Diagrama de classes

O diagrama de classes descreve as classes e os relacionamentos entre elas, oferecendo uma visão estruturada da arquitetura de um sistema, como é mostrado na figura 5.

![Diagrama de Classes (1) 1](https://github.com/user-attachments/assets/c6cf1a7c-1729-4644-87b5-9ad3945cd00f)

Figura 5 - Diagrama de classes. Fonte:Os autores

---

## 2.7 Visão de Implementação

A arquitetura da aplicação Omega(Ω) será organizada em camadas, promovendo a separação de responsabilidades e facilitando a manutenção e o desenvolvimento. A seguir, apresentamos os pacotes que compõem o código da aplicação, subdivididos por camada:

**Diagrama de Pacotes**

Apresenta-se na figura 6 um diagrama de pacotes que ilustra a estrutura em camadas da aplicação Omega(Ω).

![image](https://github.com/user-attachments/assets/2fcf0ed4-a0be-4f5e-a4ab-5451343eed9e)

Figura 6 -Diagrama de Pacotes. Fonte: Os autores

**Camada de Apresentação – Interface com Usuários:**

A camada de apresentação é responsável pela interação direta com os usuários, exibindo informações e coletando entradas. No contexto do Omega(Ω), esta camada será desenvolvida utilizando tecnologias web modernas para criar uma interface intuitiva e responsiva.

**Protótipos:**

1. Tela de Login<br>
Função: Permitir que um usuário já registrado acesse sua conta.<br>
Como Funciona:<br>
O usuário insere seu identificador (geralmente e-mail ou nome de usuário) no primeiro campo.<br>
No segundo campo, ele digita sua senha. O ícone de "olho" serve para exibir ou ocultar a senha, garantindo que foi digitada corretamente.<br>
Ao clicar no botão "Login", o sistema valida as credenciais. Se estiverem corretas, o usuário é direcionado para a área principal do aplicativo.<br>
Caso o usuário não tenha uma conta, o link "Criar Conta" o leva para a tela de Cadastro. Se ele esqueceu a senha, o link "Esqueceu sua senha?" inicia o fluxo de recuperação.

3. Tela de Cadastro<br>
Função: Permitir que um novo usuário crie uma conta no aplicativo.<br>
Como Funciona:<br>
O usuário preenche o formulário com as informações solicitadas: um nome de usuário, um endereço de e-mail e uma senha.<br>
O sistema oferece um feedback visual em tempo real, confirmando que as informações inseridas (como o formato do e-mail ou a disponibilidade do nome de usuário) são válidas.<br>
Ao clicar no botão "Cadastrar", as informações são enviadas para o sistema para criar a nova conta. Após o sucesso, o usuário geralmente é logado automaticamente ou direcionado para a tela de Login.<br> 
O objetivo é motivar o usuário a explorar essa funcionalidade, mostrando o valor que ele obterá ao clicar no símbolo ÔMEGA. Ela serve como um guia rápido para uma das principais features do aplicativo.


<img width="462" alt="Tela 02" src="https://github.com/user-attachments/assets/96507f10-8ade-4f8e-a4e9-8730d5ca9ee5" />   <img width="435" alt="Tela 03" src="https://github.com/user-attachments/assets/f292ef04-3ddd-4385-adb0-e1453143aa3b" />

Figura 7 e 8 - Protótipo A(Tela de Login) e B (Cadastro). Fonte: Os autores

3. Tela Home<br>
Esta é a tela principal do aplicativo, funcionando como o ponto de partida para a experiência do usuário.<br>
Função: Acolher o usuário e permitir que ele escolha qual conteúdo educacional deseja acessar.<br>
Como Funciona:<br>
- A tela começa com uma saudação ("Seja Bem-Vindo") e uma instrução clara ("Escolha sua jornada"), estabelecendo um tom amigável e educacional.
- São apresentadas duas opções principais em formato de "cards": a "Jornada de Português" e a "Jornada de Matemática".
- Cada card contém informações essenciais para a tomada de decisão do usuário: o tema, uma ilustração representativa e, crucialmente, a duração estimada da atividade (3-10 Min). Isso ajuda o usuário a se engajar com o conteúdo sabendo o tempo que precisará dedicar.
- O botão "INICIAR" em cada jornada é a chamada para ação que, ao ser clicado, levará o usuário diretamente para a trilha de aprendizado correspondente.
  
4. Tela Informativa<br>
Funciona como uma tela de apresentação de uma funcionalidade chave do aplicativo.<br>
Função: Explicar os benefícios e as funcionalidades associadas ao símbolo "ÔMEGA", que parece ser um elemento central ou um menu especial do app.<br>
Como Funciona: A tela destaca o logotipo ÔMEGA e explica de forma direta o que acontece quando o usuário interage com ele.<br>
Ela lista os benefícios e vantagens, como:
- Acessar o conteúdo do quiz.
- Aprender com exemplos práticos.
- Receber material de estudo gratuito. 

![home](https://github.com/user-attachments/assets/12b77679-4372-43f5-89f5-8e4009ac5750)  ![Tela de Regras-YASMIN](https://github.com/user-attachments/assets/2e669dc3-d19e-45e5-9b76-90c09e9dfa8c)

Figura 9 e 10 - Protótipo C e D - Home e Tela Ômega. Fonte: Os autores

5. Tela de Questão<br>
Esta tela é o ambiente principal onde o aprendizado e a avaliação do usuário acontecem.<br>
Função: Apresentar um desafio ou pergunta para testar o conhecimento do usuário sobre um tópico específico de forma interativa.
Como Funciona:<br>
Contexto: A tela informa claramente o progresso do usuário, o nível atual e o conceito que está sendo ensinado (Nível 1 - Sujeito).<br>
Conteúdo: Ela utiliza múltiplos recursos para apresentar a questão: uma imagem de apoio visual, um texto curto para leitura e, por fim, a pergunta direta ("Quem é o sujeito da primeira frase?").<br>
Interação: O usuário deve analisar o conteúdo e selecionar a resposta que julga correta entre as quatro opções de múltipla escolha. Cada opção é um botão clicável. A ação do usuário aqui (a escolha da resposta) determinará qual será a próxima tela.

<img width="414" alt="Quiz de Português_-3" src="https://github.com/user-attachments/assets/b5f33409-9932-4987-95f8-1325d9aeef1d" />

Figura 11 - Protótipo E, Tela de Questão .Fonte: Os autores

**Explicação do Protótipo:** 

Este protótipo simplificado mostra os elementos básicos da tela de login: campos para nome de usuário e senha, e botões para "Entrar" e "Cadastre-se". O objetivo é capturar a funcionalidade principal e a disposição dos elementos sem se preocupar com detalhes estéticos. A interação com o usuário ocorrerá através da inserção de dados e cliques nos botões, que disparam as ações correspondentes na lógica de negócios.

**Lógica de Negócios e Regras de Negócios:**

A **camada** de lógica de negócios (também conhecida como camada de serviço ou domínio) contém as regras e a inteligência central da aplicação. É aqui que as operações complexas são realizadas e as regras específicas do domínio "educação e combate ao analfabetismo" são aplicadas.

**Comunicação com o Banco de Dados:**

Esta camada é responsável pela persistência e recuperação de dados da aplicação. Ela abstrai os detalhes específicos do banco de dados, permitindo que a camada de lógica de negócios interaja com os dados de forma mais simples e desacoplada.

**Pacotes Principais:**

- repositories: Contêm a lógica para acessar e manipular os dados no banco de dados. 
- config: Inclui a configuração da conexão com o banco de dados, como credenciais e URL de conexão.
- ProgressRepository: será encarregado de registrar o progresso de um aluno em uma atividade.

---

## 2.8 Visão de Implantação

A implantação do software Omega (Ω) será feita em uma infraestrutura moderna, simples e relativamente escalável, que atende às necessidades do sistema e ao perfil dos usuários finais, garantindo desempenho, segurança e disponibilidade.

**Infraestrutura de Hardware:**

O sistema será hospedado preferencialmente em servidores na nuvem, utilizando provedores como AWS, Azure ou Google Cloud. Essa escolha permite escalabilidade conforme o crescimento da base de usuários, alta disponibilidade, facilidade de manutenção e suporte a múltiplos acessos simultâneos, essenciais para um aplicativo mobile educativo com amplo alcance.<br>
Os usuários finais podem acessar o aplicativo em seus dispositivos móveis (smartphones Android), plataforma prioritária pela acessibilidade e popularidade na faixa etária entre 15 e 21 anos. O processamento local no dispositivo será leve, com a maior parte das operações críticas e armazenamento centralizados no backend na nuvem.

**Tecnologias Utilizadas** 

A seleção das tecnologias para este projeto foi uma decisão estratégica, visando criar uma base sólida que promova agilidade no desenvolvimento, facilidade de manutenção e um desempenho robusto e escalável. Esta seção detalha o conjunto de ferramentas e linguagens que compõem nosso ecossistema de desenvolvimento, desde a experiência do usuário no frontend até a lógica de negócios no backend e o ambiente que suporta todo o ciclo de vida do software. A combinação escolhida foi pensada para garantir consistência, segurança e eficiência em todas as camadas da aplicação, resultando em um produto final de alta qualidade.

- Frontend: React Native com Typescript, para desenvolvimento multiplataforma rápido, criando uma interface interativa e responsiva, adaptada ao público com diferentes níveis de letramento.
- Backend: Typescript, que facilita manutenção, integração com APIs e manipulação eficiente dos dados do usuário e do conteúdo educacional.
- Ambiente de Desenvolvimento: VSCode e GitHub para versionamento e colaboração, e Docker para ambientes padronizados entre desenvolvimento, testes e produção.

Essa combinação assegura rapidez no desenvolvimento, facilidade de manutenção, segurança, escalabilidade e bom desempenho.

**Banco de Dados**

 O PostgreSQL foi escolhido por ser um banco relacional robusto e escalável, com ampla comunidade e suporte. Ele permite armazenar dados estruturados importantes como perfis de usuários, progresso, avaliações e histórico. Além disso, oferece recursos avançados para garantir integridade, suporte a transações e consultas complexas, essenciais para relatórios e análises pedagógicas que otimizam a experiência do usuário e as decisões do produto.
 
---

## 2.9 Restrições Adicionais

**Restrições Negociais**

Além dos requisitos técnicos e funcionais, o projeto é guiado por um conjunto de restrições negociais que moldam a experiência do usuário e a lógica do produto. Essas regras são fundamentais para garantir que o software atenda aos seus objetivos estratégicos e pedagógicos. Elas definem desde as condições de acesso, como a necessidade de conexão com a Internet e autenticação de usuário, até a estrutura da jornada de aprendizado, que deve seguir uma progressão linear e estruturada, sem permitir que níveis sejam pulados. A restrição mais importante diz respeito ao público-alvo, determinando que todo o conteúdo e a interface sejam cuidadosamente projetados para serem acessíveis e eficazes para adultos em processo de alfabetização.

- O software é acessível diretamente pela Internet e exige login do usuário ;
- Não é permitido ao usuário pular níveis;
- Progressão só ocorre mediante conclusão dos exercícios anteriores;
- Público alvo específico - O conteúdo deve ser acessível para adultos em processo de alfabetização.

---

## Bibliografia

- FOWLER, Martin. *Padrões de Arquitetura de Aplicações Corporativas*. Porto Alegre: Bookman, 2006. Disponível em: [https://cdn.bookey.app/files/pdf/book/pt/padrões-de-arquitetura-de-aplicações-corporativas.pdf](https://cdn.bookey.app/files/pdf/book/pt/padrões-de-arquitetura-de-aplicações-corporativas.pdf). Acesso em: 30 de jun. 2025.

- MARTIN, Robert C. *Arquitetura Limpa: O Guia do Artesão para Estrutura e Design de Software*. Rio de Janeiro: Alta Books, 2019. Disponível em: [https://altabooks.com.br/wp-content/uploads/2019/07/AMOSTRA_ArquiteturaLimpa-1.pdf](https://altabooks.com.br/wp-content/uploads/2019/07/AMOSTRA_ArquiteturaLimpa-1.pdf). Acesso em: 30 de jun. 2025.

- ONU. *Objetivos de Desenvolvimento Sustentável*. 2015. Disponível em: [https://brasil.un.org/pt-br/sdgs](https://brasil.un.org/pt-br/sdgs). Acesso em: 22 jun. 2025.

- UNESCO – UIS. *Definitions of adult functional literacy and numeracy for SDG indicator 4.6.1*. Montreal: UNESCO Institute for Statistics, 2019. Disponível em: [http://gaml.uis.unesco.org/wp-content/uploads/sites/2/2019/05/GAML6-WD-4-Definitions-of-adult-functional-literacy-and-numeracy-for-SDG-indcator-4.6.1-1.pdf](http://gaml.uis.unesco.org/wp-content/uploads/sites/2/2019/05/GAML6-WD-4-Definitions-of-adult-function)

- VFUNCTION. *What is a Monolithic Application?* Disponível em: [https://vfunction.com/blog/what-is-monolithic-application/](https://vfunction.com/blog/what-is-monolithic-application/). Acesso em: 26 maio 2025.

---
