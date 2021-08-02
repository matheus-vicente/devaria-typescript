# Devaria in Typescript

Aplicação desenvolvida usando como referência o site de cursos [Devaria](https://devaria.com.br).

### Requisitos da aplicação:
1. É possível criar cadastro por meio de e-mail senha onde o e-mail não pode ser duplicado.
1. É criado um token na autentição do usuário, com validade de 1 dia.
1. São dois tipos de usuários, os administradores e os não administradores.
1. Na homepage são exibidos os módulos e as aulas de cada módulo, na qual as aulas a serem exibidas são aulas do módulo selecionado.
1. Para criação, edição e deleção de módulos e aulas, deve ter um perfil administrador.

## Backend

1. Na raiz do projeto utilize o comando ``cd Backend`` para ter acesso à pasta onde está o código do backend.
1. Dentro da pasta Backend copie do arquivo ``.env.example``, crie um arquivo com nome ``.env`` e cole todas as variáveis lá.
1. Ainda dentro da pasta, utilize o comando ``npm install`` ou ``yarn`` e em seguida ``docker-compose up -d`` para subir dois containers Docker com todas as ferramentas necessárias para rodar a aplicação já configuradas.
1. Ainda dentro da pasta Backend, rode o seguinte comando: ``npm run migrate`` ou ``yarn migrate``.

Obs: Será criado um container próprio para a aplicação e ele utiliza a porta 5432 do computador. Caso queira mudar a porta padrão abra o arquivo docker-composer.yml e na instrução db troque o conteúdo da opção ports pela porta de sua preferência.

Pronto. Backend configurado!

## Frontend

1. Na raiz do projeto utilize o comando ``cd Frontend`` para ter acesso à pasta onde está o código do frontend.
1. Dentro da pasta Frontend copie do arquivo ``.env.example``, crie um arquivo com nome ``.env`` e cole todas as variáveis lá.
1. Ainda dentro da pasta, utilize o comando ``npm install`` ou ``yarn`` e em seguida utilize o comando ``npm run start`` ou ``yarn start`` para iniciar a aplicação.

Pronto. Frontend configurado!

A aplicação está pronta para ser utilizada.