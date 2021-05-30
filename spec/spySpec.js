describe("Testes do objeto Spy", function() {

    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    xit("deve possuir o método somar como não definido", function() {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });

    xit("deve chamar o método somar ao menos uma vez", function() {
        expect(Calculadora.somar).not.toHaveBeenCalled();
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

    it("deve chamar o método somar duas vezes", function() {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

    it("deve chamar o método somar com os parâmetros válidos", function() {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });
});