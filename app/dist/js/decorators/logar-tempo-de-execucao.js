export function LogartempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tp1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tp2 = performance.now();
            console.log(`${propertyKey}, Tempo de execução: ${(tp2 - tp1) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
