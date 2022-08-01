import receitas from "../models/Receita.js";

class ReceitaController {
  static getReceitas = (req, res) => {
    receitas.find((err, receitas) => {
      return res.status(200).json(receitas);
    });
  };

  static getReceitaByName = (req, res) => {
    const nomeParam = req.param("nome");
    receitas.find({ nome: { $regex: nomeParam } }, {}, (err, receita) => {
      if (err) {
        res.status(500).send({ message: `${err.message}` });
      } else {
        res.status(200).send(receita);
      }
    });
  };

  static addReceita = (req, res, next) => {
    let file = req.file;
    let receita = new receitas(req.body);
    if (!file) {
      receita.save((err) => {
        if (err) {
          res.status(500).send({ message: `${err.message}` });
        } else {
          res.status(201).send(receita.toJSON());
        }
      });
    } else {
      receita.imagem = "../../../../assets/images/receitas/" + file.filename;
      receita.save((err) => {
        if (err) {
          res.status(500).send({ message: `${err.message}` });
        } else {
          res.status(201).send(receita.toJSON());
        }
      });
    }
  };

  static updateReceitaByID = (req, res) => {
    const id = req.params.id;

    receitas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(400).send(`o id ${id} nao foi encontrado`);
      } else {
        res.status(200).send({ message: "Receita atualizada com sucesso" });
      }
    });
  };

  static removeReceitaByID = (req, res) => {
    const id = req.params.id;

    receitas.findByIdAndDelete(id, {}, (err, receita) => {
      if (err) {
        res
          .status(400)
          .send({
            message: `O usuario de id (${id}) não foi encontrado no sistema.`,
          });
      } else {
        res.status(200).send({
          message: "A receita foi deletada com sucesso",
          receita: {
            ...receita._doc,
          },
        });
      }
    });
  };
}

export default ReceitaController;
