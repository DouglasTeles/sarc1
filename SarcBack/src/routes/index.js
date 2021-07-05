const {Router} = require('express')
const loginController = require('../controllers/loginController')
const routes = Router()


//Users
const userController = require('../controllers/userController')
routes.post('/sarc/user', userController.createUser)
routes.get('/sarc/user', userController.listUser)
routes.delete('/sarc/user/:user_id', userController.deleteUser)

routes.post('/sarc/login', loginController.login)

//Contas
const contController = require('../controllers/contController')
routes.post('/sarc/cont', contController.createCont)//Cadastrar conta
routes.get('/sarc/conts', contController.listCont)//Listar todas as contas
routes.delete('/sarc/cont/:cont_id', contController.deleteCont)//Deletar Conta especifica


//values
const debtController = require('../controllers/debtController')
routes.post('/sarc/debt/:user_id/:cont_id', debtController.createDbt )//Cadastrar debt para um morador
routes.get('/sarc/debts/:user_id', debtController.listDebtUser)//listar debts de um morador
// routes.patch('/sarc/debt/:user_id/:conta_id', ContaController.atualizarContaMorador)//Atualizar debt de um morador
// routes.delete('/sarc/debt/:user_id/:conta_id', ContaController.deletarContaMorador)//Deletar debt de um morador



//Login
// routes.post('/login')

module.exports = routes