# Parse-Server
Parse Server configurado para openshift (https://www.openshift.com/)

Foi criado um novo app no parse.com, a partir dele retirei a chave mestra e o id de aplicação;
Utilizei na Dashboard o mesmo nome que criei no parse.com;
No openshift, você tem um nome de aplicação, no qual você usara no client tools.

Após realizar seu cadastro no openshift, crie uma aplicação do tipo Node.js (Latest) e adicione a Cartridge  MongoDB 2.4.
Feito isso, instale o Client Tools do Openshift (https://developers.openshift.com/managing-your-applications/client-tools.html).

No terminal da sua máquina, configure o client tools:
rhc setup

Realize o login

Adicione as seguintes variaveis locais:

ALLOW_INSECURE_HTTP
Permite a dashboard do parse ser acessada sem a camada de segurança (protocolo http)

PARSE_APPLICATION_ID
ID da sua aplicação

PARSE_APP_NAME
Nome do seu App

PARSE_DASHBOARD_PASS
Usuário que irá acessar a dashboard do parse

PARSE_DASHBOARD_USER
Senha do usuário que irá acessar a dashboard do parse

PARSE_MASTER_KEY
Chave mestra da sua aplicação

PROTOCOL
http:// ou https:// dependendo da sua prefência (https:// não testado, porém na teoria, após a troca de valores, reinicie a sua aplicação)

Para isso segue o comando:

rhc set-env 'CHAVE=VALOR' --app nome_app


Clone seu app do openshift (rhc git clone nome_aplicação)

Clone este repositório em algum lugar e copie a aplicação para dentro (se clonar dentro do clone do openshift, haverá dois .git, e isso não é bom)
