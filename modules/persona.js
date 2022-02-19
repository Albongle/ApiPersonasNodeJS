module.exports = class Persona {
  static #arrPersonas = [
    {
      id: 1,
      nombre: "pepe",
      apellido: "perez",
      edad: 30,
      sexo: "masculino",
    },
    {
      id: 2,
      nombre: "maria",
      apellido: "gonzalez",
      edad: 32,
      sexo: "femenino",
    },
    {
      id: 3,
      nombre: "luisa",
      apellido: "suarez",
      edad: 20,
      sexo: "femenino",
    },
    {
      id: 4,
      nombre: "marcelo",
      apellido: "lopez",
      edad: 30,
      sexo: "masculino",
    },
  ];

  getPersonas() {
    return Persona.#arrPersonas.length === 0 ? null : Persona.#arrPersonas;
  }
  getPersonaById(id) {
    return id != undefined && typeof id === "number"
      ? Persona.#arrPersonas.find((element) => element.id === id)
      : null;
  }

  setNewPersona(objeto) {

    console.log(objeto.edad);
    if (objeto.nombre != undefined && objeto.apellido != undefined && objeto.edad != undefined && parseInt(objeto.edad)!=NaN && objeto.sexo != undefined ) 
    {        
      let id = this.#getMaxId();
      id++;
      objeto.id = id;
      objeto.edad = parseInt(objeto.edad);
      Persona.#arrPersonas.push(objeto);
      return objeto;
    }
    else
    {
        return null;
    }
  }

  #getMaxId() {
    return Persona.#arrPersonas.length === 0
      ? 0
      : Persona.#arrPersonas.reduce(
          (acum, proximo) => (acum > proximo.id ? acum : proximo.id),
          0
        );
  }
};
