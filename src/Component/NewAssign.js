// import React, { useEffect, useState } from "react";

// const NewAssign = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await fetch("/items");
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   const handleClick = (itemId, itemName) => {
//     const itemObject = {
//       item_id: itemId,
//       name: itemName,
//     };

//     // Use the itemObject as needed, such as storing in state or passing to other components
//     console.log(itemObject);
//   };

//   return (
//     <div>
//       <h2>Items:</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.item_id}>
//             {item.name}
//             <button onClick={() => handleClick(item.id, item.name)}>
//               Store
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default NewAssign;
