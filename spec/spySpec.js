describe("Testes do objeto Spy", function() {

    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },
        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function() {
        // spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora, "subtrair");
    });

    // it("deve possuir o método somar como não definido", function() {
    //     expect(Calculadora.somar(1, 1)).toBeUndefined();
    // });

    // it("deve chamar o método somar ao menos uma vez", function() {
    //     expect(Calculadora.somar).not.toHaveBeenCalled();
    //     Calculadora.somar(1, 1);
    //     expect(Calculadora.somar).toHaveBeenCalled();
    // });

    // it("deve chamar o método somar duas vezes", function() {
    //     Calculadora.somar(1, 1);
    //     Calculadora.somar(1, 2);
    //     expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    // });

    // it("deve chamar o método somar com os parâmetros válidos", function() {
    //     Calculadora.somar(1, 1);
    //     Calculadora.somar(1, 2);
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    // });

    // it("deve executar o método somar original", function() {
    //     expect(Calculadora.somar(1, 1)).toEqual(2);
    //     expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    // });

    it("deve retornar 10 para o método somar", function() {
        expect(Calculadora.somar(1,2)).toEqual(10);
    })
});