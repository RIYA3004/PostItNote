import React from "react";
function Helper() {
  const val = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {val}</p>
    </footer>
  );
}
export default Helper;
