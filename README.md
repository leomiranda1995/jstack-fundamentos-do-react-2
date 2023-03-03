# jstack-fundamentos-do-react-2

# Configuração do Babel

- Ferramenta para transpilar o JS, pegar o JS mais moderno e transformar o código em uma versão em que os navegadores e que versões mais antigas vão conseguir interpretar e entender

Inicialização do package.json
  > yarn init -y

Instalação de 3 bibliotecas
  -> @babel/core: As principais funcionalidades do Babel
  -> @babel/preset-env: Entende os recursos que estamos usando e transformar em um código que todas as versões vão conseguir executar
  -> @babel/cli: Interface por linha de comando do Babel para executar e transpilar o código

  > yarn add @babel/core @babel/preset-env @babel/cli -D

Na raiz do projeto, criar o arquivo .babelrc, arquivo json com comentários

Código para transpilar todos os arquivos da pasta src e jogar na pasta build
  > yarn babel src -d build
Executar somente um arquivo
  > yarn babel src/index.js -d build

Irá criar a pasta build com os arquivos transpilados encontrados


Instalação da biblioteca para o babel entender o React
  > yarn add @babel/preset-react -D

Instalação do React e React-Dom
  > yarn add react@^17.0.2 react-dom@^17.0.2