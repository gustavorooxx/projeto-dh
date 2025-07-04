# Projeto E-commerce DH

Este é um projeto de aplicação web de e-commerce desenvolvido com Node.js, Express.js e EJS para a parte de frontend, utilizando MySQL como banco de dados e Sequelize como ORM.

## Tecnologias Utilizadas

  * **Backend:** Node.js, Express.js
  * **Frontend:** EJS (Embedded JavaScript templating)
  * **Banco de Dados:** MySQL
  * **ORM:** Sequelize
  * **Autenticação/Segurança:** bcrypt (criptografia de senhas), express-session (gerenciamento de sessões)
  * **Ferramentas de Desenvolvimento:** nodemon (reinício automático do servidor), sequelize-cli (ferramenta de linha de comando para Sequelize)

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

  * **Node.js e npm (Node Package Manager):**
      * Baixe e instale a versão LTS mais recente em [nodejs.org](https://nodejs.org/). O npm é incluído na instalação do Node.js.
  * **MySQL Server:**
      * Você pode baixá-lo em [link suspeito removido].
      * Alternativamente, utilize um pacote como XAMPP, WAMP ou MAMP, que já incluem o MySQL.
  * **MySQL Workbench (Recomendado):**
      * Ferramenta gráfica para gerenciar seu banco de dados MySQL. Baixe em [dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/).
  * **Git:**
      * Para clonar o repositório. Baixe em [git-scm.com](https://git-scm.com/).

## Guia de Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

### 1\. Clonar o Repositório

Abra seu terminal (Git Bash, Prompt de Comando, PowerShell, ou Terminal do VS Code) e execute o comando para clonar o projeto:

```bash
git clone https://github.com/gustavorooxx/projeto-dh.git
```

Em seguida, navegue até a pasta do projeto:

```bash
cd projeto-dh
```

### 2\. Instalar Dependências do Node.js

Com o terminal na pasta raiz do projeto, instale todas as dependências listadas no `package.json`:

```bash
npm install
```

### 3\. Configurar o Banco de Dados MySQL

Este é um passo crucial para o funcionamento do projeto, pois ele depende de um banco de dados MySQL.

#### a. Criar o Banco de Dados

1.  **Abra o MySQL Workbench** e conecte-se ao seu servidor MySQL local (geralmente com `hostname: 127.0.0.1`, `port: 3306`, `username: root` e a senha que você configurou durante a instalação do MySQL Server).

2.  **Crie um novo schema (banco de dados):**

      * No painel esquerdo, clique na aba **"Schemas"**.
      * Clique com o botão direito do mouse na área em branco e selecione **"Create Schema..."**, ou clique no ícone de "cubo com sinal de +" na barra de ferramentas.
      * Defina o nome do seu banco de dados. Sugestão: `ecommerce_dh`.
      * Clique em `Apply`, depois em `Apply` novamente na tela de confirmação e `Finish`.
      * Alternativamente, você pode executar o comando SQL na aba "Query 1":
        ```sql
        CREATE DATABASE ecommerce_dh;
        ```
        (Execute selecionando a linha e clicando no ícone de raio).

#### b. Configurar as Credenciais no Projeto

O Sequelize precisa saber como se conectar ao seu banco de dados.

1.  **Inicialize o Sequelize CLI (se ainda não fez):**

      * Se você encontrar erros como "config.json not found" ao tentar as migrações, pode ser necessário inicializar o Sequelize no projeto.
      * Execute:
        ```bash
        npx sequelize init
        ```
      * Este comando criará a estrutura de pastas e arquivos padrão, incluindo `database/config.json`. Se já existirem, ele pode pedir para sobrescrever (não é necessário sobrescrever `models/index.js` se já estiver lá).

2.  **Edite o arquivo `database/config.json`:**

      * Abra o arquivo `database/config.json` (ou `config/config.json` dependendo da estrutura do projeto).
      * Localize a seção `development` e ajuste as credenciais para corresponderem às suas configurações do MySQL local:

    <!-- end list -->

    ```json
    {
      "development": {
        "username": "root",                 // Seu usuário MySQL (geralmente 'root')
        "password": "sua_senha_do_mysql",   // A senha que você definiu para o usuário MySQL
        "database": "ecommerce_dh",         // O nome do banco de dados que você criou acima
        "host": "127.0.0.1",                // Ou 'localhost'
        "dialect": "mysql"
      },
      "test": {
        // ... (pode ignorar para desenvolvimento local)
      },
      "production": {
        // ... (pode ignorar para desenvolvimento local)
      }
    }
    ```

      * **Importante:** Salve as alterações no arquivo.

#### c. Executar as Migrações do Banco de Dados

As migrações do Sequelize criarão as tabelas necessárias no seu banco de dados `ecommerce_dh`.

1.  **Instale `sequelize-cli` (se não estiver já nas dependências):**

    ```bash
    npm install --save-dev sequelize-cli
    ```

2.  **Execute as migrações:**

    ```bash
    npx sequelize db:migrate
    ```

    Você deverá ver mensagens indicando que as tabelas estão sendo criadas (ex: `== 2021102123630-create_table_categorias: migrating`).

### 4\. Instalar Nodemon (Se Necessário)

O script `start` no `package.json` utiliza `nodemon` para iniciar o servidor. Se você encontrou o erro `"nodemon" não é reconhecido...`, você precisa instalá-lo:

1.  **Instale `nodemon` como uma dependência de desenvolvimento:**
    ```bash
    npm install --save-dev nodemon
    ```
    Isso garante que o `nodemon` esteja disponível localmente para o seu projeto.

### 5\. Iniciar o Servidor

Finalmente, com todas as dependências instaladas e o banco de dados configurado, você pode iniciar a aplicação:

```bash
npm start
```

O terminal deverá exibir uma mensagem indicando que o servidor está rodando e em qual endereço.

## Acessar a Aplicação

Após iniciar o servidor, abra seu navegador e acesse o endereço indicado no terminal. Geralmente, será algo como:

[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

Você deverá ver a interface do projeto e poder interagir com ela.
