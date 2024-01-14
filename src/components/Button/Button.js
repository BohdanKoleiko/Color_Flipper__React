import styles from "./Buttons.module.css";

const Button = function ({ randomNumber, getColor, colorType }) {
   return (
      <button
         className={styles.button}
         onClick={() => randomNumber()}
         style={{ backgroundColor: `${getColor("bestContrast")}`, color: `${getColor(colorType)}` }}
      >
         click me
      </button>
   );
};

export default Button;
