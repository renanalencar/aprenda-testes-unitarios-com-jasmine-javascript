describe("Teste do afterEach", function () {

    var contador = 0;

    beforeEach(function () {
        contador++;
    });

    afterEach(function () {
        contador = 1;
    });

    it("deve garantir o valor 1 para o contador", function() {
        expect(contador).toEqual(1);
    }); 

    it("deve ainda garantir o contador com valor 1", function() {
        expect(contador).toEqual(1);
    });
});