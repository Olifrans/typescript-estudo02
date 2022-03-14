export function LogartempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
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
            retorno;
        };
        return descriptor;
    };
}
