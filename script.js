function calcular() {
    const cantidad = parseFloat(document.getElementById("cantidad").value) || 0;
    const precioCaja = parseFloat(document.getElementById("precioCaja").value) || 0;
  
    if (cantidad === 0 || precioCaja === 0) {
      alert("Por favor ingresa valores válidos.");
      return;
    }
  
    const valorUnitario = precioCaja / cantidad;
    const precioConIVA = valorUnitario + valorUnitario * 0.19;
    const precioCon30 = precioConIVA + precioConIVA * 0.3;
  
    document.getElementById("valorUnitario").textContent = valorUnitario.toFixed(4);
    document.getElementById("precioIVA").textContent = precioConIVA.toFixed(4);
    document.getElementById("precio30").textContent = precioCon30.toFixed(4);
  }
  