export default async function fetchInventory() {
  const response = await fetch(`http://localhost:8080/inventario`);
  const json = await response.json();
  return json;
}
