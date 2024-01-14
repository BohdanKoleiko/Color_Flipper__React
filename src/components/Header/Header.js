import styles from "./Header.module.css";

const Header = function ({ setColorType, colorType }) {
   const colorTypes = [
      { type: "name", label: "simple", className: styles.colorTypesSimple },
      { type: "hex", label: "hex", className: styles.colorTypesHex },
   ];

   return (
      <header className={styles.header}>
         <div className={styles.headerWrapper}>
            <h1>Color Flipper</h1>
            <nav>
               <ul className={styles.colorTypes}>
                  {colorTypes.map(({ type, label, className }) => (
                     <li
                        key={type}
                        className={`${className} ${colorType === type ? styles.active : ""}`}
                        onClick={() => setColorType(type)}
                     >
                        {label}
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
