import { getAllProducts } from "../../../src/services/productService/getAllProducts";

test("Verificar la exepcion", async ()=>{
    const url = "/api/etc";
    expect( ()=> getAllProducts(url)).toThrow();
});