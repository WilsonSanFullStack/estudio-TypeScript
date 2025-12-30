//!----------------------------
//? INTERFACES VS TYPES
// las interfaces no necesitan el igual y tambien la puedo declarar multiples veces y ella acomula todas las pripiedades
// los types no pueden ser declarados multiples veces
// las interfaces solo sirven para objetos
// los types sirven para cualquier tipo de dato
type TPaymentMethod = "debito" | "credito" | "efectivo"; //selector de metodo de pago
interface IProductoBase {
  price: number;
  paymentMethod: TPaymentMethod; //selector de metodo de pago
  nameClient: string;
}

type TProductoBase = {
  price: number;
  paymentMethod: TPaymentMethod; //selector de metodo de pago
  nameClient: string;
};

//herencia
interface TFisica extends IProductoBase {
  productName: string;
  clientAddress: string;
  quantity: number;
}
type TVirtual = TProductoBase & {
  templateName: string;
  format: "jpg" | "png" | "pdf";
};

class ProductoVirtual implements TVirtual {
  price: number = 500;
  paymentMethod: TPaymentMethod = "efectivo";
  nameClient: string = "wilson";
  templateName: string = "folleto1";
  format: "jpg" | "png" | "pdf" = "pdf";
}
class ProductoFisico implements TFisica {
  price: number = 500;
  paymentMethod: TPaymentMethod = "efectivo";
  nameClient: string = "wilson";
  productName: string = "libro";
  clientAddress: string = "calle falsa 123";
  quantity: number = 1;
}
