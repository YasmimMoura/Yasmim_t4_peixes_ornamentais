function calculate() {
    // Obtém os valores dos campos de entrada
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    // Calcula o volume do aquário em litros
    const volume = (length * width * height) / 1000;

    // Calcula a potência da bomba (6x o volume)
    const pumpPower = volume * 6;

    // Calcula a potência do aquecedor (1W por litro)
    const heaterPower = volume;

    // Atualiza o HTML com os resultados
    document.getElementById('volume').textContent = `Volume do aquário: ${volume.toFixed(2)} litros`;
    document.getElementById('pump').textContent = `Potência da bomba necessária: ${pumpPower.toFixed(2)} L/h`;
    document.getElementById('heater').textContent = `Potência do aquecedor necessária: ${heaterPower.toFixed(2)} W`;
}
