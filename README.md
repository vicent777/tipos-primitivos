# tipos-primitivos
Na aula de hoje criamos um novo repositório no nosso próprio github.
Este será o primeiro contato com JavaScript.
Abrimos o VSCode online e instalamos a primeira biblioteca.

Instalando NPM: npm init -y
Instalando Node: npm install node

Realizando nosso primeiro código utilizando uma função. No terminal, para mostrar o código colocamos: node aula1.js

#add e atualizar commit
git status (verifica o status dos meus arquivos)
git add >nome do arquivo.js< (adiciona apenas um arquivo específico)
git add . (adiciona todas as mudanças)
git commit -m "mensagem de atualização(confirma o envio para a branch)

#criar e manipular repositório

change directory
cd .. (volta pra o diretorio/pasta anterior)
cd Nome_Pasta (muda para o nome da pasta escolhida)
mkdir Nome_Pasta (cria um novo diretorio/pasta)
code . (abre o vscode no caminho)

#configuração do git
git config --global user.name (verifica o nome que está cadastrado na máquina)
git config --global user.name "vicent777" (adiciona meu usuário do github à maquina) 
git config --global user.email "viniciushx@gmail.com" (adiciona meu e-mail do github a maquina)

#baixar do github para o vscode
git clone link do repositorio do github

#fazer upload para o github

git status (mudanças feitas e status do meu repositório)
git init (??)
git add . (adicionar as mudanças)
git commit -m "atualizando o github" (comitar as mudanças)
git push origin main (vai confirmar as mudanças e pedir token de acesso /token pode ser buscado no github)
git push (vai confirmar as mudanças sem precisar de token).

#retirar meu token
git credential-cache exit

#remover usuario e email
git config --global --unset user.name
git config --global --unset user.email