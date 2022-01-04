/* 
Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são administradores.
*/

function getAdmins(map){
    let admins = [];
    for (let [key, value] of map){
        if (value === 'Admin'){
            admins.push(key); //adiciona key no array admins
        }
    }
    return admins //retorna o array
}

const usuarios = new Map ();

usuarios.set('Jonas', 'Admin');
usuarios.set('Joana', 'Admin');
usuarios.set('Jessica', 'Admin');
usuarios.set('Teodoro', 'User');
usuarios.set('Maria', 'User');

console.log(getAdmins(usuarios));
