# opb-treinamento

### Requisitos:

- Logica de programação
- Conhecimento de Javascript

### Conteúdo abordado:

--- AULA 1
- Funcionamento do docker
- Porque usar docker-composer
- Porque desenvolver em um ambiente com container
- Validação de imagem docker a ser usada no container

--- AULA 2
- Criar urls amigaveis. Não precisar saber porta de cada app
  - traefik
- Validação de codigo TS (Linter)
  - https://eslint.org/docs/user-guide/getting-started
  - npx eslint --init
  - npm init @eslint/config
  - VSCODE: verificar editor padrao


--- AULA 3
- Adicionar eslint no front e lint adicionar para tsx
- add to eslintrc: "plugin:react/jsx-runtime" e react version
  ```
  "settings": {
        "react": {
            "version": "18.0.0"
        }
    }
  ```
- Padrão para commit 
  - (Husky) Pre-commit commit message and eslint 
  - Lint somente do que esta no stage: lib(lint-staged). Valida somente o que vai ser commitado.
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky install",
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "**/*.+(js|json|ts|tsx)": "npm --prefix frontend run lint"
  },
  ```
  - Config commitzen in lint-staged
  
- Log em sistemas node
- Graceful shutdown/start
- ?PM2
