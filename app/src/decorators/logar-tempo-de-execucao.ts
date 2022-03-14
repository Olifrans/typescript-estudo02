

export function LogartempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const metodoOriginal = descriptor.value;
        //descriptor.value = function (...args: Array<any>) {
        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = 'milissegundo';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const tp1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tp2 = performance.now();
            console.log(`${propertyKey}, Tempo de execução: ${(tp2 - tp1) / divisor} ${unidade}`);
            retorno
        };
        return descriptor;
    }
}