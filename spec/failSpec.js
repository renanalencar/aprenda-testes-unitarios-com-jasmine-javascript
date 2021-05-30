describe("Teste do fail", function () {
    it("deve demonstrar o uso do toBe", function() {
        var operacao = function (executar, callback) {
            if(executar) {
                callback();
            }
        }

        operacao(false, function() {
            fail("não deve executar função de callback");
        });
    }); 
});