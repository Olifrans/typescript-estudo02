

export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Modificando o  prototype ${target.constructor.name}
            a adionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);

                console.log(`Buscando elemento do Dom com o seletor
                ${seletor} para injenetar em ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        )
    }
}