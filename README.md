# API de Automação de Testes

Esta API REST foi criada para fins de aprendizado de testes e automação de APIs. Ela permite registro e login de usuários, consulta de usuários e transferência de valores entre usuários, com regras básicas de negócio.

## Funcionalidades
- **Registro de usuário**: Não permite usuários duplicados.
- **Login**: Login e senha obrigatórios.
- **Consulta de usuários**: Lista todos os usuários registrados.
- **Transferência de valores**: Só permite transferências acima de R$ 5.000,00 para destinatários marcados como "favorecido".
- **Documentação Swagger**: Disponível em `/api-docs`.

## Estrutura do Projeto
```
controllers/   # Rotas e lógica de entrada
services/      # Regras de negócio
models/        # Dados em memória
app.js         # Configuração do Express e rotas
server.js      # Inicialização do servidor
swagger.json   # Documentação da API
```

## Como configurar e operar

1. **Instale as dependências**:
   ```zsh
   npm install express swagger-ui-express
   ```

2. **Inicie o servidor**:
   ```zsh
   node server.js
   ```

3. **Acesse a documentação Swagger**:
   - Abra [http://localhost:3000/api-docs](http://localhost:3000/api-docs) no navegador.

## Endpoints principais
- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login
- `GET /users` — Consulta de usuários
- `POST /transfer` — Realizar transferência
- `GET /transfer` — Consultar transferências

## Observações
- O banco de dados é em memória, todos os dados são perdidos ao reiniciar o servidor.
- Para testes automatizados, importe o `app.js` em seu código de teste (ex: com Supertest).

---

API criada para fins educacionais.
