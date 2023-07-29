export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name}
        e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM como seletor
            ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}