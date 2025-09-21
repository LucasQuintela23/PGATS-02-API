// services/transferService.js
import { transfers } from '../models/transferModel.js';
import { users } from '../models/userModel.js';

function transfer({ from, to, value }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) throw new Error('Usuário remetente ou destinatário não encontrado');
  const isFavorecido = sender.favorecidos && sender.favorecidos.includes(to);
  if (!isFavorecido && value >= 5000) {
    throw new Error('Transferências acima de R$ 5.000,00 só para favorecidos');
  }
  const transferObj = { from, to, value, date: new Date() };
  transfers.push(transferObj);
  return transferObj;
}

function getTransfers() {
  return transfers;
}

export default { transfer, getTransfers };
