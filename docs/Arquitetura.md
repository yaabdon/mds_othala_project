# Documento de Arquitetura - Omega

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

---

## Autores

| Matrícula   | Nome                                  | Papel                         | Contribuição (%) |
|--------------|---------------------------------------|-------------------------------|-------------------|
| 231011892    | Arthur Sismene Carvalho              | Desenvolvedor Frontend        | 4,79%             |
| 221022480    | Carlos Henrique de Paiva Munis       | Desenvolvedor Frontend        | 5,99%             |
| 231030691    | Guilherme Ferreira Brandao           | Desenvolvedor Backend         | 14,96%            |
| 232002996    | Heyttor Augusto de Assis Silva       | Desenvolvedor Backend         | 7,18%             |
| 202045348    | Ingrid Alves Rocha                   | Dono do Produto               | 4,79%             |
| 232003661    | João Pedro Araujo de Freitas Lyra    | Líder e Dono do Produto       | 14,96%            |
| 222022135    | Leticia de Carvalho dos Santos       | Analista de Qualidade         | 12,57%            |
| 211045178    | Luis Guilherme Borges Monteiro       | Analista de Qualidade         | 5,99%             |
| 221007608    | Nayra Silva Nery                     | Analista de Testes            | 9,58%             |
| 211031440    | Pedro Gomes Oliveira                 | Analista de Testes            | 4,79%             |
| 232024026    | Rivadalvio Joaquim da Silva Filho    | Cliente                       | 3,59%             |
| 232014271    | Yasmin Sousa Abdon                   | Cliente                       | 10,78%            |

---

## Sumário

1. [Introdução](#introdução)  
   1.1 [Propósito](#propósito)  
   1.2 [Escopo](#escopo)  

2. [Representação Arquitetural](#representação-arquitetural)  
   2.1 [Definições](#definições)  
   2.2 [Justificativa](#justificativa)  
   2.3 [Detalhamento](#detalhamento)  
   2.4 [Metas e Restrições](#metas-e-restrições)  
   2.5 [Visão de Casos de Uso](#visão-de-casos-de-uso)  
   2.6 [Visão Lógica](#visão-lógica)  
   2.7 [Visão de Implementação](#visão-de-implementação)  
   2.8 [Visão de Implantação](#visão-de-implantação)  
   2.9 [Restrições Adicionais](#restrições-adicionais)  

3. [Bibliografia](#bibliografia)  

---

## Introdução

### Propósito

Descrever a arquitetura do sistema Omega, desenvolvido na disciplina de Métodos de Desenvolvimento de Software (MDS) 2025.1. Este documento visa fornecer uma visão abrangente para desenvolvedores, testadores e demais interessados no desenvolvimento.

### Escopo

O sistema consiste em um aplicativo móvel educativo para jovens e adultos (15 a 21 anos) com dificuldades em leitura, escrita e matemática básica, contendo atividades interativas, sistema de progresso e uma abordagem inclusiva. Não contempla chat, funcionalidades offline complexas ou integrações externas.

---

## Representação Arquitetural

### Definições

Arquitetura Monolítica em Camadas utilizando React Native no frontend e Node.js com PostgreSQL no backend.

### Justificativa

Escolhida pela simplicidade, rapidez no desenvolvimento e manutenção, além de ser adequada para as necessidades de um aplicativo de baixa complexidade.

### Detalhamento

- Camada de Interface: React Native — telas, formulários, botões.  
- Camada de Lógica: funções, hooks, controle de fluxo e regras de negócio.  
- Camada de Dados: PostgreSQL — operações CRUD.  

### Metas e Restrições

- **Performance:** 95% das requisições respondidas em até 2 segundos.  
- **Carregamento:** tela inicial em até 3 segundos.  
- **Erros:** menos de 5% de taxa de erro nas requisições HTTP.  
- **Funcional:**  
  - 100% das ações requerem autenticação.  
  - Usuários não podem pular níveis.  

### Visão de Casos de Uso

O app auxilia jovens de 15 a 21 anos no desenvolvimento de conhecimentos básicos, alinhado à ODS 4.6 da ONU. Possui cadastro de usuários e exercícios de português e matemática com sistema de progressão.

---

## Visão Lógica

### Organização dos Módulos

- `api/` – Backend (Node.js + Express)  
- `front/` – Frontend (React Native + Expo)  
- `assets/` – Recursos visuais  
- `src/` – Código principal  
  - `app/` – Rotas  
  - `components/` – Componentes visuais  
  - `routes/` – Organização de rotas  
  - `services/` – Comunicação frontend ↔ backend  

### Comunicação entre Módulos

- **Frontend ↔ Backend:**  
  - API REST via Axios + Express  
  - Formato: JSON  

- **Backend ↔ Banco de Dados:**  
  - ORM (Prisma ou Sequelize)  
  - PostgreSQL  

- **Frontend Interno:**  
  - React Context API, Props e Eventos  

---

## Visão de Implementação

- Arquitetura em camadas (Frontend, Backend, Banco de Dados)  
- Uso de pacotes como `repositories`, `config` e `services`  

---

## Visão de Implantação

- Deploy em nuvem (AWS, Azure ou Google Cloud)  
- Backend hospedado em container ou servidor único  
- App mobile em dispositivos Android  

### Tecnologias

- **Frontend:** React Native + TypeScript  
- **Backend:** Node.js + TypeScript  
- **Banco:** PostgreSQL  
- **Ferramentas:** VSCode, GitHub, Docker  

---

## Restrições Adicionais

- Arquitetura Monolítica  
- Sem microserviços  
- Banco exclusivo PostgreSQL  
- Escalabilidade limitada a um servidor/container  
- Deploy simplificado e controle básico de versões  

---

## Bibliografia

- VFUNCTION. *What is a Monolithic Application?* Disponível em: [https://vfunction.com/blog/what-is-monolithic-application/](https://vfunction.com/blog/what-is-monolithic-application/). Acesso em: 26 maio 2025.

---
