export function domInjector(setor: string) {
    return function(target: any, propertyKey: string) {

        const getter = function() {
            const elemento = document.querySelector(seletor);
            return elemento;
        }
    }
}