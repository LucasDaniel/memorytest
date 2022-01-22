const MemoryToken = artifacts.require('./contracts/MemoryToken.sol');

//Parei aqui - tentando testar o sistema mas esta dando esse erro
/*
minuto 5 do video 8
Error: Migration C:\xampp\htdocs\jogo\migrations\2_memory_token.js invalid or does not take any parameters
    at Migration._load (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\Migration.js:50:1)       
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Migration.run (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\Migration.js:217:1)        
    at Object.runMigrations (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\index.js:150:1)     
    at Object.runFrom (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\index.js:110:1)
    at Object.runAll (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\index.js:114:1)
    at Object.run (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\migrate\index.js:79:1)
    at runMigrations (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\core\lib\commands\migrate\run.js:76:1)
    at Object.module.exports [as run] (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\core\lib\commands\migrate\run.js:44:1)
    at Command.run (C:\Users\Lucas Daniel\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\core\lib\command.js:189:1)
*/

require('chai')
    .use(require('chai-as-promised'))
    .shoud()

contract('Memory Token', (accounts) => {

    let token

    describe('deployment', async () => {
        it('deploys successfully', async () => {

            token = await MemoryToken.deployed()

            const address = token.address

            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)

        })
    })

})