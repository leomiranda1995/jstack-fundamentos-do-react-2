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


# Gerando o Bundle com o WebPack

Configurar o processo de geração do bundle, que é o processo onde o webpack pega todos os arquivos que a gente desenvolveu, vai juntar todos em um mesmo arquivo javascript

Instalação de 2 dependências
  -> webpack: Principais funcionalidades do webpack
  -> webpack-cli: Interface por linha de comando o webpack

  > yarn add webpack webpack-cli -D

Criar o arquivo de configuração na raíz do projeto
webpack.config.js

Instalação do plugin, para injetar a tag script dinamicamente no html com o arquivo correto
  > yarn add html-webpack-plugin -D

Instalação do plugin, para limpar a pasta do build
  > yarn add clean-webpack-plugin -D


# Entendendo e configurando Loaders
(Loaders servem para pegar tudo que o webpack não entende e transforma em algo que entenda)


Desinstalar a interface por linha de comando pois não vamos mais utilizar
  > yarn remove @babel/cli

Instalar dependências do babel loader
  > yarn add babel-loader -D

# Criando um servidor local de desenvolvimento

Automatizar a dinâmica do build

  > yarn add webpack-dev-server -D


# Criando nosso primeiro Componente

# React Fragment

# Expressões JS no JSX

# O que são Props?

# Prop children

# Definindo tipos para as props

Instalação da biblioteca de tipagens
  > yarn add prop-types

# Renderizando listas

# Trabalhando com States

# Funções de Callback via Props

# Renderização condicional

# Trabalhando com a Context API

# Inline styles


# Trabalhando com arquivos css

Instalação dos loaders de CSS
  > yarn add css-loader style-loader -D
  css-loader: converte a sintaxe para o javascript entender o código css
  style-loader: injeta o código css no nosso HTML

# CSS Modules

# SASS e SASS Modules
  > yarn add sass sass-loader -D
  sass: cor da biblioteca
  sass-loader: o que o webpack vai rodar quando encontrar a extensão do sass

# Classes dinâmicas

# Introdução ao Styled Components
  > yarn add styled-components

# Criando Styled Components

# Estilizando Componentes com Styled

# Trabalhando com props em Styled Components

# Definindo vários estilos dentro da mesma função

# Dicas de navegação entre componentes no VSCode