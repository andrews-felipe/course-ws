# Projeto CRUD API Simples. 

_Este projeto é para fins didáticos e avaliativos_

### Tecnologias Usadas:
- Node.js 
- Restify 
- Mongoose 
- Cors-middleware

CRUD simples da entidade curso:

## Paths

| Método HTTP | Path               | Recurso                     |
| ----------- | ------------------ | --------------------------- |
| GET         | `/api/cursos`     | Listar cursos              |
| POST        | `/api/cursos`     | Cadastrar novo curso       |
| PUT         | `/api/cursos{id}` | Alterar dados de um curso |
| DELETE      | `/api/cursos{id}` | Excluir curso              |

## Modelos

### Course

| Nome  | Tipo     | Validação       |
| ----- | -------- | --------------- |
| img  | `string` | Required        |
| title | `string` | Required|
| price | `number`   | Required        |


# Conceitos

- **Models** Modelagem de entidades para mapeamento de objetos;
- **Routes** Terminais Roteadores, recebem e retornam a requisição a nível de aplicação;
- **Service** Manipulação automática do banco de dados via querys padrões com os modelos criados;
