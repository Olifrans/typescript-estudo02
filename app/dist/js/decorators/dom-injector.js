export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o  prototype ${target.constructor.name}
            a adionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do Dom com o seletor
                ${seletor} para injenetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map