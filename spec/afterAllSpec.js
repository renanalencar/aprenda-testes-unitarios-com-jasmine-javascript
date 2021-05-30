describe("Teste do afterAll", function () {

    var contador = 0;

    beforeAll(function () {
        contador = 10;
    });

    afterAll(function () {
        contador++;
    });

    it("deve garantir o valor 10 para o contador", function() {
        expect(contador).toEqual(10);
    }); 

    it("deve ainda garantir o valor 10 para o contador", function() {
        expect(contador).toEqual(10);
    });
});