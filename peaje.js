class Vehiculo {
	constructor (placa,tipo) {
		this.placa=placa;
		this.tipo=tipo;
	}
	tarifa() {
		let ta=0;

		if (this.tipo===1) ta = 10;

		else if(this.tipo===2) ta = 20;

		else ta = 30;

		return ta;
	}	
}
class Peaje {
	constructor() {
		this.contP=0;
		this.contT=0;
		this.contC=0;
		this.contV=0;
		this.acuMonto=0;
	}
	porcP() {
		return this.contP*100/this.contV;
	}
	porcT() {
		return this.contT*100/this.contV;
	}
	porcC() {
		return this.contC*100/this.contV;
	}
	montoTotal() {
		return this.acuMonto*0.40;
	}
	procesarVehiculo(v) {
		this.contV++;

		if(v.tipo===1) this.contP++;
		else if (v.tipo===2) this.contT++;
		else this.contC++;

		this.acuMonto += v.tarifa();
	}

}
const resultados = document.getElementById("resultados");
let v1 = new Vehiculo ("A12",1);
v2 = new Vehiculo ("A45",1);
v3 = new Vehiculo ("B123",2);
v4 = new Vehiculo ("C12",3);
v5 = new Vehiculo ("C34",3);
pe = new Peaje ();
vehiculos = [v1,v2,v3,v4,v5];

vehiculos.forEach( function(element) {
		pe.procesarVehiculo(element);
	}
);

resultados.innerHTML += `<br> Vehiculo: ${v1.placa} Tipo: ${v1.tipo} tarifa: ${v1.tarifa()}<br>
Vehiculo: ${v2.placa} Tipo: ${v2.tipo} tarifa: ${v2.tarifa()}<br>
Vehiculo: ${v3.placa} Tipo: ${v3.tipo} tarifa: ${v3.tarifa()}<br>
Vehiculo: ${v4.placa} Tipo: ${v4.tipo} tarifa: ${v4.tarifa()}<br>
Vehiculo: ${v5.placa} Tipo: ${v5.tipo} tarifa: ${v5.tarifa()}<br>
<br><b>Datos del Peaje</b><br>
Porcentaje de Vehiculos Particulares: ${pe.porcP()}%<br>
Porcentaje de Vehiculos de Transporte: ${pe.porcT()}%<br>
Porcentaje de Vehiculos de Carga: ${pe.porcC()}%<br>
Monto Recaudado por el Municipio ${pe.montoTotal()} bs
`
