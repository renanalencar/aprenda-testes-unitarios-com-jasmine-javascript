describe("Testes do objeto jasmine", function () {

    var dobro;
    
    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
        carro = { 'ano': 2017 };
    });

    it("deve demonstrar o uso do jasmine.any", function () {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });

    it("deve demonstrar o uso do jasmine.anything", function () {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());

        expect({}).toEqual(jasmine.anything());
    });

    it("deve demonstrar o uso do jasmine.objectContaining", function () {
        expect(carro).toEqual(jasmine.objectContaining({ 'ano': 2017 }));

        expect(carro).not.toEqual(jasmine.objectContaining({ 'ano': 2016 }));
    });
});