describe("Testes do objeto jasmine", function () {

    var dobro;
    
    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
        carro = { 'ano': 2017 };
        numeros = [1, 2, 3, 4, 5];
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

    it("deve demonstrar o uso do jasmine.arrayContaining", function () {
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));

        expect(carro).not.toEqual(jasmine.arrayContaining([6]));
    });
});