import { Express } from 'express'
import { UserUseCases } from "../../domain/use-cases/user/user-use-case";

export class UserController {
  constructor(
      readonly userUseCases: UserUseCases,
      readonly server: Express
    ) {
      server.get('/', async (_, res) => {
        const users = await this.userUseCases.list()
        return res.status(200).json(users)
      })

      server.post('/', async (req, res) => {
        console.log(req.body)
        const { name, email } = req.body;
        await this.userUseCases.create({ name, email })
        return res.status(201).json("ok")
      })

      server.delete('/:id', async (req, res) => {
        const userId = req.params.id
        try {
          await this.userUseCases.delete(userId);
          return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
          return res.status(500).json({ message: 'Erro ao deletar o usuário' });
        }
      });

      server.patch('/:id', async (req, res) => {
        await this.userUseCases.update(req.params.id, req.body)
        return res.status(200).json("Sucesso na atualização")
      })
    }
}
