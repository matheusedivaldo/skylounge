export const formatPrice = (price) => {
    const value = Number(price);
    if (Number.isNaN(value)) return null;
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
