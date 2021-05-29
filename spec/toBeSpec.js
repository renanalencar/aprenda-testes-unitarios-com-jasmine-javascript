describe("Comprador toBe", function () {
    it("Deve validar o uso do toBe", function() {
        var obj1 = { valor: true };
        var obj2 = { valor: true };
        expect(true).toBe(true);
        expect("Teste").toBe("Test");
        expect(obj1).not.toBe(obj2);
    }); 
});