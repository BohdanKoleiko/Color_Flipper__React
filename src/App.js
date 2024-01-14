import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

const colorsList = "html";
const API_URL = `https://api.color.pizza/v1/?list=${colorsList}`;

function App() {
   const [data, setData] = useState({
      colors: [],
      colorType: "name",
      isLoading: false,
      error: "",
   });
   const [numberCurrentColor, setNumberCurrentColor] = useState(0);

   const setDataHandler = (name, value) => {
      setData((prevState) => ({ ...prevState, [name]: value }));
   };

   const setColorTypeHandler = (type) => {
      setData({ ...data, colorType: type });
   };

   const generateRandomNumber = () => {
      setNumberCurrentColor(Math.floor(Math.random() * data.colors.length));
   };

   const getColor = (name) => {
      return data.colors[numberCurrentColor][name];
   };

   useEffect(() => {
      (async () => {
         try {
            const res = await fetch(API_URL);
            const gottenColors = await res.json();

            setDataHandler("colors", gottenColors.colors);
         } catch (error) {
            setDataHandler("error", error.message);
         }

         setDataHandler("isLoading", true);
      })();
   }, []);

   return data.error ? (
      <h2 className={styles.errorMesage}>{data.error}</h2>
   ) : (
      data.isLoading && (
         <>
            <Header setColorType={setColorTypeHandler} {...data} />
            <main
               className={styles.main}
               style={{ backgroundColor: `${getColor(data.colorType)}` }}
            >
               <div>
                  <p
                     className={styles.text}
                     style={{
                        backgroundColor: `${getColor("bestContrast")}`,
                        color: `${getColor(data.colorType)}`,
                     }}
                  >
                     background color: <span>{getColor(data.colorType)}</span>
                  </p>
                  <Button randomNumber={generateRandomNumber} getColor={getColor} {...data} />
               </div>
            </main>
         </>
      )
   );
}

export default App;
