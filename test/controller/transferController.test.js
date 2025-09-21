import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import app from '../../app.js';


describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it(' Quando informo remetente e destinatario recebendo 400 ', async () => {
            const reposta = await request(app)
                .post('/transfer')
                .send({
                    "from": "lucas",
                    "to": "ana",
                    "value": 350
                });
            expect(reposta.status).to.be.equal(400);
            expect(reposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');
        });

    }); // Fim do describe POST /transfer

    describe('GET /transfer', () => {
        it(' Quando listar todas as transferencias com sucesso 200', () => {
            // Teste ainda não implementado
        });
    });
}); // Fim do describe Transfer Controller