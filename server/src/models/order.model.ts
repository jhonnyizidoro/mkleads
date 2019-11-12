export type Order = {
  orderId : number,
  vehicle : {
    id : number,
    externalId : string,
    title : string,
    sellValue : string,
    image : string
  },
  payment : {
    method : string,
    entry : string,
    installment : string
  },
  client : {
    id : number,
    name : string,
    cpf : string,
    cellphone : string,
    email : string
  },
  exchanges : [
    {
      id : number,
      km : number,
      conditionExternal : string,
      conditionInternal : string,
      financing : true,
      valueFinancing : number,
      valueOffer : number,
      accepted : true,
      fipeDetails : {
        fipeCod : number,
        brand : string,
        model : string,
        year : string,
        reference : string,
        value : number
      }
    }
  ]
}

