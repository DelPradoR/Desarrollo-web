const lineasDeCodigo = [
    "a = 1 + 2;",
    "b = 3 + 4;",
    "c = 5 + 6;",
    "d = 7 + 8;",
    "e = 9 + 10;",
    "f = 11 + 12;",
    "g = 13 + 14;",
    "h = 15 + 16;",
    "i = 17 + 18;",
    "console.log('1 + 2');",
    "console.log('3 + 4');",
    "console.log('5 + 6');",
    "console.log('7 + 8');",
    "console.log('9 + 10');",
    "console.log('11 + 12');",
    "console.log('13 + 14');",
    "console.log('15 + 16');",
    "console.log('17 + 18');",
    "console.log(a);",
    "console.log(b);",
    "console.log(c);",
    "console.log(d);",
    "console.log(e);",
    "console.log(f);",
    "console.log(g);",
    "console.log(h);",
    "console.log(i);"
  ];
  
  class Proceso {
    constructor(id, codigo) {
      this.id = id;
      this.codigo = codigo; 
      this.lineaActual = 0; 
    }
  
    ejecutarLinea() {
      if (this.lineaActual < this.codigo.length) {
        console.log(`Proceso ${this.id}`);
        console.log(`Línea de código: ${this.codigo[this.lineaActual]}`);
        this.lineaActual++;
      } else {
        console.log(`Proceso ${this.id}`);
        console.log("Terminado");
      }
    }
  
    isFinalizado() {
      return this.lineaActual >= this.codigo.length;
    }
  }
  
  function inicializar(numeroProcesos) {
    let procesos = [];
    let numeroProceso = 1;
  
    for (let i = 0; i < numeroProcesos; i++) {
      let codigo = [
        lineasDeCodigo[i * 3],       // Asignar líneas en grupos de 3
        lineasDeCodigo[i * 3 + 1],
        lineasDeCodigo[i * 3 + 2]
      ];
      procesos.push(new Proceso(numeroProceso++, codigo));
    }
  
    return procesos;
  }
  
  function iniciarSimulacion(procesos) {
    let procesosPendientes = procesos.slice();
    let turno = 0;
  
    while (procesosPendientes.length > 0) {
      let procesoActual = procesosPendientes[turno];
  
      procesoActual.ejecutarLinea();
  
      if (procesoActual.isFinalizado()) {
        procesosPendientes.splice(turno, 1);
      } else {
        turno = (turno + 1) % procesosPendientes.length; 
      }
    }
  
    console.log("Todos los procesos han finalizado.");
  }
  
  const numeroProcesos = parseInt(process.argv[2]) || 3;
  const procesos = inicializar(numeroProcesos);
  iniciarSimulacion(procesos);