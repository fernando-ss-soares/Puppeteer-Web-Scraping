import express from 'express';
import mercadoLivre from '../../utils/mercadoLivre.js';
import Product from '../../models/products/index.js';

const router = express.Router();

router.get('/', async (req, res) => {

    const { produto } = req.query

    if(!produto || produto == '') {
      return res.status(406).json({
         'Message':'Por favor definir o produto de busca'
      });
    }
    
    try {

       const resultado_pesquisa_mercardo_livre = await mercadoLivre(produto);

       await Product.create(resultado_pesquisa_googles_shopping);
       
       res.status(200).json({
            'Product': resultado_pesquisa_mercardo_livre
       });

    } catch (error) {
       res.status(500).json({
        'Error': error
       });
    }
    
})

export default router;