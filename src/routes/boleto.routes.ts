import { Router } from 'express';
import validarBoleto from '../services/ValidarBoletoService';

const boletoRouter = Router();


boletoRouter.get('/:digiCode', (request, response)=>{
  const {digiCode} = request.params;
  try{
    const boleto = validarBoleto(digiCode)

    return response.json(boleto);
  }catch (err) {
      return response.status(400).json(
        {error: 'Boleto não encontrado'}
      )
  }

});

export default boletoRouter;