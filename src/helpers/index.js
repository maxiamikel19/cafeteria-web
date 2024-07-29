export function formatardinheiro(valor) {
    return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}