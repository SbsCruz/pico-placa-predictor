const { handleDate, handlePlate, handleTime } = require("../../../src/handlers/handleInput")

// New global readline based on arbitrary responses.
jest.mock('readline', () => {
    const closeMock = jest.fn();
    return {
        createInterface: () => ({
            question: jest.fn((query, callback) => {
                const response = {
                    'Por favor, ingrese el número de placa (ej. ABC-1234): ': 'ABC-1234',
                    'Ingrese la fecha (formato DD/MM/AAA): ': '20/09/2024',
                    'Ingrese la hora (formato HH:MM, 24 horas): ': '16:30',
                };
                callback(response[query] || '');
            }),
            close: closeMock,
        })
    };
});

describe('Tests in handleInput', () => {

    test('should return the plate validated', async () => {
        const plate = await handlePlate();
        expect(plate).toBe('ABC-1234');
    });

    test('should return the date validated', async () => {
        const date = await handleDate();
        expect(date).toBe('20/09/2024');
    });

    test('should return the time validated', async () => {
        const time = await handleTime();
        expect(time).toBe('16:30');
    });

});
